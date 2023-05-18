function renderProjects(projects, projectSection) {
  const keys = Object.keys(projects);
  keys.forEach((key) => {
    projectSection.innerHTML += `<li>${key}</li>`;
  });
}

function renderTasks(currPro, taskSection) {
  const keys = Object.keys(currPro);
  keys.forEach((key) => {
    taskSection.innerHTML += `<div><span> ${key} </div>`;
  });
}

function removeChildElements(parent) {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
}

export {
  renderProjects, renderTasks, removeChildElements,
};
