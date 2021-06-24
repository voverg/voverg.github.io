// Select Html elements
const body = document.querySelector('body');
// Burger menu elements
const burgerMenu = document.querySelector('.burger-menu');
const burgerBtn = burgerMenu.querySelector('.burger-menu__button');
const burgerNav = burgerMenu.querySelector('.burger-menu__nav');
const overlay = burgerMenu.querySelector('.burger-menu__overlay');




// Burger menu
function toggleMenu() {
    burgerMenu.classList.toggle('burger-menu_active');
    body.classList.toggle('hidden');
}

burgerBtn.addEventListener('click', event => {
    event.preventDefault();
    toggleMenu();
});

burgerNav.addEventListener('click', event => {
    const link = event.target;
    if (link.classList.contains('nav-item-js')) {
        smoothScroll(event, link);
        toggleMenu();
    }
})

overlay.addEventListener('click', toggleMenu);

// Show fixed nav
function smoothScroll(event, link) {
    event.preventDefault();
    const href = link.getAttribute('href') || link.dataset.href;
    document.querySelector('' + href).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}
