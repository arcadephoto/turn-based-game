var snd = new Audio("bell.mp3");
let leftAttack = document.getElementById("ninjaStar");
function doFight(){
  leftAttack.setAttribute('class', 'leftWeapon');
  document.getElementById('ninjaStar').hidden = false;
  document.body.style.background = "url('landfight.jpg') center";
  document.getElementById('ninjaStarRight').hidden = false;
  snd.play();
}

function noFight(){
  leftAttack.setAttribute('class', 'noFight');
  document.getElementById('ninjaStar').hidden = true;
  document.getElementById('ninjaStarRight').hidden = true;
  document.body.style.background = "url('landscape.jpg') center";
}
