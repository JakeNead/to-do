import { isUniqueName } from './modals';

const renderElements = (function () {
  const removeElements = () => {
    const elements = document.querySelectorAll('.projectElement, .taskElement');
    elements.forEach((el) => el.remove());
  };

  const createProjectElements = (projects) => {
    const projectSection = document.getElementById('projectList');
    const keys = Object.keys(projects);
    keys.forEach((key) => {
      projectSection.innerHTML += `<li class='projectElement'><span class='projElement'>${key}</span>
      <button class='projectEditButton'> Edit</button>
      <button class='projectDeleteButton'> Delete</button>
      </li>`;
    });
  };

  const createTaskElements = (currPro) => {
    if (currPro === null) return;
    const taskSection = document.getElementById('taskList');
    const keys = Object.keys(currPro);
    for (let i = 0; i < keys.length; i += 1) {
      taskSection.innerHTML += `<div class='${keys[i]} taskElement'>
    <span> ${keys[i]} </span>
    <span>${currPro[keys[i]].dueDate}</span>
    <button data-taskEdit ='${keys[i]} editTask'>edit</button>
    <button data-taskDelete ='${keys[i]} deleteTask'>delete</button>
    <p>${currPro[keys[i]].notes}</p>
    </div>`;
    }
  };

  const projectEvents = (projects, projectSection, currPro, taskSection) => {
    // select projects
    const projectElements = document.querySelectorAll('#projects li');
    projectElements.forEach((el) => el.addEventListener('click', () => {
      currPro = projects[el.firstChild.textContent];
      renderProjects(projects, projectSection, currPro, taskSection);
    }));

    // delete projects
    const projectDeleteButton = document.querySelectorAll('.projectDeleteButton');
    projectDeleteButton.forEach((el) => el.addEventListener('click', (e) => {
      deleteProjects(projects, e, el);
      renderProjects(projects, projectSection, currPro, taskSection);
    }));

    function deleteProjects(projects, e, el) {
      e.stopPropagation();
      delete projects[el.parentElement.firstChild.textContent];
      if (projects[el.parentElement.firstChild.textContent] === undefined) {
        if (Object.keys(projects).length === 0) {
          currPro = null;
        } else {
          currPro = projects[Object.keys(projects)[0]];
        }
      }
    }

    // edit projects
    const projectEditButton = document.querySelectorAll('.projectEditButton');
    projectEditButton.forEach((el) => el.addEventListener('click', (e) => {
      showProjEditForm(el, e, projectSection);
      useProjectPlaceholderName(editProjectForm);
      editProjSaveBtn(projects);
      editProjCancelBtn();
    }));
  };

  function showProjEditForm(el, e, projectSection) {
    e.stopPropagation();
    el.parentElement.classList.add('hidden');
    editProjectForm.classList.add('visible');
    projectSection.insertBefore(editProjectForm, el.parentElement);
  }

  function useProjectPlaceholderName(editProjectForm) {
    console.log(editProjectForm.nextElementSibling.querySelector('.projElement').textContent);
    editProjectInput.textContent = editProjectForm.nextElementSibling.querySelector('.projElement').textContent;
    // I think i need to modify the placeholder value instead of textContent here.
    // Good work today!!
  }

  function editProjCancelBtn() {
    const editProjectCancelButton = document.getElementById('projectCancelButton');
    editProjectCancelButton.addEventListener('click', () => {
      editProjectForm.nextElementSibling.classList.remove('hidden');
      editProjectForm.classList.remove('visible');
    });
  }

  // save projects
  function editProjSaveBtn(projects) {
    const editProjectForm = document.getElementById('editProjectForm');

    editProjectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (isUniqueName(editProjectInput.value, projects)) {
        console.log(editProjectForm.nextElementSibling.querySelector('.projElement').textContent);
        // projects[]
        // edit the name in projects {}
        // change edit form class
        // change taret project element class
      }
    });
  }

  // editProjectSaveButton.addEventListener('click', () => {
  //   console.log('save test');
  // });

  const renderProjects = (projects, projectSection, currPro, taskSection) => {
    removeElements();
    createProjectElements(projects);
    createTaskElements(currPro);
    projectEvents(projects, projectSection, currPro, taskSection);
  };

  return { renderProjects };
}());

export default renderElements;
