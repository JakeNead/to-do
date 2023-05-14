const modalEventListeners = () => {
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');

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

  //   function clearTaskModal(taskForm) {
  //     taskForm.task.value = '';
  //     taskForm.description.value = '';
  //     taskForm.date.value = '';
  //     taskForm.priority.checked = false;
  //     // closeModal();
  //   }
};

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
function clearProjectModal(modal) {
  modal.projectInput.value = '';
}
function clearTaskModal(taskForm) {
  taskForm.task.value = '';
  taskForm.description.value = '';
  taskForm.date.value = '';
  taskForm.priority.checked = false;
  // closeModal();
}

export {
  modalEventListeners, closeModal, clearTaskModal, clearProjectModal,
};
