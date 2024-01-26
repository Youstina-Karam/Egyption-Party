/** left menu */
$(".openNav").on("click", function () {
  $("#leftMenu").animate({ width: "300px" }, 500);
  $(this).animate({ left: "310px" }, 500);
});

$(".closeBtn").click(function () {
  $("#leftMenu").animate({ width: "0px" }, 500);
  $(".openNav").animate({ left: "10px" }, 500);
});

/*scroll menu*/
$("#leftMenu a").click(function () {
  $("#leftMenu a").removeClass("active");
  $(this).addClass("active");
  let href = $(this).attr("href");
  $("html , body").animate({ scrollTop: $(href).offset().top - 50 }, 500);
});

/* accordion slider*/

$("#accordion h3").on("click", function () {
  $(".toggle-bar").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

/* Count down*/

$(document).ready(function () {
  // Set the target date (year, month (0-indexed), day, hour, minute, second)
  var targetDate = new Date(2024, 1, 31, 23, 59, 59);
  // Set the date we're counting down to (current date + 30 days)
  // var countDownDate = new Date();
  // countDownDate.setDate(countDownDate.getDate() + 30);

  // Calculate the remaining time
  var now = new Date().getTime();
  var distance = targetDate - now;

  // Initialize the FlipClock
  var clock = $("#countdown").FlipClock(distance / 1000, {
    clockFace: "DailyCounter",
    countdown: true,
  });

  // If the countdown is over, display a message
  if (distance < 0) {
    $("#countdown").text("EXPIRED");
  }
});

/* contact*/
$("#textarea").on("keyup", function () {
  let length = $(this).val().length;
  let char = 100 - length;

  if (char <= 0) $("#chars").text("your available character finished");
  else $("#chars").text(char);
});

if ($(window).scrollTop() > 0) {
  $('html, body').animate({ scrollTop: 0 }, 800);
}