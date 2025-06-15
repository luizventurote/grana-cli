export function createWallet(db, { name, balance = 0 }) {
  db.insertWallet({ name, balance });
}

export function listWallets(db) {
  return db.getWallets();
}

export function setWalletBalance(db, { walletId, balance }) {
  db.updateWalletBalance(walletId, balance);
}

export function adjustWalletBalance(db, { walletId, amount }) {
  db.adjustWalletBalance(walletId, amount);
}
