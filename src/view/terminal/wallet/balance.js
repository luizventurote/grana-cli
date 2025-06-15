import { getWallets } from '../../../controllers/wallet-controller.js';
import { renderTable } from '../ui.js';

export function walletBalanceCommand() {
  const wallets = getWallets();
  if (!wallets.length) {
    console.log('No wallets found.');
    return;
  }
  const headers = ['ID', 'Name', 'Balance'];
  const rows = wallets.map(w => [String(w.id), w.name, String(w.balance)]);
  console.log(renderTable(headers, rows));
}
