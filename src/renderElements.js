import { format } from 'date-fns';
import { updateLocalStorage } from './localStorage';

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
        <button title="Edit" class='projectEditButton'> <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 40 40"><path d="M7.792 39.5q-1.125 0-1.959-.833Q5 37.833 5 36.708V12.292q0-1.125.833-1.959.834-.833 1.959-.833H24l-2.792 2.792H7.792v24.416h24.416v-13.5L35 20.417v16.291q0 1.125-.833 1.959-.834.833-1.959.833ZM20 24.5Zm7.375-14.458 2 1.958-11.583 11.542v3.166h3.125l11.625-11.625 1.958 1.959L22.083 29.5H15v-7.083Zm7.125 7-7.125-7 4.167-4.167q.791-.792 1.958-.792 1.167 0 2 .834l3.083 3.125q.792.833.792 1.979 0 1.146-.792 1.937Z"/></svg></button>
        <button title='Delete' class='projectDeleteButton'> <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 40 40"><path d="M11.125 35Q10 35 9.188 34.167q-.813-.834-.813-1.959V9.167H6.667V6.375h8V5h10.666v1.375h8v2.792h-1.708v23.041q0 1.125-.813 1.959Q30 35 28.875 35Zm17.75-25.833h-17.75v23.041h17.75ZM15.208 28.708h2.75V12.625h-2.75Zm6.834 0h2.75V12.625h-2.75ZM11.125 9.167v23.041Z"/></svg></button>
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
    // pm.currProFromId = el.parentElement.id;
    removeProjHiddenAttr();
    showProjEditForm(el, pm);
    useProjectPlaceholderName(editProjName);
  }));
};

const removeProjHiddenAttr = () => {
  const projEls = document.querySelectorAll('.projectElement');
  projEls.forEach((el) => { el.classList.remove('hidden'); });
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
  const editTaskForm = document.querySelector('#editTaskForm');
  updateTaskHeader(pm);
  if (pm.currPro === undefined) return;
  removeTasks();
  renderTaskElements(pm);
  taskNoteEvents();
  isCompletedEvents(pm);
  taskDeleteEvents(pm);
  taskEditButtonEvents(pm);
  taskEditSave(pm);
  taskEditCancel(pm);
};

