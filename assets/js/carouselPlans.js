export function carouselPlans() {
    let posicaoX = 0;
    let itens = document.getElementsByClassName('item');
    let limiteDireita = (itens.length - 3) * (-350);
    let limiteEsquerda = 0;

    // Botão esquerda
    document.getElementById("e").addEventListener("click", function () {
        posicaoX += 350;
        if (posicaoX > limiteEsquerda) {
            posicaoX = limiteDireita - 350;
        }
        document.getElementById("mover").style.marginLeft = posicaoX + "px";
    });

    // Botão direita
    document.getElementById("d").addEventListener("click", function () {
        posicaoX -= 350;
        if (posicaoX < limiteDireita) {
            posicaoX = limiteEsquerda;
        }
        document.getElementById("mover").style.marginLeft = posicaoX + "px";
    });
}