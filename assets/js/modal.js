document.querySelectorAll('[data-caixa-informacao-target]').forEach(trigger => {
    trigger.addEventListener('click', function (e) {
        e.preventDefault();
        const caixaId = this.getAttribute('data-caixa-informacao-target');
        const caixa = document.querySelector(caixaId);
        caixa.style.display = 'flex';
        setTimeout(() => {
            caixa.classList.add('mostrar');
        }, 10);
    });
});

// Seleciona todos os botões de fechar
document.querySelectorAll('.caixa-fechar-btn').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
        const caixa = this.closest('.caixa-informacao');
        caixa.classList.remove('mostrar');
        setTimeout(() => {
            caixa.style.display = 'none';
        }, 300);
    });
});

window.addEventListener('click', function (e) {
    if (e.target.classList.contains('caixa-informacao')) {
        e.target.classList.remove('mostrar');
        setTimeout(() => {
            e.target.style.display = 'none';
        }, 300);
    }
});
