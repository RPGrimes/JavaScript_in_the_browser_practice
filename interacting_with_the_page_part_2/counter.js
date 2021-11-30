const increment = () => {
  const counterElement = document.querySelector('#counter');
  let value = parseInt(counterElement.innerHTML);
  value += 1;
  counterElement.innerText = value;
}

const button = document.querySelector('#inc-button');
  button.addEventListener('click', () => {
  increment();
});


// let counter = 0; // using let, since we'll update this variable
// const counterEl = document.querySelector('#counter');
// const incrementButton = document.querySelector('#inc-button');

// incrementButton.addEventListener('click', () => {
//   counter += 1;
//   counterEl.innerText = counter;
// });
