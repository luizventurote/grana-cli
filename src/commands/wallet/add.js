import { addWallet } from '../../controllers/wallet-controller.js';
import { currentProfile } from '../../controllers/profile-controller.js';

export function addWalletCommand({ name, profile }) {
  let profileId = profile;
  if (!profileId) {
    const p = currentProfile();
    profileId = p && p.id;
  }
  if (!profileId) {
    console.log('Please select a profile first.');
    return;
  }
  addWallet({ name, profileId });
  console.log(`Wallet '${name}' created.`);
}
