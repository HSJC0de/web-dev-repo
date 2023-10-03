const firstNames = [
  "James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William", "Elizabeth",
  "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Charles", "Karen",
  "Christopher", "Nancy", "Daniel", "Margaret", "Matthew", "Lisa", "Anthony", "Betty", "Donald", "Dorothy",
  "Mark", "Sandra", "Paul", "Ashley", "Steven", "Kimberly", "Andrew", "Donna", "Kenneth", "Emily",
  "Joshua", "Michelle", "George", "Carol", "Kevin", "Amanda", "Brian", "Melissa", "Edward", "Deborah",
  "Ronald", "Stephanie", "Timothy", "Rebecca", "Jason", "Laura", "Jeffrey", "Helen", "Ryan", "Sharon",
  "Jacob", "Cynthia", "Gary", "Kathleen", "Nicholas", "Amy", "Eric", "Shirley", "Stephen", "Angela",
  "Jonathan", "Anna", "Larry", "Ruth", "Justin", "Brenda", "Scott", "Pamela", "Brandon", "Nicole",
  "Frank", "Katherine", "Raymond", "Samantha", "Gregory", "Christine", "Benjamin", "Catherine", "Samuel", "Virginia",
  "Patrick", "Debra", "Alexander", "Rachel", "Jack", "Janet", "Dennis", "Emma", "Jerry", "Carolyn"
];
const lastNames = [
  "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor",
  "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson",
  "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King",
  "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter",
  "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins",
  "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey",
  "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez",
  "James", "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross",
  "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington"
];

let generatorCardName = document.querySelector(".generator-card-name");
let generatorCardStats = document.querySelector(".generator-card-stats");
let playerGroup = document.querySelector(".player-group");

function generate(){
  let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  let name = `${firstName} ${lastName}`;
  let strength = Math.round(Math.random() * 10);
  let speed = Math.round(Math.random() * 10);
  let jumpPower = Math.round(Math.random() * 10);
  let stamina = Math.round(Math.random() * 10);

  generatorCardName.innerHTML = `<h5 class="card-title generator-card-name">${name}</h5>`;

  generatorCardStats.innerHTML = `
  <p class="card-text mb-0 mt-3">Strength: ${strength}</p>
  <p class="card-text mb-0 ">Speed: ${speed}</p>
  <p class="card-text mb-0 ">Jump Power: ${jumpPower}</p>
  <p class="card-text mb-0 ">Stamina: ${stamina}</p>`;
}

function add(){
  generatorCardName = document.querySelector(".generator-card-name");
  generatorCardStats = document.querySelector(".generator-card-stats");

  playerGroup.innerHTML += `
  <div class="d-flex col justify-content-center">
      <div class="card" style="width: 18rem;">
        <img src="" alt="" class="card-img-top" style="height: 10rem;">
          <div class="card-body">
            ${generatorCardName.innerHTML}
            <h6 class="card-subtitle">Stats</h6>
            <div class="stats">
              ${generatorCardStats.innerHTML}
            </div>
        </div>
      </div>
    </div>
  `;
}