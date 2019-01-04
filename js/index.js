window.sr = ScrollReveal();
sr.reveal(".anim");

$(document).ready(function() {
  //  Клик по кнопке меню
  $(".menu-btn").on("click", function() {
    $(this).toggleClass("menu-btn_active");
    $(".menu").toggleClass("menu_active");
  });
  //  Клик по ссылке в меню
  $(".menu-item").on("click", function() {
    $(".menu-btn").toggleClass("menu-btn_active");
    $(".menu").toggleClass("menu_active");
  });
});
