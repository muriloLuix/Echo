const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');
const body = document.body;

function toggleMenu() {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
  body.classList.toggle('no-scroll');
}

hamburger.addEventListener('click', toggleMenu);

navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      toggleMenu();
    }
  });
});
