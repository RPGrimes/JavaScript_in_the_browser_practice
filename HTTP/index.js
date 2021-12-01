const fetchGithubRepo = require("./fetchGithubRepo");
const updatePage = require("./updatePage");

const inputEl = document.querySelector('#repo-name-input');
const buttonEl = document.querySelector('#repo-submit');

buttonEl.addEventListener('click', () => {
  let name = inputEl.value;
  fetchGithubRepo(name, (data) => {
    updatePage(data);
  });
});