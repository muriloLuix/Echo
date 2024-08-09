export function carousel() {
    const carousel = document.querySelector('.carousel-inner');
    const nextButton = document.querySelector('.carousel-control-next');
    let currentIndex = 0;
    const intervalTime = 5000; // 5 seconds
    let autoSlideInterval;

    function nextCard() {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        updateCarousel();
    }

    function updateCarousel() {
        const newTransform = -currentIndex * 100;
        carousel.style.transform = `translateX(${newTransform}%)`;
        resetAutoSlideInterval();
    }

    function resetAutoSlideInterval() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextCard, intervalTime);
    }

    nextButton.addEventListener('click', nextCard);

    autoSlideInterval = setInterval(nextCard, intervalTime);
}
