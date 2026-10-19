
/* ==================================
   THE HUNGRY CANVAS
   Restaurant Website JavaScript
================================== */

// 1. Display a message in the browser console
console.log("Welcome to The Hungry Canvas!");


// 2. Select all internal navigation links
const navigationLinks = document.querySelectorAll(
    'a[href^="#"]'
);

// Add smooth scrolling to section links
navigationLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = link.getAttribute("href");

        // Ignore empty links
        if (targetId === "#") {
            return;
        }

        const targetSection = document.querySelector(targetId);

        // Scroll only if the target section exists
        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// 3. Search menu items by their names
// This feature works after you add a search input
// and a menu search button to index.html.

const menuSearch = document.querySelector("#menu-search");
const foodCards = document.querySelectorAll(".food-card");

if (menuSearch) {
    menuSearch.addEventListener("input", function () {
        const searchText = menuSearch.value
            .trim()
            .toLowerCase();

        foodCards.forEach(function (card) {
            const foodName = card
                .querySelector("h3")
                .textContent
                .toLowerCase();

            if (foodName.includes(searchText)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}
