import { getCategories } from '../../../controllers/category-controller.js';
import { renderTable } from '../ui.js';

export function listCategoryCommand() {
  const categories = getCategories();
  if (!categories.length) {
    console.log('No categories found.');
    return;
  }
  const headers = ['ID', 'Name'];
  const rows = categories.map(c => [String(c.id), c.name]);
  console.log(renderTable(headers, rows));
}
