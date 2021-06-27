function createProjectsItem(block, data, showClass='grow') {
  data.forEach((item) => {
    const projectItem = `
      <div class="projects__item ${showClass}">
        <div class="card">
          <a href="${item.link}" target="_blank">
            <img src="${item.img}" alt="${item.title} image" title="Кликни, чтобы посмотреть демо-версию">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
          </a>
        </div>
      </div>
    `

    block.insertAdjacentHTML('beforeend', projectItem);
  });
}

function createBlockScrollAnimation(blocks) {
  // Получить 5/4 высоты экрана
  const triggerBottom = window.innerHeight / 5 * 4;

  blocks.forEach((block) => {
    const blockTop = block.getBoundingClientRect().top

    if (blockTop < triggerBottom) {
      block.classList.add('show');
    }
  });
}
