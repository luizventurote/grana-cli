import { addProfile } from '../../controllers/profile-controller.js';

export function addProfileCommand({ name }) {
  addProfile({ name });
  console.log('Profile added.');
}
