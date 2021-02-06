let charName;
let charWeapon;
let charAttack;
let charHit;
let charDam;




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
}

// function setHero() {
//   let h = document.getElementById('heroes').value;
//   console.log(h)
//   if (h === "knight"){
//     charName = knight.name;
//     charWeapon = knight.weapon;
//     charPower = knight.attack;
//     charHit = knight.hitPoints;
//     charDam = knight.damage;
//     document.getElementById('heroName').innerHTML = `Hero: ${charName}`;
//     document.getElementById('heroWeap').innerHTML = `Weapon: ${charWeapon}`;
//     document.getElementById('herocard').hidden = false;
//   }

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
  }
}
setHero();
};

function setHero(){
  document.getElementById('heroName').innerHTML = `HERO: ${charName}`;
  document.getElementById('heroWeap').innerHTML = `WEAPON: ${charWeapon}`.toUpperCase();
  document.getElementById('heroHit').innerHTML = `HIT POINTS: ${charHit}`;
  document.getElementById('herocard').hidden = false;
  document.getElementById('heroDrop').hidden = true;
}






const size = [
  "huge",
  "giant",
  "gargauntuan",
  "humongous",
  "towering",

];


const descriptor = [
  "mutated",
  "iradiated",
  "slobbering",
  "cannibalistic",
  "hideous",
  "drooling",

];

const descriptor2 = [
  "wasteland",
  "marauding",
  "murderous",
  "bloodthirsty",
  "maniacal",
  "gelatinous",

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

];
makeMonster();

const players = [
  {
    name: "Wizard",
    power: "Energy Blast",
    weapon: "staff",
    hitPoints: 25,
  }, {
    name: "Knight",
    power: "Super Swing",
    weapon: "sword",
    hitPoints: 30,
  }, {
    name: "Lizard Man",
    power: "tongue attack",
    weapon: "tongue",
    hitPoints: 20,
  }, {
    name: "Cowboy",
    power: "Scatter Gun",
    weapon: "revolver",
    hitPoints: 25,
  }, {
    name: "Alien",
    power: "Probe",
    weapon: "atomizer",
    hitPoints: 30,
  }
];
