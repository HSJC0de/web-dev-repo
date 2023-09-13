const titleInputElement = document.querySelector('#titleArea');
const textInputElement = document.querySelector('#inputArea');
const insertButtonElement = document.querySelector('#id-button-insert');
const postImageElement = document.querySelector('post-image');
let postButtonElement = document.querySelector('#id-button-post');

//add 'posts' to this element
const containerPostsElement = document.querySelector('.container-posts');

/* this is what a post section consists of
<div class="post">
          <div>
            <p class="container-post-title">Title</p>
          </div>
          <div class="container-post-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div class="container-post-image">
            <img class="post-image" src="images/post-image-eiffel-tower.jpg">
          </div>
        </div>
*/


function createPost(){
  const title = titleInputElement.value;
  const text = textInputElement.value;
  const imageURL = URL.createObjectURL(insertButtonElement.files[0]);
  
  titleInputElement.value = '';
  textInputElement.value = '';
  postHTML = 
  `
  <div class="post">
    <div>
      <p class="container-post-title">${title}</p>
    </div>
    <div class="container-post-text">
      <p>${text}</p>
    </div>
    <div class="container-post-image">
      <img class="post-image" src="${imageURL}">
    </div>
  </div>
  `;
  containerPostsElement.insertAdjacentHTML('beforeend', postHTML);
}

textInputElement.addEventListener('keypress', function(event){
  if (event.key === 'Enter'){
    event.preventDefault();
    createPost();
  }
});
postButtonElement.addEventListener('click', createPost);