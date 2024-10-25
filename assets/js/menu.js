const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-link'); // Seleciona todos os links do menu

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('open');
});

// Fecha o menu quando qualquer link for clicado
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show'); // Fecha o menu
        hamburger.classList.remove('open'); // Volta o ícone para hambúrguer
    });
});

