import { createTransaction } from '../models/transaction.js';
import { getAdapter } from '../config/db.js';

export function receiveIncome(data) {
  const db = getAdapter();
  createTransaction(db, { ...data, type: 'IN' });
}

export function payExpense(data) {
  const db = getAdapter();
  createTransaction(db, { ...data, type: 'OUT' });
}
