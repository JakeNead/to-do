function renderProjects(projects, projectSection) {
  const keys = Object.keys(projects);
  keys.forEach((key) => {
    projectSection.innerHTML += `<li>${key}</li>`;
  });
}

function renderTasks(currPro, taskSection) {
  const keys = Object.keys(currPro);
  for (let i = 0; i < keys.length; i += 1) {
    taskSection.innerHTML += `<div id = '${keys[i]}'><span> ${keys[i]} </span><span>${currPro[keys[i]].notes}</span><span>${currPro[keys[i]].dueDate}<button>edit</button><button>delete</button></div>`;
  }
}

function removeChildElements(parent) {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
}

export {
  renderProjects, renderTasks, removeChildElements,
};
