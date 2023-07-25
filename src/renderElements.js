// remove Elements
const removeProjects = () => {
  const elements = document.querySelectorAll('.projectElement');
  elements.forEach((el) => el.remove());
};

const removeTasks = () => {
  const elements = document.querySelectorAll('.taskElement');
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
    projectSection.innerHTML += `<li class='projectElement' id=${item.id}><span class='projElement' data-proj-id=${item.id}>${item.projName}</span>
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
  }));
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
    /// work on the useProjectPlaceholderName function
    // need to access the project element id to insert placeholder name
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
  editProjectCancelButton.addEventListener('click', (e) => {
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
  projectSection.insertBefore(editProjectContainer, el.parentElement);
}
function useProjectPlaceholderName(input) {
  input.value = editProjectContainer.nextElementSibling.querySelector('.projElement').textContent;
}

// renderTaskElements
const renderTaskElements = (currPro) => {
  if (currPro === undefined) return;
  let tasks = (Array.isArray(currPro) ? currPro : currPro.taskList);
  const taskSection = document.getElementById('taskList');
  for (let i = 0; i < tasks.length; i += 1) {
    taskSection.innerHTML += `<div class='${tasks[i].id} taskElement'>
      <span> ${tasks[i].taskName} </span>
      <span>${tasks[i].dueDate}</span>
      <button data-taskEdit ='${tasks[i].id} editTask'>edit</button>
      <button data-taskDelete ='${tasks[i].id} deleteTask'>delete</button>
      <p>${tasks[i].notes}</p>
      </div>`;
  }
};

// global function
const renderProjects = (PM) => {
  removeProjects();
  removeTasks();
  renderProjectElements(PM);
  renderTaskElements(PM.currPro);
};

export { renderProjects, renderTaskElements, removeTasks };
