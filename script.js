// Select DOM elements
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Add event listener for menu icon click
menuIcon.addEventListener('click', () => {
    // Toggle the 'active' class on the navbar
    navbar.classList.toggle('active');
    // Change the menu icon (optional for better UX)
    menuIcon.classList.toggle('bx-x');
});

// Close the navbar when a link is clicked (optional)
navbar.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});
// Scroll animation for timeline items
const timelineItems = document.querySelectorAll('.timeline-item');

const scrollReveal = () => {
    const triggerBottom = window.innerHeight * 0.8;

    timelineItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
};

window.addEventListener('scroll', scrollReveal);


