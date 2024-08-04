document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('#carousel > div');
    const carousel = document.getElementById('carousel');

    let currentIndex = Math.floor(cards.length / 2);

    function updateCarousel() {
        cards.forEach((card, index) => {
            card.classList.remove('prev', 'active', 'next');
            if (index === currentIndex) {
                card.classList.add('active');
            } else if (index === currentIndex - 1) {
                card.classList.add('prev');
            } else if (index === currentIndex + 1) {
                card.classList.add('next');
            }
        });

        const activeCard = document.querySelector('#carousel > div.active');
        const offset = activeCard.offsetLeft - (carousel.clientWidth / 2 - activeCard.clientWidth / 2);
        carousel.style.transform = `translateX(-${offset}px)`;
    }

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
        } else if (e.key === 'ArrowRight' && currentIndex < cards.length - 1) {
            currentIndex++;
        }
        updateCarousel();
    });

    updateCarousel();
});
