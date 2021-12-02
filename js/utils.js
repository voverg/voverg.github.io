// Add projects__item to the projects section
function addProjects(block, data, type='', showClass='grow') {
  const projectsElems = data.filter(elem => elem.type === type).map((item) => {
    const projectEl = createProjectEl(item, showClass);

    return projectEl;
  });

  block.innerHTML = projectsElems.join('');
}

// Create a project element
function createProjectEl(item, showClass) {
  const projectItem = `
    <div id="${item.id}" class="projects__item ${showClass}">
      <div class="card">
        <a href="${item.link}" class="details-link-js" rel="noopener noreferrer" target="_blank">
          <img src="${item.img}" alt="${item.title} image" title="Кликни, чтобы посмотреть демо-версию">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
        </a>
      </div>
    </div>
  `;

  return projectItem;
}

// Animate projects__item with scroll
function createBlockScrollAnimation(blocks) {
  // Получить 4/5 высоты экрана
  const triggerBottom = window.innerHeight / 5 * 4;

  blocks.forEach((block) => {
    const blockTop = block.getBoundingClientRect().top

    if (blockTop < triggerBottom) {
      block.classList.add('show');
    }
  });
}


// Fill the popup element with a project details
function createProjectDetails(projectData) {
  const projectDetails = `
    <div class="popup__header">
      <span href="" class="popup__close">&#10008;</span>
      <h3 class="popup__title">Приложение ${projectData.title}</h3>
    </div>

    <div class="popup__body">
      <div class="popup__short-description">
        <div class="popup__text">${projectData.description}</div>
        <img src="${projectData.img}" alt="картинка ${projectData.title}" class="popup__img">
      </div>

      <div class="popup__long-description">${projectData.longDescription}</div>

      <div class="popup__project-links">
        <a href="${projectData.link}"
          class="popup__btn gh-pages"
          rel="noopener noreferrer" target="_blank"
        >Посмотреть демо-версию</a>
        <a href="${projectData.sourceLink}"
          class="popup__btn source-code"
          rel="noopener noreferrer" target="_blank"
        >Посмотреть код на Github</a>
      </div>
    </div>
  `;

  return projectDetails;
}

function addProjectDetails(projectId) {
  const projectData = data.find(project => project.id === projectId);
  const popupEl = document.querySelector('.popup-body-js');

  const projectDetailsEl = createProjectDetails(projectData);
  popupEl.innerHTML = projectDetailsEl;
}
