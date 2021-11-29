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
      module.exports = addNewPost2;
    }
  });

  // index.js
  var addNewPost = require_addNewPost();
  addNewPost("courtney");
})();
