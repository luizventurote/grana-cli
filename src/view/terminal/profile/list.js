import { getProfiles } from '../../../controllers/profile-controller.js';

export function listProfileCommand() {
  const profiles = getProfiles();
  if (!profiles.length) {
    console.log('No profiles found.');
    return;
  }
  profiles.forEach(p => console.log(`${p.id}: ${p.name}`));
}
