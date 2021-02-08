// (function() {
//   'use strict';


var snd = new Audio("./assets/bell.mp3");


const button = document.querySelector("#attackbtn");
let damage = document.getElementById("heroHit");
let enemyDamage = document.getElementById("enemyHit");
let player1WeaponDamage = charDamage;
let player2WeaponDamage = mDamage;
let player1Hitpoints = charHit;
let player2Hitpoints = mHit;
let player1randomMissfire;
let player2RandomMissfire;

let battleSim = () => {

  if (charHit > 0 && mHit > 0) {
    player1randomMissfire = Math.random();
    player2randomMissfire = Math.random();

    if (player1randomMissfire > .03) {
      console.log(`${charName} hit`);
      mHit = (mHit - charDamage);
      console.log(`${monName} hit points: ${mHit}`);
    } else {
      console.log(`${charName} missed!`);
    };

    if (player2RandomMissfire > .03) {
      charHit = (charHit - mDamage);
      console.log(`${charName} hit points: ${charHit}`);
    } else {
      console.log(`${monName} missed!`);
    }

    heroLoseHealth();
    enemyLoseHealth();

    function heroLoseHealth() {
      let healthBar = document.getElementById('heroHealthBar')
      let health = charHit;
      let percent = (health / 100);
      let width = (percent * 200);
      damage.innerHTML = charHit;
      healthBar.style.width = `${width}px`;
    }

    function enemyLoseHealth() {
      let mHealthBar = document.getElementById('mHealthBar')
      let mHealth = mHit;
      let mPercent = (mHealth / 100);
      let mWidth = (mPercent * 200);
      enemyDamage.innerHTML = mHit;
      mHealthBar.style.width = `${mWidth}px`;
    }

  }
}



function doFight() {
  document.body.style.background = "url('./assets/landfight.jpg') center";
  document.getElementById('herocard').hidden = false;
  document.getElementById('combatlogo').hidden = true;
  snd.play();
}

function noFight() {
  document.body.style.background = "url('./assets/landscape.jpg') center";
}



function Character({
  name,
  power,
  weapon,
  hitPoints,
  damage
} = {}) {
  this.name = name;
  this.power = power;
  this.weapon = weapon;
  this.hitPoints = hitPoints;
  this.damage = damage;
}

function Enemy({
  name,
  weapon,
  hitPoints,
  damage
} = {}) {
  this.name = name;
  this.weapon = weapon;
  this.hitPoints = hitPoints;
  this.damage = damage;
}
/////type of character, name of attack, hit points,, attack name for weapon, damage
// const characterOne = new Character("Wizard","Energy Blast","Staff","1000");
// const characterTwo = new Character("Knight","Super Swing","Sword","1100");
// const characterThree = new Character("Lizard Man","Tongue Attack","Tongue","1050");
// const characterFour = new Character("Cowboy","unknown","Revolver","1200");

// enemy = new Enemy({name: monName, weapon: mWeapon, hitpoints: mHit, damage: mDamage});
// newCard = new Card({rank: r, suit: s, value: v, id: ids});





// battleSim();
// })();
