const buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var flag = true;

// Main Function
$('[type="button"]').on("click", function () {
  var self = $(this);

  const userChosenColour = self.attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

$(document).on("keypress", function () {
  if (level === 0) {
    nextSequence();
  }
});

function checkAnswer(index) {
  if (gamePattern[index] !== userClickedPattern[index]) {
    $("#level-title").text(
      "Game Over (on Level " + level + "). Press Any Key to Restart"
    );

    var soundEffect = new Audio("sounds/wrong.mp3");
    soundEffect.play();

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    level = 0;
    gamePattern = [];
  } else {
    if (index === level - 1) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
}

function playSound(name) {
  var soundEffect = new Audio("sounds/" + name + ".mp3");
  soundEffect.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);

  level += 1;
  userClickedPattern = [];

  $("#level-title").text("Level " + level);
}
