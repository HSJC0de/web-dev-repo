//arrays: pop() removes last element, push(x) adds x to arr, shift() removes first element, unshift(x) adds x to beginning of array
/*


let arr = [0, 1, 2, 3, 4];

console.log(arr);
arr.pop();
console.log(arr);
arr.push(4);
console.log(arr);
arr.shift()
console.log(arr);
arr.unshift('hello world');
console.log(arr);
*/

/*
let shoppingList = [['apples', 2], ['milk', 3], ['bread', 5]]; //lets get the price of each item

for (i = 0; i < shoppingList.length; i++){
  console.log(`${shoppingList[i][0]} is $${shoppingList[i][1]}`);
}
*/

//global and local scope
/*
let inside = 0

function addOne(param){
  inside = param
  console.log(inside);
}

addOne(1);
console.log(inside);
*/

//switch statements
/*
function switchTest(input){
  switch(input){
    case 1:
    case 3:
      console.log('Hello world');
      break;
    case 2:
      console.log('Hi 2');
      break;
    default:
      console.log('default');
  }
}

switchTest(5);
*/

//objects
/*
let human = {
  'name': 'John',
  'age': 46,
  'job': 'Software Engineer',
  'favorite number': 6
};

console.log(human['name']);
console.log(human.name);

human.salary = 150000;

console.log(human);
console.log(human['salary']);
console.log(typeof(human['salary']));

let dog ={
  'name': 'Rufus',
  'age': 7,
  'legs': 4
};

dog.friends = 5;
console.log(dog);

dog['bark'] = 'woof';
console.log(dog);

delete dog['bark'];
delete dog.friends;

console.log(dog);
*/

//object to lookup

/* let lookup = {
  'alpha': 'Adams',
  'bravo': 'Boston',
  'charlie': 'Chicago',
  'delta': 'Denver',
  'echo': 'Easy',
  'foxtrot': 'Frank',
  1: 23
};

function fun(val){
  let result = '';

  result = lookup[val];

  return result;
}

console.log(fun('alpha'))

function check(prop){
  if (lookup.hasOwnProperty(prop)){
    return lookup[prop];
  }
  else{
    return 'no'
  }
}
 */


//manipulating objects in arrays

let arrObj = [
  {
    'artist': 'Drake',
    'genre': 'Rap',
    'top_songs': [
      'MELTDOWN',
      'Slime You Out',
      'Jimmy Cooks'
    ]
  },
  {
    'artist': 'TWICE',
    'genre': 'KPOP',
    'top_songs': [
      'The Feels',
      'MOONLIGHT SUNRISE',
      'Talk that Talk'
    ]
  }
];

let drakeGenre = arrObj[0]['genre'];
console.log(drakeGenre);

function listTopSongs(artist){
  for (i = 0; i < arrObj.length; i++){
    if (arrObj[i]['artist'] === artist){
      console.log(arrObj[i]['top_songs']);
    }
  }
}

function changeGenre(artist, newGenre){
  for (i = 0; i < arrObj.length; i++){
    if (arrObj[i]['artist'] === artist){
      arrObj[i]['genre'] = newGenre;
      console.log(arrObj[i]['genre']);
    }
  }
}

let count = 0;
while (count < 5){
  console.log(count);
  count++;
}

let array100 = [];
for (i = 1; i <= 100; i++){
  array100.push(i);
}
console.log(array100);

for (i = 0; i < array100.length; i++){
  if (array100[i] % 2 === 1){
    array100.splice(i, 1);
    i--;
  }
}

console.log(array100);

array100 = array100.filter(num => num % 4 === 0);

console.log(array100);

listTopSongs('TWICE');
changeGenre('TWICE', 'RNB');

function randomRange(max, min){
  console.log(Math.floor(Math.random() * (max - min + 1) + min));
}

randomRange(6, 2);

console.log(arrObj[0].artist);