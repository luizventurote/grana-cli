import { getCategories } from '../../controllers/category-controller.js';

export function listCategoryCommand() {
  const categories = getCategories();
  if (!categories.length) {
    console.log('No categories found.');
    return;
  }
  categories.forEach(c => console.log(`${c.id}: ${c.name}`));
}
