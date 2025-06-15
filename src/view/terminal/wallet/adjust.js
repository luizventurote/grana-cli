import { adjustWalletBalance } from '../../../controllers/wallet-controller.js';

export function adjustBalanceCommand({ wallet, amount }) {
  adjustWalletBalance({ walletId: wallet, amount: parseFloat(amount) });
  console.log('Balance adjusted.');
}
