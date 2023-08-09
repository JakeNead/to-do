import { lookForLocalStorage, updateLocalStorage } from './localStorage';

// remove Elements
const removeProjects = () => {
  const elements = document.querySelectorAll('.projectElement');
  elements.forEach((el) => el.remove());
};

const removeTasks = () => {
  const elements = document.querySelectorAll('[data-task-id]');
  elements.forEach((el) => el.remove());
};

// render project elements
const renderProjectElements = (PM) => {
  const editProjectContainer = document.querySelector('#editProjectContainer');
  projElements(PM);
  projSelectEvents(PM);
  projDeleteEvents(PM);
  projEditButtonEvents(PM);
  projEditSave(PM);
  projEditCancel(PM);
};

const projElements = (PM) => {
  const projectSection = document.getElementById('projectList');
  PM.getStorage.forEach((item) => {
    projectSection.innerHTML += `
    <li class='projectElement' data-proj-id=${item.id}>
      <span class='projElement' data-proj-id=${item.id}>${item.projName}
      </span>
      <div class='projectButtons'>
        <button class='projectEditButton'> Edit</button>
        <button class='projectDeleteButton'> Delete</button>
      </div>
    </li>`;
  });
};

const projSelectEvents = (PM) => {
  const projectElements = document.querySelectorAll('.projElement');
  projectElements.forEach((el) => el.addEventListener('click', () => {
    PM.currProFromId = el.dataset.projId;
    renderProjects(PM);
  }));
};

const updateTaskHeader = (PM) => {
  const taskHeader = document.querySelector('#taskHeader');
  let title;
  if (typeof PM.currPro === 'string') {
    title = PM.currPro;
  } else if (PM.currPro === undefined) {
    title = '';
  } else title = PM.currPro.projName;
  taskHeader.textContent = title;
};

const projDeleteEvents = (PM) => {
  const projDelBtn = document.querySelectorAll('.projectDeleteButton');
  projDelBtn.forEach((el) => el.addEventListener('click', () => {
    PM.deleteProject(el.parentElement.parentElement.dataset.projId);
    PM.currPro = undefined;
    renderProjects(PM);
  }));
};

const projEditButtonEvents = (pm) => {
  const projEditBtn = document.querySelectorAll('.projectEditButton');
  const editProjName = document.querySelector('#editProjName');
  projEditBtn.forEach((el) => el.addEventListener('click', () => {
    pm.currProFromId = el.parentElement.id;
    showProjEditForm(el, pm);
    useProjectPlaceholderName(editProjName);
  }));
};

function showProjEditForm(el, pm) {
  const projectSection = document.getElementById('projectList');
  el.parentElement.parentElement.classList.add('hidden');
  editProjectContainer.classList.add('visible');
  projectSection.insertBefore(editProjectContainer, el.parentElement.parentElement);
  pm.currProFromId = el.parentElement.parentElement.dataset.projId;
}

const useProjectPlaceholderName = (input) => {
  input.value = editProjectContainer.nextElementSibling.querySelector('.projElement').textContent;
};

const projEditSave = (pm) => {
  const editProjectForm = document.getElementById('editProjectForm');
  editProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    pm.renameProject(editProjName.value);
    // updateTaskHeader(editProjName.value);
    hideProjEditForm();
    renderProjects(pm);
  });
};

const projEditCancel = (pm) => {
  const editProjectCancelButton = document.getElementById('projectCancelButton');
  editProjectCancelButton.addEventListener('click', () => {
    editProjectContainer.classList.remove('visible');
    renderProjects(pm);
  });
};

const hideProjEditForm = () => {
  editProjectContainer.classList.remove('visible');
};

// renderTaskList
const renderTaskList = (pm) => {
  updateTaskHeader(pm);
  if (pm.currPro === undefined) return;
  renderTaskElements(pm);
  taskNoteEvents();
  isCompletedEvents(pm);
  taskDeleteEvents(pm);
};

const renderTaskElements = (pm) => {
  let tasks = pm.currentTaskArray();
  const taskSection = document.getElementById('taskList');
  for (let i = 0; i < tasks.length; i += 1) {
    taskSection.innerHTML += `<div data-task-id=${tasks[i].id} class='taskElement'>
      <div class='mainTaskContent'> 
        <div class='taskElementLeftSide'>
        <svg class='priorityIcon ${tasks[i].isPriority}' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M479.911-120Q451-120 430.5-140.589q-20.5-20.588-20.5-49.5Q410-219 430.589-239.5q20.588-20.5 49.5-20.5Q509-260 529.5-239.411q20.5 20.588 20.5 49.5Q550-161 529.411-140.5q-20.588 20.5-49.5 20.5ZM410-360v-480h140v480H410Z"/></svg>
          <button data-task-complete=${tasks[i].completed} data-task-id=${tasks[i].id} type='button'> </button>
          <h3> ${tasks[i].taskName} </h3>
        </div>
        <div class='taskElementRightSide'>
          <span>${tasks[i].dueDate}</span>
          <button data-task-edit =${tasks[i].id}>edit</button>
          <button class='taskDeleteButton'data-proj-id=${tasks[i].projId} data-task-id=${tasks[i].id}>delete</button>
        </div>
      </div>
      <p class='taskNote hidden' >${tasks[i].notes}</p>
      </div>`;
  }
};

const taskNoteEvents = () => {
  const taskElements = document.querySelectorAll('.taskElement');
  taskElements.forEach((el) => el.addEventListener('click', (e) => {
    e.stopPropagation();
    const taskNote = el.querySelector('p');
    if (taskNote.classList.contains('hidden')) {
      taskNote.classList.remove('hidden');
    } else taskNote.classList.add('hidden');
  }));
};

const isCompletedEvents = (pm) => {
  const isCompletedButtons = document.querySelectorAll('[data-task-complete]');
  isCompletedButtons.forEach((btn) => btn.addEventListener('click', (e) => {
    pm.findTaskById(btn.dataset.taskId).toggleCompleted();
    removeTasks();
    renderTaskList(pm);
  }));
};

const taskDeleteEvents = (pm) => {
  const taskDeleteButton = document.querySelectorAll('.taskDeleteButton');
  taskDeleteButton.forEach((btn) => btn.addEventListener('click', () => {
    pm.deleteTask(btn.dataset.projDelete, btn.dataset.taskDelete);
    pm.findProjectById(btn.dataset.projId).deleteTask(btn.dataset.taskId);
    removeTasks();
    renderTaskList(pm);
  }));
};

// global function
const renderProjects = (PM) => {
  removeProjects();
  removeTasks();
  renderProjectElements(PM);
  renderTaskList(PM);
};

export {
  renderProjects, renderTaskList, removeTasks, updateTaskHeader,
};
