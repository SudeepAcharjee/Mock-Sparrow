'use strict';


// navbar toggle functionality



// JavaScript for scroll animation
const section = document.querySelector('.category');

function checkScroll() {
    let sectionPos = section.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (sectionPos < windowHeight * 0.75) {
        section.classList.add('active');
    }
}

// Initial check on page load
checkScroll();

// Listen for scroll events
window.addEventListener('scroll', checkScroll);