const renderTaskElements = (pm) => {
  let tasks = pm.currentTaskArray();
  let completedTasks = pm.currentCompletedTaskArray();
  const taskSection = document.getElementById('taskList');
  for (let i = 0; i < tasks.length; i += 1) {
    taskSection.innerHTML += `<div data-task-id=${tasks[i].id} class='taskElement'>
      <div class='mainTaskContent'> 
        <div class='taskElementLeftSide'>
        <svg class='priorityIcon ${tasks[i].isPriority}' xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 40 40" width="40"><path d="M479.911-120Q451-120 430.5-140.589q-20.5-20.588-20.5-49.5Q410-219 430.589-239.5q20.588-20.5 49.5-20.5Q509-260 529.5-239.411q20.5 20.588 20.5 49.5Q550-161 529.411-140.5q-20.588 20.5-49.5 20.5ZM410-360v-480h140v480H410Z"/></svg>
          <button data-task-complete=${tasks[i].completed} data-task-id=${tasks[i].id} type='button'> </button>
          <h3> ${tasks[i].taskName} </h3>
        </div>
        <div class='taskElementRightSide'>
          <span>${tasks[i].dueDate}</span>
          <button class='taskEditButton'data-task-edit =${tasks[i].id}><svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 40 40"><path d="M7.792 39.5q-1.125 0-1.959-.833Q5 37.833 5 36.708V12.292q0-1.125.833-1.959.834-.833 1.959-.833H24l-2.792 2.792H7.792v24.416h24.416v-13.5L35 20.417v16.291q0 1.125-.833 1.959-.834.833-1.959.833ZM20 24.5Zm7.375-14.458 2 1.958-11.583 11.542v3.166h3.125l11.625-11.625 1.958 1.959L22.083 29.5H15v-7.083Zm7.125 7-7.125-7 4.167-4.167q.791-.792 1.958-.792 1.167 0 2 .834l3.083 3.125q.792.833.792 1.979 0 1.146-.792 1.937Z"/></svg></button>
          <button class='taskDeleteButton' data-proj-id=${tasks[i].projId} data-task-id=${tasks[i].id}><svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 40 40"><path d="M11.125 35Q10 35 9.188 34.167q-.813-.834-.813-1.959V9.167H6.667V6.375h8V5h10.666v1.375h8v2.792h-1.708v23.041q0 1.125-.813 1.959Q30 35 28.875 35Zm17.75-25.833h-17.75v23.041h17.75ZM15.208 28.708h2.75V12.625h-2.75Zm6.834 0h2.75V12.625h-2.75ZM11.125 9.167v23.041Z"/></svg></button>
        </div>
      </div>
      <p class='taskNote hidden' >${tasks[i].notes}</p>
      </div>`;
  }
  const completedTaskSection = document.getElementById('completedTaskList');
  for (let i = 0; i < completedTasks.length; i += 1) {
    completedTaskSection.innerHTML += `<div data-task-id=${completedTasks[i].id} class='taskElement completedTaskElement'>
      <div class='mainTaskContent'> 
        <div class='taskElementLeftSide'>
        <svg class='priorityIcon ${completedTasks[i].isPriority}' xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 40 40" width="40"><path d="M479.911-120Q451-120 430.5-140.589q-20.5-20.588-20.5-49.5Q410-219 430.589-239.5q20.588-20.5 49.5-20.5Q509-260 529.5-239.411q20.5 20.588 20.5 49.5Q550-161 529.411-140.5q-20.588 20.5-49.5 20.5ZM410-360v-480h140v480H410Z"/></svg>
          <button data-task-complete=${completedTasks[i].completed} data-task-id=${completedTasks[i].id} type='button'> </button>
          <h3 class='completed'> ${completedTasks[i].taskName} </h3>
        </div>
        <div class='taskElementRightSide'>
          <span class='completed'>${completedTasks[i].dueDate}</span>
          <button class='taskEditButton'data-task-edit =${completedTasks[i].id}><svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 40 40"><path d="M7.792 39.5q-1.125 0-1.959-.833Q5 37.833 5 36.708V12.292q0-1.125.833-1.959.834-.833 1.959-.833H24l-2.792 2.792H7.792v24.416h24.416v-13.5L35 20.417v16.291q0 1.125-.833 1.959-.834.833-1.959.833ZM20 24.5Zm7.375-14.458 2 1.958-11.583 11.542v3.166h3.125l11.625-11.625 1.958 1.959L22.083 29.5H15v-7.083Zm7.125 7-7.125-7 4.167-4.167q.791-.792 1.958-.792 1.167 0 2 .834l3.083 3.125q.792.833.792 1.979 0 1.146-.792 1.937Z"/></svg></button>
          <button class='taskDeleteButton' data-proj-id=${completedTasks[i].projId} data-task-id=${completedTasks[i].id}><svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 40 40"><path d="M11.125 35Q10 35 9.188 34.167q-.813-.834-.813-1.959V9.167H6.667V6.375h8V5h10.666v1.375h8v2.792h-1.708v23.041q0 1.125-.813 1.959Q30 35 28.875 35Zm17.75-25.833h-17.75v23.041h17.75ZM15.208 28.708h2.75V12.625h-2.75Zm6.834 0h2.75V12.625h-2.75ZM11.125 9.167v23.041Z"/></svg></button>
        </div>
      </div>
      <p class='taskNote hidden completed' >${completedTasks[i].notes}</p>
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
    updateLocalStorage(pm);
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

const taskEditButtonEvents = (pm) => {
  const taskEditBtn = document.querySelectorAll('.taskEditButton');
  taskEditBtn.forEach((el) => el.addEventListener('click', () => {
    removeTaskHiddenAttr();
    showTaskEditForm(el, pm);
    useTaskPlaceholderNames(el, pm);
  }));
};

const removeTaskHiddenAttr = () => {
  const taskEls = document.querySelectorAll('.taskElement');
  taskEls.forEach((el) => { el.classList.remove('hidden'); });
};

function showTaskEditForm(el) {
  const taskSection = document.getElementById('taskList');
  el.closest('.taskElement').classList.add('hidden');
  editTaskForm.classList.add('visible');
  taskSection.insertBefore(editTaskForm, el.closest('.taskElement'));
}

const useTaskPlaceholderNames = (el, pm) => {
  const task = pm.findTaskById(el.closest('.taskElement').dataset.taskId);

  const editTaskName = document.querySelector('#newTask');
  editTaskName.value = task.taskName;

  const editTaskNotes = document.querySelector('#newNotes');
  editTaskNotes.value = task.notes;

  const editTaskDate = document.querySelector('#newDate');
  editTaskDate.value = format(task.dueDateObj, 'yyyy MM dd').replace(/ /g, '-');

  const editTaskPriority = document.querySelector('#newPriority');
  editTaskPriority.checked = task.isPriority;
};

const taskEditSave = (pm) => {
  const editTaskForm = document.getElementById('editTaskForm');
  editTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    editTaskForm.classList.remove('visible');
    const task = pm.findTaskById(editTaskForm.nextElementSibling.dataset.taskId);
    console.log(newPriority.checked);
    task.taskName = newTask.value;
    task.notes = newNotes.value;
    task.dueDate = newDate.value;
    task.isPriority = newPriority.checked;
    renderTaskList(pm);
  });
};

const taskEditCancel = (pm) => {
  const editTaskCancelButton = document.getElementById('editTaskCancelButton');
  editTaskCancelButton.addEventListener('click', () => {
    editTaskForm.classList.remove('visible');
    renderTaskList(pm);
  });
};

// global function
const renderProjects = (PM) => {
  removeProjects();
  removeTasks();
  renderProjectElements(PM);
  renderTaskList(PM);
  updateLocalStorage(PM);
};

export {
  renderProjects, renderTaskList, removeTasks, updateTaskHeader,
};
