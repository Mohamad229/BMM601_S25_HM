/** 
 * \`animations.js`
 * Initialize AOS and general scroll interactions
 */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        once: true, // Only animate once when scrolled into view
        offset: 80, // Offset from the original trigger point
        duration: 600, // Animation duration (in ms)
        easing: 'ease-out-cubic',
    });

    // Navbar background on scroll
    const navbar = document.getElementById("mainNav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(11, 16, 32, 0.95)";
            navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.5)";
            navbar.style.borderBottomColor = "rgba(0, 194, 255, 0.15)";
        } else {
            navbar.style.background = "rgba(11, 16, 32, 0.85)";
            navbar.style.boxShadow = "none";
            navbar.style.borderBottomColor = "rgba(255, 255, 255, 0.05)";
        }
    });

    // Automatically highlight active nav link based on URL
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentPath) {
            link.classList.add("active");
        } else if (currentPath === "" && linkPath === "index.html") {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});