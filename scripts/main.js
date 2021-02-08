var snd = new Audio("./assets/bell.mp3");


const button = document.querySelector("#attackbtn");
let damage = document.getElementById("heroHit");
let enemyDamage = document.getElementById("enemyHit");
let player1WeaponDamage = charDamage;
let player2WeaponDamage = mDamage;
let player1Hitpoints = charHit;
let player2Hitpoints = mHit;
let player1randomMissfire;
let player2randomMissfire;
let fightOver = false;

let battleSim = () => {

  if (charHit > 0 && mHit > 0) {
    player1randomMissfire = Math.random();
    player2randomMissfire = Math.random();

    if (player1randomMissfire > .5) {
      window.alert(`${charName} hit ${monName} for ${charDamage} points!`);
      mHit = (mHit - charDamage);
    } else {
      window.alert(`${charName} missed!`);
    };

    if (player2randomMissfire > .5) {
      window.alert(`${monName} hit ${charName} for ${mDamage} points!`)
      charHit = (charHit - mDamage);
      console.log(`${charName} hit points: ${charHit}`);
    } else {
      window.alert(`${monName} missed!`);
    }

    heroLoseHealth();
    enemyLoseHealth();

    function heroLoseHealth() {
      let healthBar = document.getElementById('heroHealthBar');
      let percent = (charHit / 30);
      let width = (percent * 200);
      damage.innerHTML = `Health: ${charHit}`;
      healthBar.style.width = `${width}px`;
    }

    function enemyLoseHealth() {
      let mHealthBar = document.getElementById('mHealthBar');
      let mPercent = (mHit / 30);
      let mWidth = (mPercent * 200);
      enemyDamage.innerHTML = mHit;
      mHealthBar.style.width = `${mWidth}px`;
    }
    if (charHit <= 0) {
      window.alert("No! Evil has triumphed!");
      document.getElementById('herocard').hidden = true;
      fightOver = true;
      return;
    }
    if (mHit <= 0) {
      window.alert("Whoa! Good actually beat evil for once!");
      document.getElementById('villainCard').hidden = true;
      fightOver = true;
      return;
    }
  } else {
    window.alert("Sadly, this contest has concluded.");
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
<<<<<<< HEAD


function startGame() {
  window.alert("Welcome! Please press OK to continue");
  document.getElementById('villainCard').hidden = false;
  document.getElementById('heroDrop').hidden = false;
}
setTimeout(startGame, 1000);

// battleSim();
// })();
=======
>>>>>>> Removed some commented code.
