window.sr = ScrollReveal();
sr.reveal('.anim');

const menuButton = document.querySelector('.menu-btn');
const menuItems = document.querySelectorAll('.menu-item');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('menu-btn_active');
  menu.classList.toggle('menu_active');
});

Array.from(menuItems).forEach(el => {
  el.addEventListener('click', () => {
    menuButton.classList.remove('menu-btn_active');
    menu.classList.remove('menu_active');
  });
});
