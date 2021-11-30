/**
 * @jest-environment jsdom
 */

test('displayed value increments by 1 when button is clicked', () => {
  document.body.innerHTML = `<span id="counter">0</span>
  <button id="inc-button">Increment</button>`;
  require('./counter');
  const button = document.querySelector('#inc-button');
  console.log(document.querySelector('#counter'));
  button.click();
  expect(document.querySelector('#counter').innerText).toBe(1);
});
