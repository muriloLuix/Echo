export function animation() {
    window.addEventListener('load', function () {
        setTimeout(function () {
            document.querySelector('.loader-wrapper').style.display = 'none'; // Esconde a tela de carregamento após 5.4 segundos
            document.body.style.opacity = '1'; // Torna o body visível
        }, 5400); // Tempo em milissegundos (5.4 segundos)

        const elemento = document.querySelector('.general');
        setTimeout(() => {
            elemento.classList.add('animate');
        }, 2550); // Exemplo de outra animação que começa após 2.55 segundos
    });
}
