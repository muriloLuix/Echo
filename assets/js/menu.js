const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-link');
const body = document.body;

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('open');

    if (navLinks.classList.contains('show')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
});