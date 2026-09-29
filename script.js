// LIGHTBOX

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeButton = document.getElementById("lightboxClose");
const prevButton = document.getElementById("lightboxPrev");
const nextButton = document.getElementById("lightboxNext");

let currentImage = 0;


// Open image
galleryImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentImage = index;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

    });

});


// Close
closeButton.addEventListener("click", () => {

    lightbox.classList.remove("active");

});


// Next image
nextButton.addEventListener("click", () => {

    currentImage++;

    if (currentImage >= galleryImages.length) {
        currentImage = 0;
    }

    lightboxImage.src = galleryImages[currentImage].src;
    lightboxImage.alt = galleryImages[currentImage].alt;

});


// Previous image
prevButton.addEventListener("click", () => {

    currentImage--;

    if (currentImage < 0) {
        currentImage = galleryImages.length - 1;
    }

    lightboxImage.src = galleryImages[currentImage].src;
    lightboxImage.alt = galleryImages[currentImage].alt;

});


// Close when clicking outside image
lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }

});


// Keyboard controls
document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }

    if (event.key === "ArrowRight") {
        nextButton.click();
    }

    if (event.key === "ArrowLeft") {
        prevButton.click();
    }

});
// SHOW ALL PARTS

const allGalleryImages = document.querySelectorAll(".gallery-grid img");
const viewAllButton = document.getElementById("viewAllParts");

allGalleryImages.forEach((image, index) => {

    if (index >= 8) {
        image.style.display = "none";
    }

});

viewAllButton.addEventListener("click", () => {

    allGalleryImages.forEach((image) => {
        image.style.display = "block";
    });

    viewAllButton.style.display = "none";

});