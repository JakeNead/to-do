import renderProjects from './renderElements';

const modalEvents = (pm) => {
  // cache modal dom
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');
  const projectForm = document.getElementById('project-form');
  const taskForm = document.getElementById('task-form');

  const projectModal = document.getElementById('project-modal');
  const taskModal = document.getElementById('task-modal');
  // const editProjectCancelButton = document.getElementById('projectCancelButton');
  // const editProjectForm = document.getElementById('editProjectForm');

  openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

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

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (pm.isUniqueProject(projectInput.value)) {
      pm.addProject(projectInput.value);
      closeModal(projectModal);
      clearProjectModal(projectForm);
      renderProjects(pm);
    } else {
      console.log('That project name already exists!');
    }
  });

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isUniqueName(task.value, currentProject)) {
      currentProject[task.value] = NewTask(
        currentProject,
        task.value,
        description.value,
        date.value,
        priority.checked,
      );
      closeModal(taskModal);
      clearTaskModal(taskForm);
      render.renderPage(projects, taskSection);
    } else {
      console.log('That task name already exists!!');
    }
  });
};

//

// function closeModal(modal) {
//   if (modal == null) return;
//   modal.classList.remove('active');
//   overlay.classList.remove('active');
// }

function clearProjectModal(modal) {
  modal.projectInput.value = '';
}

function clearTaskModal(taskForm) {
  taskForm.task.value = '';
  taskForm.description.value = '';
  taskForm.date.value = '';
  taskForm.priority.checked = false;
}

function isUniqueName(value, obj) {
  const arr = [];
  Object.keys(obj).map((key) => arr.push(key.toLocaleLowerCase()));
  return !arr.includes(value.toLocaleLowerCase());
}

function hideEditProjectForm() {
  const editProjectCancelButton = document.getElementById('projectCancelButton');
  editProjectCancelButton.addEventListener('click', () => {
    editProjectForm.nextElementSibling.classList.remove('hidden');
    editProjectForm.classList.remove('visible');
  });
}

// save new project name
function editProjectFormEvents(projects) {
  const editProjectForm = document.getElementById('editProjectForm');
  // save button
  editProjectForm.addEventListener('submit', (e, projects, projectSection, currPro, taskSection) => {
    e.preventDefault();
    if (isUniqueName(editProjectInput.value, projects)) {
      // new key = old key
      projects[editProjectForm.querySelector('input').value] = projects[editProjectForm.nextElementSibling.querySelector('.projElement').textContent];
      delete projects[editProjectForm.nextElementSibling.querySelector('.projElement').textContent];
      hideEditProjectForm();
      renderProjects(projects, projectSection, currPro, taskSection);
      // edit the name in projects {}
      // change edit form class
      // change target project element class
    }
  });

  // cancel button
  const editProjectCancelButton = document.getElementById('projectCancelButton');
  editProjectCancelButton.addEventListener('click', () => {
  });
  hideEditProjectForm();
}

export {
  modalEvents,
  // closeModal,
  // clearTaskModal,
  // clearProjectModal,
  // isUniqueName,
  // editProjectFormEvents,
};

// or modals needs to import render elements as a callback?....

// the add proj/task buttons can be part of the modals .js
// they do need to call render on submit....

// 6/26 idea
// in index.js, pass renderPage(pm) as argument in modalEvents
// include renderPage to the modal events file
