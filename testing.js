const slideshowItems = document.querySelectorAll('.slideshow-item img');
const modal = document.querySelector('.image-modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close-modal');
const prevButton = document.querySelector('.modal-nav.prev');
const nextButton = document.querySelector('.modal-nav.next');

let currentIndex = 0;

// Open modal and set the current image
slideshowItems.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showImage();
        modal.style.display = 'flex';
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Show image based on current index
function showImage() {
    modalContent.innerHTML = `
        <img src="${slideshowItems[currentIndex].src}" alt="Slide ${currentIndex + 1}" />
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
