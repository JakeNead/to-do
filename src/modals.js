import { renderProjects } from './renderElements';

const modalEvents = (pm) => {
  const addTaskButton = document.querySelector('#add-task');
  const addProjectButton = document.querySelector('#add-project');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');
  const projectForm = document.getElementById('project-form');
  const taskForm = document.getElementById('task-form');
  const projectModal = document.getElementById('project-modal');
  const taskModal = document.getElementById('task-modal');
  const selectElement = document.querySelector('[name=projectName]');

  addProjectButton.addEventListener('click', () => {
    openModal(document.querySelector('#project-modal'));
  });

  addTaskButton.addEventListener('click', () => {
    openModal(document.querySelector('#task-modal'));
    clearProjectOptions();
    displayProjectOptions(pm.projectNameArray);
  });

  function clearProjectOptions() {
    while (selectElement.firstChild) {
      selectElement.removeChild(selectElement.firstChild);
    }
  }

  function displayProjectOptions(nameArray) {
    const selectElement = document.querySelector('[name=projectName]');
    for (let i = 0; i < nameArray.length; i += 1) {
      const option = document.createElement('option');
      option.textContent = nameArray[i];
      option.setAttribute('value', nameArray[i]);
      option.setAttribute('id', nameArray[i]);
      selectElement.appendChild(option);
    }
  }

  // open/close modals
  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
    });
  });

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }

  console.log(document.querySelector('#project-form'));

  // add new project
  projectForm.addEventListener('submit', addNewProject);

  function addNewProject(e) {
    e.preventDefault();
    if (pm.isUniqueProject(projectInput.value)) {
      pm.addProject(projectInput.value);
      closeModal(projectModal);
      clearProjectModal(projectForm);
      renderProjects(pm);
    } else {
      console.log('That project name already exists!');
    }
  }

  // add new task
  taskForm.addEventListener('submit', addNewTask);

  function addNewTask(e) {
    e.preventDefault();
    const projObj = pm.findProject(projectName.value);
    if (projObj.isUniqueTask(task.value)) {
      projObj.addTask(
        task.value,
        description.value,
        date.value,
        priority.checked,
        projectName.value,
      );
      closeModal(taskModal);
      clearTaskModal(taskForm);
      renderProjects(pm);
    } else {
      console.log('That task name already exists!!');
    }
  }
};

function clearProjectModal(modal) {
  modal.projectInput.value = '';
}

function clearTaskModal(taskForm) {
  taskForm.task.value = '';
  taskForm.description.value = '';
  taskForm.date.value = '';
  taskForm.priority.checked = false;
}

export default modalEvents;
