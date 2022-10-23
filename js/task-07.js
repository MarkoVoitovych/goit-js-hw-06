const input = document.querySelector('#font-size-control');
const textFontSize = document.querySelector('#text');
textFontSize.style.fontSize = `${input.value}px`;

input.addEventListener(
  'input',
  event => (textFontSize.style.fontSize = `${event.currentTarget.value}px`),
);
