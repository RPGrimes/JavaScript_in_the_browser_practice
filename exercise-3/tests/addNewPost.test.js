/**
 * @jest-environment jsdom
 */

const addNewPost = require('../addNewPost.js');

  test('addNewPost', () => {
    document.body.innerHTML = `<div class="post" id="post-1">
      A first post
    </div>
    <div class="post" id="post-2">
      A second post
    </div>
    <div class="post" id="post-3">
      A third post
    </div>`;

    addNewPost('add a test post');
      expect(document.querySelectorAll('.post').length).toBe(4);
    });
  