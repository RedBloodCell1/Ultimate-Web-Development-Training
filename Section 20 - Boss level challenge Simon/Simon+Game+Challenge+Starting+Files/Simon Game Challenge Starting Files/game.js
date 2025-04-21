var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

gamePattern.push(randomChosenColour);

$("." + randomChosenColour)
  .fadeOut(100)
  .fadeIn(100);

var sound = new Audio("./sounds/" + randomChosenColour + ".mp3");
sound.play();

// $(".btn").on("click", function () {
//   var userChosenColour = this.id;
//   console.log(userChosenColour);
// });
