// Select all required elements
const viewImageButtons = document.querySelectorAll('.view-image-btn');
const modal = document.querySelector('.image-modal');
const modalContent = modal.querySelector('.modal-content');
const closeModal = modal.querySelector('.close-modal');
const prevButton = modal.querySelector('.modal-nav.prev');
const nextButton = modal.querySelector('.modal-nav.next');
const slideshowItems = document.querySelectorAll('.slideshow-item');

let currentIndex = 0;

// Open modal when "View Image" button is clicked
viewImageButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentIndex = index;
        openModal();
    });
});

// Function to open modal and display the current image
function openModal() {
    showImage();
    modal.style.display = 'flex';
}

// Function to close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Function to show the current image in the modal
function showImage() {
    const currentImage = slideshowItems[currentIndex].querySelector('img').src;
    modalContent.innerHTML = `
        <img src="${currentImage}" alt="Slide ${currentIndex + 1}" />
    `;
}

// Navigate between images in the modal
prevButton.addEventListener('click', () => navigateImage(-1));
nextButton.addEventListener('click', () => navigateImage(1));

// Navigate images based on direction
function navigateImage(direction) {
    currentIndex = (currentIndex + direction + slideshowItems.length) % slideshowItems.length;
    showImage();
}
