import { createProfile, listProfiles } from '../models/profile.js';
import { getAdapter } from '../config/db.js';
import { setConfigValue, getConfigValue } from '../models/config.js';

export function addProfile({ name }) {
  const db = getAdapter();
  createProfile(db, { name });
}

export function getProfiles() {
  const db = getAdapter();
  return listProfiles(db);
}

export function useProfile({ profileId }) {
  const db = getAdapter();
  setConfigValue(db, { key: 'currentProfile', value: String(profileId) });
}

export function currentProfile() {
  const db = getAdapter();
  const id = getConfigValue(db, 'currentProfile');
  if (!id) return null;
  return listProfiles(db).find(p => String(p.id) === String(id));
}
