const words = ["MOUNTAIN", "RIVER", "SKYSCRAPER", "FOREST", "OCEAN", "PRAIRIE", "CANYON", "DESERT", "ISLAND", "VALLEY"];

const letterContainer = document.querySelector('.letter-container');

let word = '';

function resetBoxes(){
  while (letterContainer.firstChild) {
    letterContainer.removeChild(letterContainer.lastChild);
  }
}

function getWord(){
  let randIndex = Math.floor(Math.random() * words.length);
  word = words[randIndex];
  return word;
}

function buildBoxes(){
  word = getWord();
  let numBoxes = word.length;
  for (i = 0; i < numBoxes; i++){
    letterContainer.innerHTML += `<div class="box box-position${i}">#</div>`;
  }
}

function fillCorrect(){
  resetBoxes();
  for (i=0; i<word.length; i++){
    letterContainer.innerHTML += `<div class="box box-position${i}">${word[i]}</div>`;
  }
}

function insertChar(input){
  for (i = 0; i < word.length; i++){
    if (input === word[i]){
      let currentElement = document.querySelector(`.box-position${i}`)
      currentElement.innerHTML = `<div class="box box-position${i}">${input}</div>`
    }
  }
}


resetBoxes();
buildBoxes();

document.addEventListener('keydown', function(event){
  let key = event.key.toUpperCase();
  insertChar(key);
})