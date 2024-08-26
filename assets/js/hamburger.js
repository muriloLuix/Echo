const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

// Fun��o para alternar o menu hamb�rguer
function toggleMenu() {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
}

// Evento para abrir/fechar o menu ao clicar no �cone hamb�rguer
hamburger.addEventListener('click', toggleMenu);

// Evento para fechar o menu ao clicar em qualquer item do menu
navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      toggleMenu();
    }
  });
});