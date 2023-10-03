const counter = document.getElementById("counter");
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const reset = document.getElementById('reset');

add.addEventListener('click', function (){
  counter.innerHTML++;
});

subtract.addEventListener('click', function (){
  counter.innerHTML--;
});

reset.addEventListener('click', function (){
  counter.innerHTML = 0;
});