import { isUniqueName } from './modals';

const renderElements = (function () {
  const removeElements = () => {
    const elements = document.querySelectorAll('.projectElement, .taskElement');
    elements.forEach((el) => el.remove());
  };

  const renderProjectElements = (projMan) => {
    const projectSection = document.getElementById('projectList');
    projMan.getStorage.forEach((item) => {
      projectSection.innerHTML += `<li class='projectElement'><span class='projElement'>${item.projName}</span>
      <button class='projectEditButton'> Edit</button>
      <button class='projectDeleteButton'> Delete</button>
      </li>`;
    });
  };

  const renderTaskElements = (projMan) => {
    if (projMan.currPro === undefined) return;
    const taskSection = document.getElementById('taskList');
    // this should be a simple method call
    // Need the taskList of the current project [{},{},{}]
    // projMan
    // {}.getTaskList
    // this gives me
    const keys = Object.keys(currPro);
    for (let i = 0; i < keys.length; i += 1) {
      taskSection.innerHTML += `<div class='${keys[i]} taskElement'>
      <span> ${keys[i]} </span>
      <span>${currPro[keys[i]].dueDate}</span>
      <button data-taskEdit ='${keys[i]} editTask'>edit</button>
      <button data-taskDelete ='${keys[i]} deleteTask'>delete</button>
      <p>${currPro[keys[i]].notes}</p>
      </div>`;
    }
  };
  const projectEvents = (projects, currPro) => {
    const projectElements = document.querySelectorAll('#projectList li');
    projectElements.forEach((el) => el.addEventListener('click', () => {
      currPro = projects[el.firstChild.textContent];
      renderProjects(projects, currPro);
    }));
  };
  const renderProjects = (projectManager) => {
    let currPro = projectManager.getStorage[0];
    removeElements();
    renderProjectElements(projectManager);
    renderTaskElements(projectManager);
    projectEvents(projectManager);
  };

  return { renderProjects };
}());

export default renderElements;

// edit projects thought process as of june 10th
// on edit project click....
// show form/hide clicked project
// update placeholder
//
// edit form only needs event listeners once
// if in index.js....
// submit modifies projects then runs render projects and hides edit form
// Soooooo try transfering the edit project form save/cancel to the modal module.
