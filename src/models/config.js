export function setConfigValue(db, { key, value }) {
  db.setConfig(key, value);
}

export function getConfigValue(db, key) {
  return db.getConfig(key);
}
