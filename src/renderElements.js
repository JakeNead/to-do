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
    <li class='projectElement' id=${item.id}>
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
    PM.currProId = el.dataset.projId;
    renderProjects(PM);
    updateTaskHeader(el.textContent);
  }));
};

const updateTaskHeader = (title) => {
  const taskHeader = document.querySelector('#taskHeader');
  taskHeader.textContent = title;
};

const projDeleteEvents = (PM) => {
  const projDelBtn = document.querySelectorAll('.projectDeleteButton');
  projDelBtn.forEach((el) => el.addEventListener('click', () => {
    PM.deleteProject(el.parentElement.id);
    renderProjects(PM);
  }));
};

const projEditButtonEvents = (pm) => {
  const projEditBtn = document.querySelectorAll('.projectEditButton');
  const editProjName = document.querySelector('#editProjName');
  projEditBtn.forEach((el) => el.addEventListener('click', () => {
    pm.currProId = el.parentElement.id;
    showProjEditForm(el);
    useProjectPlaceholderName(editProjName);
  }));
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

function showProjEditForm(el) {
  const projectSection = document.getElementById('projectList');
  el.parentElement.classList.add('hidden');
  editProjectContainer.classList.add('visible');
  projectSection.insertBefore(editProjectContainer, el.parentElement.parentElement);
}
function useProjectPlaceholderName(input) {
  input.value = editProjectContainer.nextElementSibling.querySelector('.projElement').textContent;
}

// renderTaskList
const renderTaskList = (currPro, pm) => {
  if (currPro === undefined) return;
  renderTaskElements(currPro);
  taskNoteEvents();
  isCompletedEvents(pm);
  console.log(currPro);
  console.log(pm);
};

const renderTaskElements = (currPro) => {
  let tasks = (Array.isArray(currPro) ? currPro : currPro.taskList);
  const taskSection = document.getElementById('taskList');
  for (let i = 0; i < tasks.length; i += 1) {
    taskSection.innerHTML += `<div data-task-id='${tasks[i].id} taskElement'>
      <div class='mainTaskContent'> 
        <div class='taskElementLeftSide'>
          <button data-task-complete=${tasks[i].completed} data-task-id=${tasks[i].id} type='button'> </button>
          <h3> ${tasks[i].taskName} </h3>
        </div>
        <div class='taskElementRightSide'>
          <span>${tasks[i].dueDate}</span>
          <button data-taskEdit ='${tasks[i].id} editTask'>edit</button>
          <button data-taskDelete ='${tasks[i].id} deleteTask'>delete</button>
        </div>
      </div>
      <p class='taskNote hidden' >${tasks[i].notes}</p>
      </div>`;
  }
};

const taskNoteEvents = () => {
  console.log('taskNoteEvents');
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
    // create toggleTaskComplete method that passes task id as argument
    renderTaskList();
    console.log(pm.findTaskById(btn.dataset.taskId).completed);
  }));
};

// global function
const renderProjects = (PM) => {
  removeProjects();
  removeTasks();
  renderProjectElements(PM);
  renderTaskList(PM.currPro, PM);
};

export {
  renderProjects, renderTaskList, removeTasks, updateTaskHeader,
};

// currently renderTaskList uses the currPro method to return the current project object.

// isCompletedEvents needs to be able to pass the current task list to renderTaskList

// Refactor renderTaskList to only accept a task list!
// or...
// Refactor renderTaskList to accept a project object or tasklist

// bug with insertBefore
