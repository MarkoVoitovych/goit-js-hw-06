function showAllCategoriesList(parentClass, childClass) {
  const categoriesParent = document.querySelector(parentClass);
  const categoriesList = Array.from(
    categoriesParent.querySelectorAll(childClass),
  );
  console.log(`Number of categories: ${categoriesList.length}`);
  for (const category of categoriesList) {
    const categoryTitle = category.querySelector('h2').textContent;
    const numberOfElements = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryTitle}\nElements: ${numberOfElements}`);
  }
}
showAllCategoriesList('#categories', '.item');
