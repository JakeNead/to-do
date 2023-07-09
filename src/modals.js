import renderProjects from './renderElements';

const modalEvents = (pm) => {
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');
  const projectForm = document.getElementById('project-form');
  const taskForm = document.getElementById('task-form');
  const projectModal = document.getElementById('project-modal');
  const taskModal = document.getElementById('task-modal');

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
    if (pm.currPro.isUniqueTask(task.value)) {
      pm.currPro.addTask(
        task.value,
        description.value,
        date.value,
        priority.checked,
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

// // save new project name
// function editProjectFormEvents(projects) {
//   const editProjectForm = document.getElementById('editProjectForm');
//   // save button
//   editProjectForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(e);
//     if (isUniqueName(editProjectInput.value, projects)) {
//     // new key = old key
//       projects[editProjectForm.querySelector('input').value] = projects[editProjectForm.nextElementSibling.querySelector('.projElement').textContent];
//       delete projects[editProjectForm.nextElementSibling.querySelector('.projElement').textContent];
//       hideEditProjectForm();
//       renderProjects(pm);
//     // edit the name in projects {}
//     // change edit form class
//     // change target project element class
//     }
//   });
// }

// // cancel button
// const editProjectCancelButton = document.getElementById('projectCancelButton');
// editProjectCancelButton.addEventListener('click', () => {
// });
// hideEditProjectForm();
