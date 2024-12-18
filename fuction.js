

// Get all "View Image" buttons
const viewImageButtons = document.querySelectorAll('.view-image-btn');
const modal = document.querySelector('.image-modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close-modal');
const prevButton = document.querySelector('.modal-nav.prev');
const nextButton = document.querySelector('.modal-nav.next');

let currentIndex = 0;

// Open modal when the "View Image" button is clicked
viewImageButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentIndex = index;
        showImage();
        modal.style.display = 'flex';
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Show image in the modal based on current index
function showImage() {
    modalContent.innerHTML = `
        <img src="${slideshowItems[currentIndex].querySelector('img').src}" alt="Slide ${currentIndex + 1}" />
    `;
}

// Navigate to previous image
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideshowItems.length) % slideshowItems.length;
    showImage();
});

// Navigate to next image
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideshowItems.length;
    showImage();
});
