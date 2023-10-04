const words = ["MOUNTAIN", "RIVER", "SKYSCRAPER", "FOREST", "OCEAN", "PRAIRIE", "CANYON", "DESERT", "ISLAND", "VALLEY"];

const letterContainer = document.querySelector('.letter-container');

let word = '';

function resetBoxes(){
  letterContainer.innerHTML = '';
}

function getWord(){
  let randIndex = Math.floor(Math.random() * words.length);
  word = words[randIndex];
  return word;
}

function buildBoxes(){
  let numBoxes = getWord().length;
  for (i = 0; i < numBoxes; i++){
    letterContainer.innerHTML += `<div class="box">A</div>`;
  }
}

function fillCorrect(){
  resetBoxes();
  for (i=0; i<word.length; i++){
    letterContainer.innerHTML += `<div class="box">${word[i]}</div>`;
  }
}


resetBoxes()
console.log(getWord());
buildBoxes();
console.log(letterContainer.innerHTML);
fillCorrect();