var numOfButton = document.querySelectorAll("button.drum").length;

for (var i = 0; i < numOfButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var key = this.innerHTML;
    makeSound(key);
    buttonAnimation(key);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var drum = new Audio("./sounds/crash.mp3");
      break;

    case "a":
      var drum = new Audio("./sounds/kick-bass.mp3");
      break;

    case "s":
      var drum = new Audio("./sounds/snare.mp3");
      break;

    case "d":
      var drum = new Audio("./sounds/tom-1.mp3");
      break;

    case "j":
      var drum = new Audio("./sounds/tom-2.mp3");
      break;

    case "k":
      var drum = new Audio("./sounds/tom-3.mp3");
      break;

    case "l":
      var drum = new Audio("./sounds/tom-4.mp3");
      break;

    default:
      console.log("NOT KEY");
      break;
  }
  if (drum) {
    drum.play();
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
