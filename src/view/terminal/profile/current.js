import { currentProfile } from '../../../controllers/profile-controller.js';

export function currentProfileCommand() {
  const profile = currentProfile();
  if (!profile) {
    console.log('No profile selected.');
    return;
  }
  console.log(`Current profile: ${profile.name}`);
}
