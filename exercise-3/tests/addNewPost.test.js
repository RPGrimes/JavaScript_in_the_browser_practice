/**
 * @jest-environment jsdom
 */

    test('addNewPost', () => {
      document.body.innerHTML = 
      `<input type='text' id='new-post-content'>
      <button id="add-post-btn">Add post</button>
      <div class="post" id="post-1">
        A first post
      </div>
      <div class="post" id="post-2">
        A second post
      </div>
      <div class="post" id="post-3">
        A third post
      </div>`;
      require('../addNewPost.js');
      // addNewPost('add a test post');
      const button = document.querySelector('#add-post-btn');
      document.querySelector('#new-post-content').value = 'New post here'
      button.click();
      expect(document.querySelectorAll('.post').length).toBe(4);
      expect(document.querySelector('#post-4').innerText).toBe('New post here');
      });
  
    