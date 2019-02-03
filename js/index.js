window.sr = ScrollReveal();
sr.reveal('.anim');

const menuButton = document.querySelector('.menu-btn');
const menuItem = document.querySelector('.menu-item');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('menu-btn_active');
  menu.classList.toggle('menu_active');
});

menu.addEventListener('click', () => {
  menuButton.classList.remove('menu-btn_active');
  menu.classList.remove('menu_active');
});
