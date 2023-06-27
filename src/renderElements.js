import { isUniqueName } from './modals';

const render = (function () {
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
    projEditEvents(PM);
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
    const projDelBtn = document.querySelectorAll('.projectDeleteButton');
    projDelBtn.forEach((el) => el.addEventListener('click', () => {
      PM.deleteProject(el.parentElement.id);
      renderPage(PM);
    }));
  };

  const projEditEvents = () => {
    const projEditBtn = document.querySelectorAll('.projectEditButton');
    const editProjectForm = document.querySelector('#editProjectForm');
    const editProjectName = document.querySelector('#editProjName');
    projEditBtn.forEach((el) => el.addEventListener('click', (e) => {
      console.log(el);
      /// work on the useProjectPlaceholderName function
      // need to access the project element id to insert placeholder name
      showProjEditForm(el);
      useProjectPlaceholderName(editProjectForm, editProjectName);
    }));
  };
  function showProjEditForm(el) {
    const projectSection = document.getElementById('projectList');
    el.parentElement.classList.add('hidden');
    editProjectForm.classList.add('visible');
    projectSection.insertBefore(editProjectForm, el.parentElement);
  }
  function useProjectPlaceholderName(editProjectForm, input) {
    input.placeholder = editProjectForm.nextElementSibling.querySelector('.projElement').textContent;
  }

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
  // global function
  const renderPage = (PM) => {
    removeElements();
    renderProjectElements(PM);
    renderTaskElements(PM.currProjTaskList());
  };

  return { renderPage };
}());

const renderProjects = render.renderPage;

export default renderProjects;

// edit projects thought process as of june 10th
// on edit project click....
// show form/hide clicked project
// update placeholder
//
// edit form only needs event listeners once
// if in index.js....
// submit modifies projects then runs render projects and hides edit form
// Soooooo try transfering the edit project form save/cancel to the modal module.
