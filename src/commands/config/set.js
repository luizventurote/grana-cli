import { setConfig } from '../../controllers/config-controller.js';

export function setConfigCommand({ key, value }) {
  setConfig({ key, value });
  console.log('Config updated.');
}
