(() => {
  // counter.js
  var increment = () => {
    const counterElement = document.querySelector("#counter");
    counterElement.innerText++;
  };
  var button = document.querySelector("#inc-button");
  button.addEventListener("click", () => {
    increment();
  });
})();
