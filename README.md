# Grana CLI

Grana CLI is a command-line financial manager built with Node.js. It follows a layered MVC architecture and uses SQLite through a database adapter. CLI commands now live under `src/view/terminal` while the application logic resides in `src/controllers` and `src/models`.

## Install

```bash
npm install
```

## Usage

```bash
node src/index.js --help
```

### Examples

Add a wallet:

```bash
node src/index.js wallet:add MyWallet

# specify profile (optional if a current profile is set)
node src/index.js wallet:add MyWallet --profile 1
```

List wallets:

```bash
node src/index.js wallet:list
```

Record income:

```bash
node src/index.js receive --wallet 1 --amount 1000 --description Salary
```

Record expense interactively:

```bash
node src/index.js pay
```

List transactions:

```bash
node src/index.js transactions
```

This command renders a colored table using [Lipgloss](https://github.com/charmbracelet/lipgloss) via the `charsm` library:

```
╭──┬────────────┬────┬──────┬───────────┬──────────╮
│ID│Wallet      │Type│Amount│Description│Date      │
├──┼────────────┼────┼──────┼───────────┼──────────┤
│1 │SampleWallet│IN  │100   │Salary     │2024-01-01│
│2 │SampleWallet│OUT │50    │Groceries  │2024-01-02│
╰──┴────────────┴────┴──────┴───────────┴──────────╯
```

If `charsm` fails to initialize (for example on macOS), the CLI prints a plain tab-separated table instead.
## Commands

### Wallets

- `wallet:add <name>` - Add a wallet to the current profile (use `--profile` to specify)
- `wallet:list` - List wallets
- `wallet:set-balance <wallet> <balance>` - Set wallet balance
- `wallet:adjust <wallet> <amount>` - Adjust wallet balance
- `wallet:balance` - Show wallet balances

### Transactions

- `receive`/`add` - Record income
- `pay` - Record expense
- `transactions` - List transactions

### Profiles

- `profile:add <name>` - Add a profile
- `profile:list` - List profiles
- `profile:use <profile>` - Use profile
- `profile:current` - Show current profile

### Payments

- `payment:add <client> <amount> <dueDate>` - Add developer payment
- `payment:list` - List payments
- `payment:mark-paid <payment>` - Mark payment as paid
- `payment:link <payment> <transaction>` - Link payment to transaction
- `payment:pending` - List pending payments

### Categories

- `category:add <name>` - Add category
- `category:list` - List categories

### Config

- `config:set <key> <value>` - Set configuration value
- `config:get <key>` - Get configuration value
