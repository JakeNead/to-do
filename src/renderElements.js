const renderElements = (function () {
  const projectSection = document.getElementById('projects');
  const taskSection = document.getElementById('taskList');

  const removeChildElements = (parent) => {
    while (parent.hasChildNodes()) {
      parent.removeChild(parent.firstChild);
    }
  };
  const createProjectElements = (projects) => {
    const keys = Object.keys(projects);
    keys.forEach((key) => {
      projectSection.innerHTML += `<li class='projElement'>${key}</li>`;
    });
  };

  const createTaskElements = (currPro) => {
    const keys = Object.keys(currPro);
    for (let i = 0; i < keys.length; i += 1) {
      taskSection.innerHTML += `<div class = '${keys[i]}'>
    <span> ${keys[i]} </span>
    <span>${currPro[keys[i]].dueDate}</span>
    <button data-taskEdit ='${keys[i]} editTask'>edit</button>
    <button data-taskDelete ='${keys[i]} deleteTask'>delete</button>
    <p>${currPro[keys[i]].notes}</p>
    </div>`;
    }
  };

  // (() => {
  // const deleteBtn = document.querySelectorAll('data-taskDelete');
  // const editBtn = document.querySelectorAll('data-taskEdit');
  // const projElements = document.querySelectorAll('projElement');

  //   return {
  //     deleteBtn, editBtn, projElements,
  //   };

  // function deleteTask(project, el) {
  //   if (confirm('Are you sure you want to permanently delete this task?')) {
  //     const task = el.dataset.taskDelete;
  //     delete project[task];
  //   }
  // }

  const displayProjects = (projects) => {
    console.log(document.getElementById('projects').hasChildNodes());
    removeChildElements(projectSection);
    createProjectElements(projects);
  };
  const displayTasks = () => {
    removeChildElements(taskSection);
    createTaskElements();
  };
  return { displayProjects, displayTasks };
}());

// function removeChildElements(parent) {
//   while (parent.hasChildNodes()) {
//     parent.removeChild(parent.firstChild);
//   }
// }

// function renderProjects(projects, projectSection) {
//   removeChildElements(projectSection);
//   const keys = Object.keys(projects);
//   keys.forEach((key) => {
//     projectSection.innerHTML += `<li class='projElement'>${key}</li>`;
//   });
// }

// function renderTasks(currPro, taskSection) {
//   removeChildElements(taskSection);
//   const keys = Object.keys(currPro);
//   for (let i = 0; i < keys.length; i += 1) {
//     taskSection.innerHTML += `<div class = '${keys[i]}'>
//     <span> ${keys[i]} </span>
//     <span>${currPro[keys[i]].dueDate}</span>
//     <button data-taskEdit ='${keys[i]} editTask'>edit</button>
//     <button data-taskDelete ='${keys[i]} deleteTask'>delete</button>
//     <p>${currPro[keys[i]].notes}</p>
//     </div>`;
//   }
// }

// function renderedDOMCache() {
//   const deleteBtn = document.querySelectorAll('data-taskDelete');
//   const editBtn = document.querySelectorAll('data-taskEdit');
//   const projElements = document.querySelectorAll('projElement');
//   const taskSection = document.getElementById('taskList');
//   const projectSection = document.getElementById('projects');
//   return {
//     deleteBtn, editBtn, projElements, taskSection, projectSection,
//   };
// }

// function editTask(task) {
// // open modal
// // populate modal with object values
// }

// function deleteTask(project, el) {
//   if (confirm('Are you sure you want to permanently delete this task?')) {
//     const task = el.dataset.taskDelete; nmjj;
//     delete project[task];
//   }
// }

// deleteBtn.addEventListener('click', (el) => {
//   const task = el.closest('div').getAttribute('class', 1);
//   delete projects[task];
// });

// export {
//   renderProjects, renderTasks, editTask, deleteTask, renderedDOMCache,
// };

export default renderElements;
