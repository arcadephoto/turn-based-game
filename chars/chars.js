let charName;
let charWeapon;
let charAttack;
let charHit;
let charDam;
let charPhoto;
let monPhoto;
var punchAudio = new Audio('./assets/punch.mp3');



function getRand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function mm(array) {
  let v = array.length;
  let n = getRand(0, v);
  return array[n];
}

function makeMonster() {
  s = mm(size);
  d1 = mm(descriptor);
  d2 = mm(descriptor2);
  mt = mm(monsterType);
  mName = `${s}, ${d1}, ${d2} ${mt}`
  document.getElementById('mName').innerHTML = `${mName}`;
  n = getRand(1, 5);
  monPhoto = `./assets/monster${n}.jpg`
document.getElementById('vilPhoto').src = `${monPhoto}`;
}



function getHero() {
  let h = document.getElementById('heroes').value;
  console.log(h)
  let num = players.length;
for (i=0; i<num; i++) {
  if (h == players[i].name){
    console.log('Match!');
    charName = players[i].name;
    charWeapon = players[i].weapon;
    charPower = players[i].power;
    charHit = players[i].hitPoints;
    charPhoto = players[i].photo;
  }
}
setHero();
};

function setHero(){
  document.getElementById('heroName').innerHTML = `Hero: ${charName}`;
  document.getElementById('heroWeap').innerHTML = `Weapon: ${charWeapon}`;
  // This is all I was talking about.
  document.getElementById('heroHit').innerHTML = `Health: <span id="charHit">${charHit}</span>`;
  document.getElementById('herophoto').src = `./assets/${charPhoto}`
  document.getElementById('herocard').hidden = false;
  document.getElementById('heroDrop').hidden = true;
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



makeMonster();

const players = [
  {
    name: "Wizard",
    power: "Energy Blast",
    weapon: "staff",
    hitPoints: 25,
    photo: "wizard.jpg",
  }, {
    name: "Knight",
    power: "Super Swing",
    weapon: "sword",
    hitPoints: 30,
    photo: "knight.png",
  }, {
    name: "Lizard Man",
    power: "tongue attack",
    weapon: "tongue",
    hitPoints: 20,
    photo: "lizardman.png",
  }, {
    name: "Cowboy",
    power: "Scatter Gun",
    weapon: "revolver",
    hitPoints: 25,
    photo: "cowboy.png",
  }, {
    name: "Alien",
    power: "Probe",
    weapon: "atomizer",
    hitPoints: 30,
    photo: "alien.png",
  }
];
function heroAttack(){
  document.getElementById('herocard').classList.add("hAttAnim");
  document.getElementById('herocard').classList.remove("cardIntro");
  document.getElementById('villainCard').classList.remove("vAttAnim");
  setTimeout(punchSound, 700);
  setTimeout(monsterAttack, 2000);
}
function monsterAttack(){
  document.getElementById('villainCard').classList.remove("villainIntro");
  document.getElementById('herocard').classList.remove("hAttAnim");
  document.getElementById('villainCard').classList.add("vAttAnim");
  setTimeout(punchSound, 700);
}
function punchSound() {
  punchAudio.loop = false;
punchAudio.play();
}
