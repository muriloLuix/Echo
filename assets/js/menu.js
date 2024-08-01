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
  