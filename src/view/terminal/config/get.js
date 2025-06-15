import { getConfig } from '../../../controllers/config-controller.js';

export function getConfigCommand({ key }) {
  const value = getConfig({ key });
  console.log(value ?? 'Not set');
}
