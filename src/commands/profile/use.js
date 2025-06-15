import { useProfile } from '../../controllers/profile-controller.js';

export function useProfileCommand({ profile }) {
  useProfile({ profileId: profile });
  console.log('Profile set.');
}
