export function createProfile(db, { name }) {
  db.insertProfile({ name });
}

export function listProfiles(db) {
  return db.getProfiles();
}
