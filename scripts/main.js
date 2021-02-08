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
let textWindow = document.getElementById('textWindow');

let battleSim = () => {

  if (charHit > 0 && mHit > 0) {
    player1randomMissfire = Math.random();
    player2randomMissfire = Math.random();

    if (player1randomMissfire > .5) {
      // window.alert(`${charName} hit ${monName} for ${charDamage} points!`);
      textWindow.value = textWindow.value + `The ${charName} hit the ${monName} for ${charDamage} points!\n`;
      mHit = (mHit - charDamage);
    } else {
      textWindow.value = textWindow.value + `The ${charName} missed!\n`;
    };

    if (player2randomMissfire > .5) {
      // window.alert(`${monName} hit ${charName} for ${mDamage} points!`);
      textWindow.value = textWindow.value + `The ${monName} hit the ${charName} for ${mDamage} points!\n`;
      charHit = (charHit - mDamage);
    } else {
      textWindow.value = textWindow.value + `The ${monName} missed!\n`;
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
      textWindow.value = textWindow.value + "No! Evil has triumphed!\n";
      document.getElementById('herocard').hidden = true;
      fightOver = true;
      document.getElementById('resetButton').hidden = false;
      return;
    }
    if (mHit <= 0) {
      textWindow.value = textWindow.value + "Whoa! Good actually beat evil for once!\n";
      document.getElementById('villainCard').hidden = true;
      fightOver = true;
      document.getElementById('resetButton').hidden = false;
      return;
    }
  } else {
    textWindow.value = textWindow.value + "Sadly, this contest has concluded.\n";
  }
}




function doFight() {
  document.body.style.background = "url('./assets/landfight.jpg') center";
  document.getElementById('textWindow').hidden = false;
  document.getElementById('herocard').hidden = false;
  document.getElementById('combatlogo').hidden = true;
  snd.play();
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


function startGame() {
  window.alert("Welcome! Please press OK to continue");
  document.getElementById('villainCard').hidden = false;
  document.getElementById('heroDrop').hidden = false;
}
setTimeout(startGame, 1000);

function resetGame(){
  location.reload();
}
