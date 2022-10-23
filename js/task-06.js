const textInput = document.querySelector('#validation-input');

let inputValue = '';

textInput.addEventListener('input', event => {
  inputValue = event.currentTarget.value;
});

textInput.addEventListener('blur', () => {
  if (inputValue.length > textInput.dataset.length) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
});
