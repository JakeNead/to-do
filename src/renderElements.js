import { isUniqueName } from './modals';

const renderElements = (function () {
  // removeElements
  const removeElements = () => {
    const elements = document.querySelectorAll('.projectElement, .taskElement');
    elements.forEach((el) => el.remove());
  };
  // renderProjectElements
  const renderProjectElements = (PM) => {
    projElements(PM);
    projSelectEvents(PM);
    projDeleteEvents(PM);
  };

  const projElements = (PM) => {
    const projectSection = document.getElementById('projectList');
    PM.getStorage.forEach((item) => {
      projectSection.innerHTML += `<li class='projectElement' id=${item.id}><span class='projElement' data-proj-id=${item.id}>${item.projName}</span>
      <button class='projectEditButton'> Edit</button>
      <button class='projectDeleteButton'> Delete</button>
      </li>`;
    });
  };

  const projSelectEvents = (PM) => {
    const projectElements = document.querySelectorAll('.projElement');
    projectElements.forEach((el) => el.addEventListener('click', () => {
      PM.currPro = el.dataset.projId;
      renderPage(PM);
    }));
  };

  const projDeleteEvents = (PM) => {
    const projectDeleteButton = document.querySelectorAll('.projectDeleteButton');
    projectDeleteButton.forEach((el) => el.addEventListener('click', () => {
      PM.deleteProject(el.parentElement.id);
      renderPage(PM);
    }));
  };

  // renderTaskElements
  const renderTaskElements = (taskList) => {
    if (taskList === undefined) return;
    const taskSection = document.getElementById('taskList');
    for (let i = 0; i < taskList.length; i += 1) {
      taskSection.innerHTML += `<div class='${taskList[i].id} taskElement'>
      <span> ${taskList[i].taskName} </span>
      <span>${taskList[i].dueDate}</span>
      <button data-taskEdit ='${taskList[i].id} editTask'>edit</button>
      <button data-taskDelete ='${taskList[i].id} deleteTask'>delete</button>
      <p>${taskList[i].notes}</p>
      </div>`;
    }
  };

  const renderPage = (PM) => {
    removeElements();
    renderProjectElements(PM);
    renderTaskElements(PM.currProjTaskList());
  };

  return { renderPage };
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
