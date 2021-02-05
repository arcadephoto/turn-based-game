// console.log("Hello world!");

let battleSim = () => {
  // For testing purposes
  let player1Name = "Patrick";
  let player1Weapon = "Laser";
  let player2Name = "Ogre Bob";
  let player2Weapon = "Machine Gun";
  let player1Hitpoints = Math.floor(Math.random() * 100) + 1;
  let player2Hitpoints = Math.floor(Math.random() * 100) + 1;

  while (player1Hitpoints > 0 && player2Hitpoints > 0) {
    let randomMissfire = Math.random();
    console.log(randomMissfire.toFixed(2));
    if (randomMissfire > .5) {
        console.log("Hit");
        player1Hitpoints--;
        player2Hitpoints--;
        console.log(`${player1Name} hit points: ${player1Hitpoints}`);
        console.log(`${player2Name} hit points: ${player2Hitpoints}`);
    } else {
      console.log("Miss");
    }

  }
  if (player1Hitpoints > 0) {
    alert(`${player1Name} won!`);
  } else {
    alert(`${player2Name} won!`);
  }
};
///////////////////////////////////////////////CHARACTERS

function Character({name, power, weapon, hitpoints} = {}) {
  this.name = name;
  this.power = power;
  this.weapon = weapon;
  this.hitPoints = hitPoints;
};

  function Enemy ({name, power, weapon, hitpoints} = {}) {
    this.name = name;
    this.power = power;
    this.weapon = weapon;
    this.hitPoints = hitPoints;
  };

const characterOne = new Character("Wizard","Energy Blast","Staff","1000");
const characterTwo = new Character("Knight","Super Swing","Sword","1100");
const characterThree = new Character("")





battleSim();
