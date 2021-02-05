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

function setHero() {
  let h = document.getElementById('heroes').value;
  console.log(h);
  console.log()

}

const knight = {
  name: "Knight",
  weapon: "sword",
  attack: "slashes",
  hitPoints: 30,
  damage: 10,
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

];

const descriptor2 = [
  "wasteland",
  "marauding",
  "murderous",
  "bloodthirsty",
  "maniacal",

];


const monsterType = [
  "ogre",
  "troll",
  "lizardman",
  "werewolf",
  "duck",

];
makeMonster();

function getKnight(){

}
