import { addWalletCommand } from './wallet/add.js';
import { listWalletCommand } from './wallet/list.js';
import { setBalanceCommand } from './wallet/set-balance.js';
import { adjustBalanceCommand } from './wallet/adjust.js';
import { walletBalanceCommand } from './wallet/balance.js';
import { receiveCommand } from './transaction/receive.js';
import { payCommand } from './transaction/pay.js';
import { addProfileCommand } from './profile/add.js';
import { listProfileCommand } from './profile/list.js';
import { useProfileCommand } from './profile/use.js';
import { currentProfileCommand } from './profile/current.js';
import { addPaymentCommand } from './payment/add.js';
import { listPaymentCommand } from './payment/list.js';
import { markPaidCommand } from './payment/mark-paid.js';
import { linkPaymentCommand } from './payment/link.js';
import { pendingPaymentsCommand } from './payment/pending.js';
import { addCategoryCommand } from './category/add.js';
import { listCategoryCommand } from './category/list.js';
import { setConfigCommand } from './config/set.js';
import { getConfigCommand } from './config/get.js';

export function setupCommands(program) {
  program
    .command('wallet:add <name>')
    .description('Add a new wallet')
    .option('-p, --profile <profile>', 'Profile id')
    .action((name, options) => addWalletCommand({ name, profile: options.profile }));

  program
    .command('wallet:list')
    .description('List wallets')
    .action(() => listWalletCommand());

  program
    .command('receive')
    .alias('add')
    .description('Record income')
    .option('-w, --wallet <wallet>', 'Wallet id')
    .option('-a, --amount <amount>', 'Amount')
    .option('-d, --description <description>', 'Description')
    .option('--date <date>', 'Date in YYYY-MM-DD')
    .action(receiveCommand);

  program
    .command('pay')
    .description('Record expense')
    .option('-w, --wallet <wallet>', 'Wallet id')
    .option('-a, --amount <amount>', 'Amount')
    .option('-d, --description <description>', 'Description')
    .option('--date <date>', 'Date in YYYY-MM-DD')
    .action(payCommand);

  program
    .command('wallet:set-balance <wallet> <balance>')
    .description('Set wallet balance')
    .action((wallet, balance) => setBalanceCommand({ wallet, balance }));

  program
    .command('wallet:adjust <wallet> <amount>')
    .description('Adjust wallet balance by amount')
    .action((wallet, amount) => adjustBalanceCommand({ wallet, amount }));

  program
    .command('wallet:balance')
    .description('Show wallet balances')
    .action(() => walletBalanceCommand());

  program
    .command('profile:add <name>')
    .description('Add profile')
    .action((name) => addProfileCommand({ name }));

  program
    .command('profile:list')
    .description('List profiles')
    .action(() => listProfileCommand());

  program
    .command('profile:use <profile>')
    .description('Use profile')
    .action((profile) => useProfileCommand({ profile }));

  program
    .command('profile:current')
    .description('Show current profile')
    .action(currentProfileCommand);

  program
    .command('payment:add <client> <amount> <dueDate>')
    .description('Add developer payment')
    .action((client, amount, dueDate) =>
      addPaymentCommand({ client, amount, dueDate })
    );

  program
    .command('payment:list')
    .description('List payments')
    .action(() => listPaymentCommand());

  program
    .command('payment:mark-paid <payment>')
    .description('Mark payment as paid')
    .action((payment) => markPaidCommand({ payment }));

  program
    .command('payment:link <payment> <transaction>')
    .description('Link payment to transaction')
    .action((payment, transaction) =>
      linkPaymentCommand({ payment, transaction })
    );

  program
    .command('payment:pending')
    .description('List pending payments')
    .action(pendingPaymentsCommand);

  program
    .command('category:add <name>')
    .description('Add category')
    .action((name) => addCategoryCommand({ name }));

  program
    .command('category:list')
    .description('List categories')
    .action(() => listCategoryCommand());

  program
    .command('config:set <key> <value>')
    .description('Set config value')
    .action((key, value) => setConfigCommand({ key, value }));

  program
    .command('config:get <key>')
    .description('Get config value')
    .action((key) => getConfigCommand({ key }));
}
