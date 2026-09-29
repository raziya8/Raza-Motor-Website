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
// SHARE WEBSITE

const shareButton = document.getElementById("shareButton");

shareButton.addEventListener("click", async () => {

    const shareData = {
        title: "Raza Motor - Second Hand Bike Spare Parts",
        text: "Looking for second hand bike spare parts? Check out Raza Motor, Mullick Bazar, Kolkata.",
        url: "https://raziya8.github.io/Raza-Motor-Website/"
    };

    if (navigator.share) {

        try {
            await navigator.share(shareData);
        } catch (error) {
            console.log("Share cancelled");
        }

    } else {

        const whatsappMessage =
            "Check out Raza Motor for second hand bike spare parts in Mullick Bazar, Kolkata: https://raziya8.github.io/Raza-Motor-Website/";

        window.open(
            "https://wa.me/?text=" + encodeURIComponent(whatsappMessage),
            "_blank"
        );

    }

});
const orderWhatsApp = document.getElementById("orderWhatsApp");

orderWhatsApp.addEventListener("click", () => {

    const bikeBrand = document.getElementById("bikeBrand").value;
    const bikeModel = document.getElementById("bikeModel").value;
    const partName = document.getElementById("partName").value;
    const quantity = document.getElementById("quantity").value;
    const customerName = document.getElementById("customerName").value;
    const customerPhone = document.getElementById("customerPhone").value;
    const orderMessage = document.getElementById("orderMessage").value;

    if (
        !bikeBrand ||
        !bikeModel ||
        !partName ||
        !customerName ||
        !customerPhone
    ) {
        alert("Please fill in all required details.");
        return;
    }

    const whatsappMessage =
        `Hello Raza Motor,

I want to order a bike spare part.

Bike Brand: ${bikeBrand}
Bike Model: ${bikeModel}
Part Required: ${partName}
Quantity: ${quantity}

Customer Name: ${customerName}
Phone Number: ${customerPhone}

Additional Details:
${orderMessage || "None"}

Please let me know the availability and price. Thank you.`;

    const whatsappURL =
        "https://wa.me/918409003786?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
});