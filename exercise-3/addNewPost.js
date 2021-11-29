const addNewPost = (title) => {
  const newPostEl = document.createElement('div');
  // calculate the new number for the html ID
  const newId = document.querySelectorAll('.post').length + 1;

  newPostEl.innerText = title;
  newPostEl.className = 'post';
  newPostEl.id = 'post-' + newId;
  document.body.appendChild(newPostEl);
}

module.exports = addNewPost;