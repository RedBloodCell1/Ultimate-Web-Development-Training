// $("h1").addClass("big-title margin-50");

// $("button").html("<em>HII</em>");

// $("button").attr("href", "www.google.com");

// $("button").click(function () {
//   $("h1").addClass("big-title margin-50");
// });

// $(document).keypress(function (event) {
//   $("h1").text(event.key);
// });

// $("h1").mouseover(function () {
//   $("h1").css("color", "red");
// });

// $("h1").before("<button>asd</button>");

$("button").on("click", function () {
  $("h1").fadeToggle();
});
