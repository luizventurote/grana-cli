import {
  createWallet,
  listWallets,
  setWalletBalance as setBalanceModel,
  adjustWalletBalance as adjustBalanceModel
} from '../models/wallet.js';
import { getAdapter } from '../config/db.js';

export function addWallet({ name, profileId }) {
  const db = getAdapter();
  createWallet(db, { name, profileId });
}

export function getWallets() {
  const db = getAdapter();
  return listWallets(db);
}

export function setWalletBalance({ walletId, balance }) {
  const db = getAdapter();
  setBalanceModel(db, { walletId, balance });
}

export function adjustWalletBalance({ walletId, amount }) {
  const db = getAdapter();
  adjustBalanceModel(db, { walletId, amount });
}
