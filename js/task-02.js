const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function makeIngredient(itemName) {
  const item = document.createElement('li');
  item.textContent = itemName;
  item.classList.add('item');
  return item;
}

const ingredientsParent = document.querySelector('#ingredients');
const ingredientsList = ingredients.map(makeIngredient);

ingredientsParent.append(...ingredientsList);
