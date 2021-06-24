// Select Html elements
const body = document.querySelector('body');
const header = document.querySelector('header');
// Burger menu elements
const burgerMenu = document.querySelector('.burger-menu');
const burgerBtn = burgerMenu.querySelector('.burger-menu__button');
const burgerNav = burgerMenu.querySelector('.burger-menu__nav');
const overlay = burgerMenu.querySelector('.burger-menu__overlay');


// Burger menu
burgerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    toggleMenu();
});

burgerNav.addEventListener('click', (event) => {
    const link = event.target;
    if (link.classList.contains('nav-item-js')) {
        smoothScroll(event, link);
        toggleMenu();
    }
})

overlay.addEventListener('click', toggleMenu);


function toggleMenu() {
    burgerMenu.classList.toggle('burger-menu_active');
    body.classList.toggle('hidden');
}

function smoothScroll(event, link) {
    event.preventDefault();
    const href = link.getAttribute('href') || link.dataset.href;
    const target = document.querySelector(`${href}`);

    if (target !== null) {
      const headerHeight = burgerBtn.clientHeight || header.clientHeight;
      const topPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
      });
    }
}
