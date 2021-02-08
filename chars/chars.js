
let charName = "";
let charWeapon ="";
let charPower = "";
let charHit;
let charDamage;
let charPhoto = "";
let character =[];

let monName = "";
let mWeapon = "";
let mHit;
let mDamage = getRand(1, 10);
let monPhoto = "";
var punchAudio = new Audio('./assets/punch.mp3');

function getRand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// the mm() function first measures the length of the chosen array, then generates
// a random number from 0 to the length of the array. it returns array(n), which
// is a randomly chosen object inside the array.

function mm(array) {
  let v = array.length;
  let n = getRand(0, v);
  return array[n];
}

//makeMonster() generates a random result from each of four arrays - size,
//physical descriptor, monstrous descriptor and monster type - then combines
//all four into a randomly generate monster, unique to each game.

function makeMonster() {
  s = mm(size);
  d1 = mm(descriptor);
  d2 = mm(descriptor2);
  mt = mm(monsterType);
  mw = mm(monWeapon);
  monName = `${s}, ${d1}, ${d2} ${mt}`;
  mHit = getRand(20, 30);
  document.getElementById('enemyHit').innerHTML = `${mHit}`;
  document.getElementById('mName').innerHTML = `${monName}`;
  document.getElementById('mWeapName').innerHTML = `Attack: ${mw}`;
  let n = getRand(1, 5);
  monPhoto = `./assets/monster${n}.jpg`;
  document.getElementById('vilPhoto').src = `${monPhoto}`;
}

function getHero() {
  let h = document.getElementById('heroes').value;
  let num = players.length;
  for (i = 0; i < num; i++) {
    if (h == players[i].name) {
      charName = players[i].name;
      charWeapon = players[i].weapon;
      charPower = players[i].power;
      charHit = players[i].hitPoints;
      charDamage = players[i].damage;
      charPhoto = players[i].photo;
    }
  }
  setHero();
  doFight();
};

function setHero() {
  document.getElementById('heroName').innerHTML = `Hero: ${charName}`;
  document.getElementById('heroWeap').innerHTML = `Weapon: ${charWeapon}`;
  // This is all I was talking about.
  document.getElementById('heroHit').innerHTML = `Health: <span id="charHit">${charHit}</span>`;
  document.getElementById('herophoto').src = `./assets/${charPhoto}`;
  document.getElementById('herocard').hidden = false;
  document.getElementById('heroDrop').hidden = true;
  character = new Character({name: charName, weapon: charWeapon, power: charPower, hitPoints: charHit, damage: charDamage});
}


const size = [
  "huge",
  "giant",
  "gargauntuan",
  "humongous",
  "towering",
  "corpulent",
  "gigantic",
];


const descriptor = [
  "mutated",
  "iradiated",
  "slobbering",
  "wart-covered",
  "bulbous",
  "hideous",
  "drooling",
  "terrifying",
  "terrible",
  "grotesque",
  "slimy",
  "oozing",
  "sweaty",
  "pustulent",
  "hairy",
  "malodorous",

];

const descriptor2 = [
  "wasteland",
  "marauding",
  "murderous",
  "bloodthirsty",
  "maniacal",
  "gelatinous",
  "lactose-intolerant",
  "ill-tempered",
  "malevolent",
  "evil",
  "cannibalistic",
  "blood-sucking",

];


const monsterType = [
  "ogre",
  "troll",
  "lizardman",
  "werewolf",
  "duck",
  "killbot",
  "pirate",
  "mutineer",
  "ghoul",
  "phantom",
  "chupacabra",
  "zombie",
  "goblin",
  "homonculus",
  "sludge-monster",
  "vampire",
  "drop-bear",
  "kraken",
  "mummy",
  "abominable snowman",
  "gorilla",
  "housecat",
];


const monWeapon = [

  "claws",
  "laser eyes",
  "fangs",
  "unconstructive criticism",
  "antique bayonet",
  "dull knife",
  "pointy stick",
  "sharp knife",
  "ball peen hammer",
  "x-acto knife",
  "Freddy Kreuger claws",
  "battle axe",
  "brass knuckles",
  "dogs with bees in their mouths",
  "flamethrower",
  "acid breath",
  "poison darts",

]


makeMonster();

const players = [{
  name: "Wizard",
  power: "Energy Blast",
  weapon: "staff",
  hitPoints: 25,
  damage: 7,
  photo: "wizard.jpg",
}, {
  name: "Knight",
  power: "Super Swing",
  weapon: "sword",
  hitPoints: 30,
  damage: 5,
  photo: "knight.png",
}, {
  name: "Lizard Man",
  power: "tongue attack",
  weapon: "tongue",
  hitPoints: 20,
  damage: 8,
  photo: "lizardman.png",
}, {
  name: "Cowboy",
  power: "Scatter Gun",
  weapon: "revolver",
  hitPoints: 25,
  damage: 7,
  photo: "cowboy.png",
}, {
  name: "Alien",
  power: "Probe",
  weapon: "atomizer",
  hitPoints: 30,
  damage: 5,
  photo: "alien.png",
}];

//these are the functions for the fight animation. heroAttack begins when the
//player presses the "Attack". The heroAttack function then triggers the monsterAttack
//function. Each animation plays only once.


function heroAttack() {
  if(!fightOver) {
  document.getElementById('herocard').classList.add("hAttAnim");
  document.getElementById('herocard').classList.remove("cardIntro");
  document.getElementById('villainCard').classList.remove("vAttAnim");
  setTimeout(punchSound, 700);
  setTimeout(monsterAttack, 1500);
  setTimeout(battleSim, 3000);
}
else {
  window.alert("The fight is over, fool!");
}
}

function monsterAttack() {
  document.getElementById('villainCard').classList.remove("villainIntro");
  document.getElementById('herocard').classList.remove("hAttAnim");
  document.getElementById('villainCard').classList.add("vAttAnim");
  setTimeout(punchSound, 700);
}

function punchSound() {
  punchAudio.loop = false;
  punchAudio.play();
}
