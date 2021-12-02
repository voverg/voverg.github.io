// Select Html elements
const body = document.querySelector('body');
const header = body.querySelector('header');
const headerWrapper = body.querySelector('.header__wrapper');
const sections = body.querySelectorAll('.section-wrapper');
// Burger menu elements
const burgerMenu = body.querySelector('.burger-menu');
const burgerBtn = burgerMenu.querySelector('.burger-menu__button');
const links = body.querySelectorAll('.burger-menu__link');
const overlay = burgerMenu.querySelector('.burger-menu__overlay');
// Popup
const popup = body.querySelector('.popup');


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
}, {threshold: 1.0});

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

// Добавление проектов в блоки projects
const layoutEl = body.querySelector('#layout .projects');
const webAppsEl = body.querySelector('#web-apps .projects');
const spaEl = body.querySelector('#spa .projects');

addProjects(layoutEl, data, 'layouts', 'grow');
addProjects(webAppsEl, data, 'jsapps', 'opacity');
addProjects(spaEl, data, 'spa', 'translate');

// Анимация для созданных выше блоков projects
const projectEls = body.querySelectorAll('.projects__item');

window.addEventListener('scroll', () => {
  createBlockScrollAnimation(projectEls);
});


// Работа с модальным окном, который содержит детали проектов
function togglePopup() {
  popup.classList.toggle('active');
  body.classList.toggle('hidden-popup');
}

function popupHandle(event) {
  // event.preventDefault()
  const target = event.target;

  if (!target.closest('.popup-body-js') || target.classList.contains('popup__close')) {
    togglePopup();
  }
}

popup.addEventListener('click', popupHandle);

body.addEventListener('click', (event) => {
  const target = event.target;

  if (target.closest('.details-link-js')) {
    event.preventDefault();
    const project = target.closest('.projects__item');
    togglePopup();
    addProjectDetails(project.id);
  }
})

