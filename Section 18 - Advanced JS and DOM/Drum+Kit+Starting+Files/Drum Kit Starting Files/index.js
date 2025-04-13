var numOfButton = document.querySelectorAll("button.drum").length;

for (var i = 0; i < numOfButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    alert("Nice");
  });
}
