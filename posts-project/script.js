const titleInputElement = document.querySelector('#titleArea');
const textInputElement = document.querySelector('#inputArea');
const insertButtonElement = document.querySelector('#id-button-insert');
let postButtonElement = document.querySelector('#id-button-post');

//add 'posts' to this element
const containerPostsElement = document.querySelector('.container-posts');

/*
postButtonElement.addEventListener('click', function (){
  console.log(titleInputElement.value);
  console.log(textInputElement.value);
  titleInputElement.value = '';
  textInputElement.value = '';
}) */


function createPost(){
  const title = titleInputElement.value;
  const text = textInputElement.value;
  console.log(titleInputElement.value);
  console.log(textInputElement.value);
  /*
  containerPostsElement.innerHTML += 
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
  */
  console.log('test');
  //postButtonElement = document.querySelector('#id-button-post');
}

postButtonElement.addEventListener('click', createPost);

//problem - only posting once, cant post again