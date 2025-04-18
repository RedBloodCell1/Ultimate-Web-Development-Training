var numOfButton = document.querySelectorAll("button.drum").length;

function buttonCheck(button) {
  switch (button) {
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
      alert("NOT KEY");
      break;
  }

  drum.play();
}

for (var i = 0; i < numOfButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    buttonCheck(this.innerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  buttonCheck(event.key);
});
