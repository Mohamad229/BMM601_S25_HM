/**
 * gallery.js
 * Initialize GLightbox configuration
 */
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
        openEffect: 'zoom',
        closeEffect: 'fade'
    });
});