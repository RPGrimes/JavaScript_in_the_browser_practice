(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // fetchGithubRepo.js
  var require_fetchGithubRepo = __commonJS({
    "fetchGithubRepo.js"(exports, module) {
      var fetchGithubRepo2 = (repoName, callback) => {
        fetch("https://api.github.com/repos/" + repoName).then((response) => response.json()).then((data) => {
          callback(data);
        });
      };
      module.exports = fetchGithubRepo2;
    }
  });

  // updatePage.js
  var require_updatePage = __commonJS({
    "updatePage.js"(exports, module) {
      var updatePage2 = (repoData) => {
        document.querySelector("#repo-name").innerText = repoData.full_name;
        document.querySelector("#repo-image").src = repoData.organization.avatar_url;
        document.querySelector("#repo-description").innerText = repoData.description;
        document.querySelector("#repo-link").setAttribute("href", repoData.html_url);
        document.querySelector("#repo-language").innerText = repoData.language;
      };
      module.exports = updatePage2;
    }
  });

  // index.js
  var fetchGithubRepo = require_fetchGithubRepo();
  var updatePage = require_updatePage();
  var inputEl = document.querySelector("#repo-name-input");
  var buttonEl = document.querySelector("#repo-submit");
  buttonEl.addEventListener("click", () => {
    let name = inputEl.value;
    fetchGithubRepo(name, (data) => {
      updatePage(data);
    });
  });
})();
