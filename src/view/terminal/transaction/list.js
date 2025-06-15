import { getTransactions } from '../../../controllers/transaction-controller.js';
import { getWallets } from '../../../controllers/wallet-controller.js';
import { renderTable } from '../ui.js';

export function listTransactionsCommand(options = {}) {
  const filters = {};
  if (options.walletId) filters.walletId = options.walletId;
  if (options.type) filters.type = options.type;
  const transactions = getTransactions(filters);
  if (!transactions.length) {
    console.log('No transactions found.');
    return;
  }
  const wallets = getWallets();
  const walletMap = Object.fromEntries(wallets.map(w => [w.id, w.name]));
  const headers = ['ID', 'Wallet', 'Type', 'Amount', 'Description', 'Date'];
  const rows = transactions.map(t => [
    String(t.id),
    walletMap[t.wallet_id] || String(t.wallet_id),
    t.type,
    String(t.amount),
    t.description,
    t.date
  ]);
  console.log(renderTable(headers, rows));
}
