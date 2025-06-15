import { getWallets } from '../../controllers/wallet-controller.js';
import chalk from 'chalk';

export function walletBalanceCommand() {
  const wallets = getWallets();
  if (!wallets.length) {
    console.log('No wallets found.');
    return;
  }
  wallets.forEach(w => {
    console.log(`${w.id}: ${chalk.green(w.name)} - Balance: ${w.balance}`);
  });
}
