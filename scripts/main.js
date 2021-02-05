console.log("Hello world!");

let battleSim = () => {
  // For testing purposes.
  let player1 = Math.floor(Math.random() * 100) + 1;
  let player2 = Math.floor(Math.random() * 100) + 1;

  while (player1 > 0 && player2 > 0) {
    player1--;
    player2--;
    console.log(`Player 1 hit points: ${player1}`);
    console.log(`Player 2 hit points: ${player2}`);
  }
  if (player1 > 0) {
    alert("Player 1 wins!");
  } else {
    alert("Player 2 wins!");
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
