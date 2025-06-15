import { getProfiles } from '../../../controllers/profile-controller.js';
import { renderTable } from '../ui.js';

export function listProfileCommand() {
  const profiles = getProfiles();
  if (!profiles.length) {
    console.log('No profiles found.');
    return;
  }
  const headers = ['ID', 'Name'];
  const rows = profiles.map(p => [String(p.id), p.name]);
  console.log(renderTable(headers, rows));
}
