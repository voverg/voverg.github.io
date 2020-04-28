// Select Html elements
// Main nav elements
const body = document.querySelector('body');
const mainNav = document.querySelector('.main-nav');
// Burger menu elements
const burgerMenu = document.querySelector('.burger-menu');
const button = burgerMenu.querySelector('.burger-menu__button');
const burgerNav = burgerMenu.querySelector('.burger-menu__nav');
const overlay = burgerMenu.querySelector('.burger-menu__overlay');
// Progress bars elements
const aboutEl = document.querySelector('.about');
const circles = document.querySelectorAll('.progress__circle');
const radius = circles[0].r.baseVal.value;
const circumference = 2 * Math.PI * radius;
const persentsEl = document.querySelectorAll('.skill__persents span');

// Progress bar
function setProgress(persent, index) {
    let current = 0;
    const progress = circumference / 100 * persent;
    let intervalId = setInterval(() => {
        if (current > progress) {
            clearInterval(intervalId);
        } else {
            circles[index].style.strokeDashoffset = circumference - current;
            persentsEl[index].textContent =  Math.round(current / 2.51);
        }
        current++;
    }, 1)
}

let checkAnimate = 0;
function startAnimate() {
    if (checkAnimate > 0) return

    circles.forEach((elem, index) => {
        const persent = elem.dataset.persent;
        setProgress(persent, index);
    })

    checkAnimate++;
}

// Main nav
mainNav.addEventListener('click', event => {
    link = event.target;
    if (link.classList.contains('main-nav__link') || link.classList.contains('logo__link') || link.classList.contains('logo__img')) {
        smoothScroll(event, link);
    }
})
// Burger menu
function toggleMenu() {
    burgerMenu.classList.toggle('burger-menu_active');
    body.classList.toggle('hidden');
}

button.addEventListener('click', event => {
    event.preventDefault();
    toggleMenu();
});

burgerNav.addEventListener('click', event => {
    const link = event.target;
    if (link.classList.contains('burger-menu__link')) {
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

window.addEventListener('scroll', function() {
    //show animation main nav
    if(window.pageYOffset > 200){
        mainNav.classList.add('main-nav__fixed');
    } else{
        mainNav.classList.remove('main-nav__fixed');
    }
    // Show animation progress bar
    let checkAnimate = 0;
    if (window.pageYOffset > 590) {
        startAnimate();
    }
})
