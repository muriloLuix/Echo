export function faqs() {
    document.addEventListener('DOMContentLoaded', function () {
        const faqGrid = document.querySelector('.faq-grid');
        const btnActive = document.querySelector('.btnActive');

        btnActive.addEventListener('click', function () {
            if (faqGrid.classList.contains('active')) {
                faqGrid.classList.remove('active');
            } else {
                faqGrid.classList.add('active');
            }
        });
    });
}