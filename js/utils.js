// Add projects__item to the projects section
function addProjects(block, data, showClass='grow') {
  const projectsElems = data.map((projectData) => {
    const projectEl = createProjectEl(projectData, showClass);

    return projectEl;
  });

  block.innerHTML = projectsElems.join('');
}

function createProjectEl(item, showClass) {
  const projectItem = `
    <div class="projects__item ${showClass}">
      <div class="card">
        <a href="${item.link}" rel="noopener noreferrer" target="_blank">
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
