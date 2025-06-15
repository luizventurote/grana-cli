import { SQLiteAdapter } from '../adapters/sqlite-adapter.js';

let adapter;
export function getAdapter() {
  if (!adapter) {
    adapter = new SQLiteAdapter();
  }
  return adapter;
}
