import { addCategory } from '../../../controllers/category-controller.js';

export function addCategoryCommand({ name }) {
  addCategory({ name });
  console.log('Category added.');
}
