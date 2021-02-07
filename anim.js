var snd = new Audio("./anim/bell.mp3");
let leftAttack = document.getElementById("ninjaStar");


function doFight(){
  leftAttack.setAttribute('class', 'leftWeapon');
  document.getElementById('ninjaStar').hidden = false;
  document.body.style.background = "url('./anim/landfight.jpg') center";
  document.getElementById('ninjaStarRight').hidden = false;
  document.getElementById('herocard').hidden = false;
  snd.play();
}

function noFight(){
  leftAttack.setAttribute('class', 'noFight');
  document.getElementById('ninjaStar').hidden = true;
  document.getElementById('ninjaStarRight').hidden = true;
  document.body.style.background = "url('./anim/landscape.jpg') center";
}
