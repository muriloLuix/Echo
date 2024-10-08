// Get elements
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const closeFooterBtn = document.getElementById('closeFooterBtn');
const modal = document.getElementById('myModal');

// Open modal
openModalBtn.onclick = function () {
    modal.style.display = 'block';
}

// Close modal when clicking on 'x' or 'Close' button
closeModalBtn.onclick = closeFooterBtn.onclick = function () {
    modal.style.display = 'none';
}

// Close modal if clicking outside the modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}