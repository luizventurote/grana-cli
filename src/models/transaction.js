export function createTransaction(db, { walletId, type, amount, description = '', date }) {
  db.insertTransaction({ walletId, type, amount, description, date });
}

export function listTransactions(db, filters = {}) {
  return db.getTransactions(filters);
}
