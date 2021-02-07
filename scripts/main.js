// (function() {
//   'use strict';

var snd = new Audio("./assets/bell.mp3");
// let leftAttack = document.getElementById("ninjaStar");

let battleSim = () => {
  const button = document.querySelector("#attackbtn");
  let damage = document.getElementById("charHit");
  let enemyDamage = document.getElementById("enemyHit");
  // For testing purposes
  let player1Name = players[0].name;
  let player1Weapon = players[0].weapon;
  let player2Name = enemies[0].name;
  // let player2Weapon = enemies[0].weapon;
  let player1WeaponDamage = (Math.round(Math.random() * 10) + 1);
  let player2WeaponDamage = (Math.round(Math.random() * 10) + 1);
  let player1Hitpoints = parseInt(damage.innerHTML);
  let player2Hitpoints = enemies[0].hitPoints;
  // let player2RandomMissfire = Math.random();



  function heroLoseHealth() {
    let damage = document.getElementById('health')
    let width = 100;
    damage.width -= ""; ///////??????

    if (damage) {
      damage.style.width = width + '%';
      damage.innerHTML = width - 1 + 'hp';
    }
  }

  function enemyLoseHealth() {
    let damage = document.getElementById('health')
    let width = 100;
    damage.width -= ""; ///////??????

    if (damage) {
      damage.style.width = width + '%';
      damage.innerHTML = width - 1 + 'hp';
    }
  }


  console.log(`${player1Name} hit points: ${player1Hitpoints}`);
  console.log(`${player2Name} hit points: ${player2Hitpoints}`);
  console.log(`${player1Name} weapon damage: ${player2WeaponDamage}`);
  console.log(`${player2Name} weapon damage: ${player2WeaponDamage}`);

  enemyDamage.innerHTML = String(player2Hitpoints);
  while (player1Hitpoints > 0 && parseInt(player2Hitpoints) > 0) {

    console.log(enemyHit);
    let player1randomMissfire = Math.random();
    let player2RandomMissfire = Math.random();

    console.log(player1randomMissfire.toFixed(2));

    button.addEventListener("click", () => {
      if (player1randomMissfire > .5) {
        console.log(`${player1Name} hit`);
        parseInt(player2Hitpoints);
        player2Hitpoints-=player1WeaponDamage;
        damage.innerHTML = String(player1Hitpoints);
        console.log(`${player1Name} hit points: ${player1Hitpoints}`);
      } else {
        console.log(`${player1Name} hit points: ${player1Hitpoints}`);
        console.log(`${player1Name} missed!`);
      }
    });

    if (player2RandomMissfire > .5) {
      player1Hitpoints-=player2WeaponDamage;
      enemyDamage.innerHTML = String(player2Hitpoints);
      console.log(`${player2Name} hit points: ${player2Hitpoints}`);
    } else {
      console.log(`${player2Name} missed!`);
    }
  }
  // if (player1Hitpoints > 0) {
  //   return;
  // } else {
  //   reutn;
  // }
}




function doFight(){
  // leftAttack.setAttribute('class', 'leftWeapon');
  // document.getElementById('ninjaStar').hidden = false;
  document.body.style.background = "url('./assets/landfight.jpg') center";
  // document.getElementById('ninjaStarRight').hidden = false;
  document.getElementById('herocard').hidden = false;
  snd.play();

  battleSim();
}

function noFight(){
  // leftAttack.setAttribute('class', 'noFight');
  // document.getElementById('ninjaStar').hidden = true;
  // document.getElementById('ninjaStarRight').hidden = true;
  document.body.style.background = "url('./assets/landscape.jpg') center";
}
///////////////////////////////////////////////CHARACTERS

// const players = [
//   {
//     name: "Wizard",
//     power: "Energy Blast",
//     weapon: "staff",
//     hitPoints: 25,
//     photo: "wizard.jpg",
//   }, {
//     name: "Knight",
//     power: "Super Swing",
//     weapon: "sword",
//     hitPoints: 30,
//     photo: "knight.png",
//   }, {
//     name: "Lizard Man",
//     power: "tongue attack",
//     weapon: "tongue",
//     hitPoints: 20,
//     photo: "lizardman.png",
//   }, {
//     name: "Cowboy",
//     power: "Scatter Gun",
//     weapon: "revolver",
//     hitPoints: 25,
//     photo: "cowboy.png",
//   }, {
//     name: "Alien",
//     power: "Probe",
//     weapon: "atomizer",
//     hitPoints: 30,
//     photo: "alien.png",
//   }
// ];

// For testing purposes please don't remove.
const enemies = [
  {
    name: "Ogre",
    power: "stomp",
    // My idea for how to do wepons.
    weapon: {machineGun: Math.round((Math.random() * 26) + 10)},
    hitPoints: (Math.round(Math.random() * 30) + 5)
  }
]
// you can hard code the dropdown to include a value for each player in the players' array (static) or
// you can iterate over the players array, generate HTML for each player, and inject that into the DOM (dynamic)

// you need an event listener that will fire when a character is selected

let selectedPlayer = null;

const selectPlayer = (event) => {
  const selection = 'wizard';
  const player = players.find(player => player.name === selection);
  selectedPlayer = new Character(player);
}

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
/////type of character, name of attack, hit points,, attack name for weapon, damage
// const characterOne = new Character("Wizard","Energy Blast","Staff","1000");
// const characterTwo = new Character("Knight","Super Swing","Sword","1100");
// const characterThree = new Character("Lizard Man","Tongue Attack","Tongue","1050");
// const characterFour = new Character("Cowboy","unknown","Revolver","1200");







// battleSim();
// })();
