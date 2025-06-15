import { addWallet } from '../../controllers/wallet-controller.js';

export function addWalletCommand({ name }) {
  addWallet({ name });
  console.log(`Wallet '${name}' created.`);
}
