function removeChildElements(parent) {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
}

function renderProjects(projects, projectSection) {
  removeChildElements(projectSection);
  const keys = Object.keys(projects);
  keys.forEach((key) => {
    projectSection.innerHTML += `<li>${key}</li>`;
  });
}

function renderTasks(currPro, taskSection) {
  removeChildElements(taskSection);
  const keys = Object.keys(currPro);
  for (let i = 0; i < keys.length; i += 1) {
    taskSection.innerHTML += `<div class = '${keys[i]}'>
    <span> ${keys[i]} </span>
    <span>${currPro[keys[i]].dueDate}</span>
    <button class ='${keys[i]}'>edit</button>
    <button class ='${keys[i]}'>delete</button>
    <p>${currPro[keys[i]].notes}</p>
    </div>`;
  }
}

function editTask(task) {
// open modal
// populate modal with object values
}
function deleteTask(project, task, el) {
  if (confirm('Are you sure you want to permanently delete this task?')) {
    // delete project[el.parentElement.getAttribute('class', 1)];
  }
}

export {
  renderProjects, renderTasks, editTask, deleteTask,
};
