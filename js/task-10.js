const boxesAmountInput = document.querySelector('#controls input');
const createBoxesBtn = document.querySelector('button[data-create]');
const destroyBoxesBtn = document.querySelector('button[data-destroy]');
const boxesWrap = document.querySelector('#boxes');
let boxesAmount = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const newBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = `${getRandomHexColor()}`;
    newBoxes.push(box);
    box.style.width = `${30 + (boxesWrap.children.length + i) * 10}px`;
    box.style.height = `${30 + (boxesWrap.children.length + i) * 10}px`;
  }
  boxesWrap.append(...newBoxes);
}

function destroyBoxes() {
  boxesWrap.innerHTML = '';
}

boxesAmountInput.addEventListener(
  'input',
  event => (boxesAmount = Number(event.currentTarget.value)),
);
createBoxesBtn.addEventListener('click', () => createBoxes(boxesAmount));
destroyBoxesBtn.addEventListener('click', destroyBoxes);
