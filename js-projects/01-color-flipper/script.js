const hex =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let bodyStyles = document.body.style;
let btn = document.getElementById('btn');
let colorDisplay = document.getElementById('color-display');

function randIndex(){
  return Math.floor(Math.random() * hex.length);
}

function buildHex(){
  let hexCode = '#';
  for (i = 0; i < 6; i++){
    hexCode += hex[randIndex()]
  }
  return hexCode;
}

function changeColor(){
  let color = buildHex();
  bodyStyles.backgroundColor = color;
  colorDisplay.innerHTML = 
  `<h2 
  class="mt-2 mb-2 " id="color-display">Background Color: ${color}
  </h2>`
}

btn.addEventListener('click', changeColor);