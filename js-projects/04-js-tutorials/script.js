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

function fun(val){
  let result = '';
  
  let lookup = {
    'alpha': 'Adams',
    'bravo': 'Boston',
    'charlie': 'Chicago',
    'delta': 'Denver',
    'echo': 'Easy',
    'foxtrot': 'Frank'
  };

  result = lookup[val];

  return result;
}

console.log(fun('alpha'))
