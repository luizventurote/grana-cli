import { createCategory, listCategories } from '../models/category.js';
import { getAdapter } from '../config/db.js';

export function addCategory({ name }) {
  const db = getAdapter();
  createCategory(db, { name });
}

export function getCategories() {
  const db = getAdapter();
  return listCategories(db);
}
