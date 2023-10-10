let inputForm = document.getElementById('inputForm');
let inputText = document.getElementById('inputText');
let inputNum = document.getElementById('inputNum');
let addButton = document.getElementById('addButton');

let itemCol = document.getElementById('itemCol');
let textDiv = document.getElementById('textDiv');
let quantityDiv = document.getElementById('quantityDiv');

let arrItem = [];

inputForm.addEventListener('submit', function(event){
  event.preventDefault();
})



function addItemToArr(){
  let name = inputText.value;
  let num = inputNum.value;

  let item = {
    'name': name,
    'quantity': num
  };

  arrItem.push(item);
}

function createHTML(){
  let HTML = ``;
  for (i = 0; i < arrItem.length; i++){
    HTML += `
    <div class="col" id="itemCol"><!-- container for all grocery items -->
        <div class="row mt-2 mb-1">
          <div class="col-4 offset-2" style="word-wrap: break-word;" id="textDiv"> <!-- container for item text -->
            <p class="">${arrItem[i]['name']}</p>
          </div>
          <div class="col-2" id="quantityDiv"> <!-- container for item quantity -->
            <p>${arrItem[i]['quantity']}</p>
          </div>
          <div class="col-2" > <!-- container for remove button -->
            <button class="btn btn-danger remove-button" date-index="${i}" >Remove</button>
          </div>
        </div>
      </div>
    `
  }
  return HTML;
}

function renderItems(){
  itemCol.innerHTML = createHTML();
  addRemoveEventListener();
}

function addRemoveEventListener(){
  let removeButtons = document.querySelectorAll('.remove-button');
  removeButtons.forEach(button => {
    button.addEventListener('click', function(event){
      let index = event.target.getAttribute('data-index');
      removeItemFromArray(index);
    })
  })
}

function removeItemFromArray(index){
  arrItem.splice(index, 1);
  renderItems();
}


addButton.addEventListener('click', function(){
  addItemToArr();
  inputText.value = '';
  inputNum.value = '';
  renderItems();
});