// console.log("Hello world!");

let battleSim = () => {
  // For testing purposes
  let player1Name = "Patrick";
  let player1Weapon = "Laser";
  let player2Name = "Ogre Bob";
  let player2Weapon = "Machine Gun";
  let player1WeaponDamage = 12;
  let player2WeaponDamage = 10;
  let player1Hitpoints = Math.floor(Math.random() * 100) + 1;
  let player2Hitpoints = Math.floor(Math.random() * 100) + 1;
  // let player2RandomMissfire = Math.random();

  console.log(`${player1Name} hit points: ${player1Hitpoints}`);
  while (player1Hitpoints > 0 && player2Hitpoints > 0) {
    let player1randomMissfire = Math.random();
    let player2RandomMissfire = Math.random();

    console.log(player1randomMissfire.toFixed(2));
    if (player1randomMissfire > .5) {
      console.log(`${player1Name} hit`);
      player1Hitpoints-=player2WeaponDamage;
      console.log(`${player1Name} hit points: ${player1Hitpoints}`);
    } else
      console.log(`${player1Name} hit points: ${player1Hitpoints}`);
      console.log(`${player1Name} missed!`);
    }
    if (player2RandomMissfire > .5) {
      player2Hitpoints-=player1WeaponDamage;
      console.log(`${player2Name} hit points: ${player2Hitpoints}`);
    } else {
      console.log(`${player2Name} missed!`);
    }
  }

<<<<<<< HEAD
=======

>>>>>>> Fixed a scope issue.
  if (player1Hitpoints > 0) {
    alert(`${player1Name} won!`);
  } else {
    alert(`${player2Name} won!`);
  }
};
///////////////////////////////////////////////CHARACTERS

function Character({ name, power, weapon, hitPoints } = {}) {
  this.name = name;
  this.power = power;
  this.weapon = weapon;
  this.hitPoints = hitPoints;
}

function Enemy({ name, power, weapon, hitPoints } = {}) {
  this.name = name;
  this.power = power;
  this.weapon = weapon;
  this.hitPoints = hitPoints;
}

const characterOne = new Character("Wizard","Energy Blast","Staff","1000");
const characterTwo = new Character("Knight","Super Swing","Sword","1100");
const characterThree = new Character("Lizard Man","Tongue Attack","Tongue","1050");
const characterFour = new Character("Cowboy","unknown","Revolver","1200");

battleSim();
