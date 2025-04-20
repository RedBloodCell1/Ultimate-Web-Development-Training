$("h1").addClass("big-title margin-50");
$("button").html("<em>NICE</em>");
// console.log($("h1").attr("class", "margin-50"));
$("h1").click(function () {
  $("h1").css("color", "red");
});

$("button").click(function () {
  $("h1").css("color", "red");
});

// $(document).keypress(function (event) {
//   $("h1").text(event.key);
// });

$(document).on("keypress", function (event) {
  $("h1").slideToggle(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});

// $("h1").after("<button>asd</button>");
