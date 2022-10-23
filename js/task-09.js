function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', () => {
  const currentColor = getRandomHexColor();
  document.querySelector('.color').textContent = currentColor;
  document.querySelector('body').style.backgroundColor = `${currentColor}`;
});
