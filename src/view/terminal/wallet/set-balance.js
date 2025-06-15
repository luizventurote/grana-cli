import { setWalletBalance } from '../../../controllers/wallet-controller.js';

export function setBalanceCommand({ wallet, balance }) {
  setWalletBalance({ walletId: wallet, balance: parseFloat(balance) });
  console.log('Balance set.');
}
