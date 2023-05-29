const renderElements = (function () {
  const removeChildElements = (parent) => {
    while (parent.hasChildNodes()) {
      parent.removeChild(parent.firstChild);
    }
  };
  const createProjectElements = (projects) => {
    const projectSection = document.getElementById('projects');
    const keys = Object.keys(projects);
    keys.forEach((key) => {
      projectSection.innerHTML += `<li><span class='projElement'>${key}</span><button class='projectDeleteButton'> Delete</button></li>`;
    });
  };

  const createTaskElements = (currPro) => {
    const taskSection = document.getElementById('taskList');
    const keys = Object.keys(currPro);
    for (let i = 0; i < keys.length; i += 1) {
      taskSection.innerHTML += `<div class = '${keys[i]}'>
    <span> ${keys[i]} </span>
    <span>${currPro[keys[i]].dueDate}</span>
    <button data-taskEdit ='${keys[i]} editTask'>edit</button>
    <button data-taskDelete ='${keys[i]} deleteTask'>delete</button>
    <p>${currPro[keys[i]].notes}</p>
    </div>`;
    }
  };

  // function deleteTask(project, el) {
  //   if (confirm('Are you sure you want to permanently delete this task?')) {
  //     const task = el.dataset.taskDelete;
  //     delete project[task];
  //   }
  // }
  const projectEvents = (projects, projectSection) => {
    const projectDeleteButton = document.querySelectorAll('.projectDeleteButton');
    projectDeleteButton.forEach((el) => el.addEventListener('click', () => {
      delete projects[el.parentElement.firstChild.textContent];
      renderProjects(projects, projectSection);
    }));
  };
  const renderProjects = (projects, projectSection) => {
    removeChildElements(projectSection);
    createProjectElements(projects);
    projectEvents(projects, projectSection);
  };
  const renderTasks = (currPro, taskSection) => {
    removeChildElements(taskSection);
    createTaskElements(currPro);
  };

  return { renderProjects, renderTasks };
}());

export default renderElements;

// (() => {
// const deleteBtn = document.querySelectorAll('data-taskDelete');
// const editBtn = document.querySelectorAll('data-taskEdit');
// const projElements = document.querySelectorAll('projElement');

//   return {
//     deleteBtn, editBtn, projElements,
//   };
