const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function makeIngredient(ingredientName) {
  const ingredient = document.createElement('li');
  ingredient.textContent = ingredientName;
  ingredient.classList.add('item');
  return ingredient;
}

const ingredientsParentElement = document.querySelector('#ingredients');
const allIngredients = ingredients.map(makeIngredient);

ingredientsParentElement.append(...allIngredients);
