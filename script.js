document.addEventListener('DOMContentLoaded', function() {
    function logAltText(event) {
        console.log(event.target.alt);
    }
    const galleryImages = document.querySelectorAll('#gallery img');
    galleryImages.forEach(function(image) {
        image.addEventListener('click', logAltText);
    });
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');
    function toggleNav() {
        navLinks.classList.toggle('show');
    }
    hamburger.addEventListener('click', toggleNav);
});
