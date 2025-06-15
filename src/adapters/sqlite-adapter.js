import Database from 'better-sqlite3';
import { DBAdapter } from './db-adapter.js';

export class SQLiteAdapter extends DBAdapter {
  constructor(dbPath = './src/db/grana.sqlite') {
    super();
    this.db = new Database(dbPath);
    this.setup();
  }

  setup() {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS wallets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        balance REAL DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        wallet_id INTEGER,
        type TEXT NOT NULL,
        amount REAL NOT NULL,
        description TEXT,
        date TEXT NOT NULL,
        FOREIGN KEY (wallet_id) REFERENCES wallets(id)
      );
      CREATE TABLE IF NOT EXISTS payments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        client TEXT NOT NULL,
        amount REAL NOT NULL,
        due_date TEXT NOT NULL,
        status TEXT DEFAULT 'Pending',
        transaction_id INTEGER
      );
      CREATE TABLE IF NOT EXISTS profiles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS config (
        key TEXT PRIMARY KEY,
        value TEXT
      );
    `);
  }

  getWallets() {
    return this.db.prepare('SELECT * FROM wallets').all();
  }

  insertWallet({ name, balance = 0 }) {
    const stmt = this.db.prepare('INSERT INTO wallets (name, balance) VALUES (?, ?)');
    stmt.run(name, balance);
  }

  insertTransaction({ walletId, type, amount, description = '', date }) {
    const stmt = this.db.prepare(`
      INSERT INTO transactions (wallet_id, type, amount, description, date)
      VALUES (?, ?, ?, ?, ?)
    `);
    stmt.run(walletId, type, amount, description, date);
  }

  getTransactions(filters = {}) {
    let query = 'SELECT * FROM transactions';
    const clauses = [];
    const params = [];
    if (filters.walletId) {
      clauses.push('wallet_id = ?');
      params.push(filters.walletId);
    }
    if (filters.type) {
      clauses.push('type = ?');
      params.push(filters.type);
    }
    if (clauses.length) {
      query += ' WHERE ' + clauses.join(' AND ');
    }
    return this.db.prepare(query).all(...params);
  }

  updateWalletBalance(id, balance) {
    this.db.prepare('UPDATE wallets SET balance = ? WHERE id = ?').run(balance, id);
  }

  adjustWalletBalance(id, amount) {
    this.db.prepare('UPDATE wallets SET balance = balance + ? WHERE id = ?').run(amount, id);
  }

  insertPayment({ client, amount, dueDate }) {
    const stmt = this.db.prepare(
      'INSERT INTO payments (client, amount, due_date) VALUES (?, ?, ?)'
    );
    stmt.run(client, amount, dueDate);
  }

  getPayments(filters = {}) {
    let query = 'SELECT * FROM payments';
    const clauses = [];
    const params = [];
    if (filters.status) {
      clauses.push('status = ?');
      params.push(filters.status);
    }
    if (clauses.length) {
      query += ' WHERE ' + clauses.join(' AND ');
    }
    return this.db.prepare(query).all(...params);
  }

  updatePaymentStatus(id, status) {
    this.db.prepare('UPDATE payments SET status = ? WHERE id = ?').run(status, id);
  }

  linkPaymentTransaction(paymentId, transactionId) {
    this.db
      .prepare('UPDATE payments SET transaction_id = ? WHERE id = ?')
      .run(transactionId, paymentId);
  }

  insertProfile({ name }) {
    this.db.prepare('INSERT INTO profiles (name) VALUES (?)').run(name);
  }

  getProfiles() {
    return this.db.prepare('SELECT * FROM profiles').all();
  }

  insertCategory({ name }) {
    this.db.prepare('INSERT INTO categories (name) VALUES (?)').run(name);
  }

  getCategories() {
    return this.db.prepare('SELECT * FROM categories').all();
  }

  setConfig(key, value) {
    this.db
      .prepare('INSERT INTO config (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value=excluded.value')
      .run(key, value);
  }

  getConfig(key) {
    const row = this.db.prepare('SELECT value FROM config WHERE key = ?').get(key);
    return row ? row.value : undefined;
  }
}
