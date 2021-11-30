(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // addNewPost.js
  var require_addNewPost = __commonJS({
    "addNewPost.js"(exports, module) {
      var addNewPost2 = (title) => {
        const newPostEl = document.createElement("div");
        const newId = document.querySelectorAll(".post").length + 1;
        newPostEl.innerText = title;
        newPostEl.className = "post";
        newPostEl.id = "post-" + newId;
        document.body.appendChild(newPostEl);
      };
      var button = document.querySelector("#add-post-btn");
      button.addEventListener("click", () => {
        const newPostContent = document.querySelector("#new-post-content").value;
        addNewPost2(newPostContent);
      });
      module.exports = addNewPost2, button;
    }
  });

  // index.js
  var addNewPost = require_addNewPost();
  addNewPost("Simon is losing his mind");
})();
