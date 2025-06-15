export function createTransaction(db, { walletId, type, amount, description = '', date }) {
  db.insertTransaction({ walletId, type, amount, description, date });
}
