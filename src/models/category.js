export function createCategory(db, { name }) {
  db.insertCategory({ name });
}

export function listCategories(db) {
  return db.getCategories();
}
