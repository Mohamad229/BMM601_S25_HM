/**
 * filters.js
 * Handle tool category sorting on tools.html with multi-modal tools support
 */
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll("#tool-filters button");
    const toolCards = document.querySelectorAll("#tools-grid .tool-card");

    if (!filterButtons.length || !toolCards.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove("active", "border-light-subtle", "bg-primary"));
            btn.classList.add("active", "bg-primary");

            const filterValue = btn.getAttribute("data-filter");

            toolCards.forEach(card => {
                const cat1 = card.getAttribute("data-category");
                const cat2 = card.getAttribute("data-category2");
                
                // If filter is 'all', display block. Otherwise, check match for any category.
                if (filterValue === "all" || cat1 === filterValue || cat2 === filterValue) {
                    card.style.display = "block";
                    // re-trigger animation class if desired
                    card.classList.add("aos-animate");
                } else {
                    card.style.display = "none";
                    card.classList.remove("aos-animate");
                }
            });
        });
    });
});
