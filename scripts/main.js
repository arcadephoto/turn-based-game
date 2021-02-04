console.log("Hello world!");

let battleSim = () => {
  // For testing purposes.
  let a = 100;
  let b = 50;

  while (a > 0 && b > 0) {
    a--;
    b--;
    console.log(a--);
    console.log(b--);
  }
  if (a > 0) {
    alert("Player 1 wins!");
  } else {
    alert("Player 2 wins!");
  }
}

battleSim();
