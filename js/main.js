// Select Html elements
const body = document.querySelector('body');
const header = document.querySelector('header');
const headerWrapper = document.querySelector('.header__wrapper');
const sections = document.querySelectorAll('.section-wrapper');
// Burger menu elements
const burgerMenu = document.querySelector('.burger-menu');
const burgerBtn = burgerMenu.querySelector('.burger-menu__button');
const links = document.querySelectorAll('.burger-menu__link');
const overlay = burgerMenu.querySelector('.burger-menu__overlay');


// Burger menu
burgerBtn.addEventListener('click', (event) => {
  event.preventDefault();
  toggleMenu();
});

header.addEventListener('click', (event) => {
  const link = event.target;
  if (link.classList.contains('nav-item-js')) {
    smoothScroll(event, link);
    toggleMenu();
  }
})

overlay.addEventListener('click', toggleMenu);

// Functions
function toggleMenu() {
  burgerMenu.classList.toggle('burger-menu_active');
  body.classList.toggle('hidden');
}

function smoothScroll(event, link) {
  event.preventDefault();
  const href = link.getAttribute('href') || link.dataset.href;
  const target = document.querySelector(`${href}`);

  if (target !== null) {
    const headerHeight = burgerBtn.clientHeight || headerWrapper.clientHeight;
    const topPosition = target.offsetTop - headerHeight;

    window.scrollTo({
      top: topPosition,
      behavior: 'smooth'
    });
  }
}

// Добавляем прослушивателя для шапки, чтобы отследить
// когда она выйдет за пределы видимости и добавляем ей класс для анимации
const headerObserver = new IntersectionObserver((entries, observer) => {
  if (entries[0].isIntersecting) {
    header.classList.remove('_scroll');
    links[0].classList.add('active');
  } else {
    header.classList.add('_scroll');
  }
}, {threshold: 1});

headerObserver.observe(header);

// Добавляем прослушивателей для секций
const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      changeActiveMenuItem(entry.target.id);
    }
  });
}, {threshold: 0.7 });

sections.forEach((section) => {
  sectionObserver.observe(section);
});

function changeActiveMenuItem(sectionId) {
  const menuItem = document.querySelector(`a[href="#${sectionId}"]`);

  links.forEach((item) => item.classList.remove('active'));
  menuItem.classList.add('active');
}
