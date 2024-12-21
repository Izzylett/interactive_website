// Dynamic content toggle
document.getElementById('toggleContent').addEventListener('click', function() {
    const content = document.getElementById('dynamicContent');
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
});

// Image slider
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentImageIndex = 0;
const sliderImage = document.getElementById('sliderImage');

document.getElementById('prevBtn').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    sliderImage.src = images[currentImageIndex];
});

document.getElementById('nextBtn').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    sliderImage.src = images[currentImageIndex];
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
});
