var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var attribute1 = "./images/dice" + randomNumber1 + ".png";
var attribute2 = "./images/dice" + randomNumber2 + ".png";

document.getElementsByTagName("img")[0].setAttribute("src", attribute1);
document.getElementsByTagName("img")[1].setAttribute("src", attribute2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "✅Player 1 Wins!!!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
} else {
  document.querySelector("h1").textContent = "Player 2 Wins!!!✅";
}
