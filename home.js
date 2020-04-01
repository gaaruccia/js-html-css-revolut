$(".padrone").click(
  function () {
  if ($(this).children().hasClass("open")) {
    $(this).children().toggle().removeClass("open");
  } else {
    $(".open").toggle().removeClass("open");
    $(this).children().toggle().addClass("open");
    }
  }
)
$(".fa-bars").click(
  function(){
    $('.hamburger-menu').addClass("fadeIn");
  }
)
$(".fa-times").click(
  function(){
    $('.hamburger-menu').removeClass("fadeIn");
  }
)
$(".allarga").click(
  function () {
  if ($(this).children().hasClass("open")) {
    $(this).children().slideToggle().removeClass("open");
  } else {
    $(".open").toggle().removeClass("open");
    $(this).children().slideToggle().addClass("open");
    }
  }
)
