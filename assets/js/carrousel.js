let carrossel = document.querySelector('#carouselExample');
carrossel.addEventListener('slid.bs.carousel', function (e) {
    let indicadores = document.querySelectorAll('.indicadores-carrossel li');
    indicadores.forEach(function (indicador) {
        indicador.classList.remove('ativo');
    });
    indicadores[e.to].classList.add('ativo');
});
