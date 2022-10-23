function showAllCategoriesList(parentClass, childClass) {
  const categoriesParentElement = document.querySelector(parentClass);
  const categoriesList = Array.from(
    categoriesParentElement.querySelectorAll(childClass),
  );
  console.log(`Number of categories: ${categoriesList.length}`);
  for (const category of categoriesList) {
    const categoryTitle = category.querySelector('h2').textContent;
    const numberOfElements = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryTitle}\nElements: ${numberOfElements}`);
  }
}
showAllCategoriesList('#categories', '.item');
