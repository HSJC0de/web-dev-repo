const titleInputElement = document.querySelector('#titleArea');
const textInputElement = document.querySelector('#inputArea');
const insertButtonElement = document.querySelector('#id-button-insert');
let postButtonElement = document.querySelector('#id-button-post');

//add 'posts' to this element
const containerPostsElement = document.querySelector('.container-posts');

function createPost(){
  const title = titleInputElement.value;
  const text = textInputElement.value;

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
      <img class="post-image" src="images/post-image-eiffel-tower.jpg">
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