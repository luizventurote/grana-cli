import { setConfigValue, getConfigValue } from '../models/config.js';
import { getAdapter } from '../config/db.js';

export function setConfig({ key, value }) {
  const db = getAdapter();
  setConfigValue(db, { key, value });
}

export function getConfig({ key }) {
  const db = getAdapter();
  return getConfigValue(db, key);
}
