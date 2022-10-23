const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');
let counterValue = 0;

function decreaseCounterValue() {
  counterValue -= 1;
  counter.textContent = counterValue;
}

function increaseCounterValue() {
  counterValue += 1;
  counter.textContent = counterValue;
}

decrementBtn.addEventListener('click', decreaseCounterValue);
incrementBtn.addEventListener('click', increaseCounterValue);
