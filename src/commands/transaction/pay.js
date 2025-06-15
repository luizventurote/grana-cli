import inquirer from 'inquirer';
import { parseDate } from '../../core/date.js';
import { getWallets } from '../../controllers/wallet-controller.js';
import { payExpense } from '../../controllers/transaction-controller.js';

export async function payCommand(options) {
  const wallets = getWallets();
  if (!wallets.length) {
    console.log('Please create a wallet first.');
    return;
  }

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'walletId',
      message: 'Wallet:',
      choices: wallets.map(w => ({ name: w.name, value: w.id })),
      when: () => !options.wallet
    },
    {
      type: 'input',
      name: 'amount',
      message: 'Amount:',
      when: () => !options.amount
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description:',
      when: () => !options.description
    },
    {
      type: 'input',
      name: 'date',
      message: 'Date (YYYY-MM-DD):',
      default: () => new Date().toISOString().slice(0, 10),
      when: () => !options.date
    }
  ]);

  const data = {
    walletId: options.wallet || answers.walletId,
    amount: parseFloat(options.amount || answers.amount),
    description: options.description || answers.description,
    date: parseDate(options.date || answers.date)
  };

  payExpense(data);
  console.log('Expense recorded.');
}
