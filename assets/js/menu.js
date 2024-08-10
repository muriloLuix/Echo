document.addEventListener('DOMContentLoaded', function () {
  const menuHamburger = document.querySelector('.menuHamburger');
  const fullScreenMenu = document.getElementById('fullScreenMenu');

  menuHamburger.addEventListener('click', function () {
    document.body.classList.toggle('menuOpen');
  });

  fullScreenMenu.addEventListener('click', function (event) {
    if (event.target.tagName === 'A' || event.target.id === 'fullScreenMenu') {
      document.body.classList.remove('menuOpen');
    }
  });
});

function toggleMenu() {
  const menu = document.querySelector('.menu');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  menu.classList.toggle('open');
  hamburgerMenu.classList.toggle('open');
}

document.querySelectorAll('.menu-content ul li a').forEach(link => {
  link.addEventListener('click', function () {
    toggleMenu();
  });
});

function menu(){
  
}