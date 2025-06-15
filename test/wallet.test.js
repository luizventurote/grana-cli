import { describe, it, expect, beforeEach } from 'vitest';
import { SQLiteAdapter } from '../src/adapters/sqlite-adapter.js';
import fs from 'fs';

const dbPath = './test/test.sqlite';

function setupDb() {
  if (fs.existsSync(dbPath)) fs.unlinkSync(dbPath);
  return new SQLiteAdapter(dbPath);
}

describe('SQLiteAdapter wallets', () => {
  let db;
  beforeEach(() => {
    db = setupDb();
  });

  it('inserts and retrieves wallet', () => {
    db.insertWallet({ name: 'Test' });
    const wallets = db.getWallets();
    expect(wallets.length).toBe(1);
    expect(wallets[0].name).toBe('Test');
  });
});
