function createProjectsItem(block, data) {
  data.forEach((item) => {
    const projectItem = `
      <div class="projects__item">
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
