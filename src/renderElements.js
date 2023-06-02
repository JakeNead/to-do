const renderElements = (function () {
  const removeChildElements = (parent) => {
    while (parent.hasChildNodes()) {
      parent.removeChild(parent.firstChild);
    }
  };
  const createProjectElements = (projects) => {
    const projectSection = document.getElementById('projects');
    const keys = Object.keys(projects);
    keys.forEach((key) => {
      projectSection.innerHTML += `<li><span class='projElement'>${key}</span>
      <button class='projectEditButton'> Edit</button>
      <button class='projectDeleteButton'> Delete</button>
      </li>`;
    });
  };

  const createTaskElements = (currPro) => {
    const taskSection = document.getElementById('taskList');
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

  const projectEvents = (projects, projectSection, currPro, taskSection) => {
    // delete projects
    const projectDeleteButton = document.querySelectorAll('.projectDeleteButton');
    projectDeleteButton.forEach((el) => el.addEventListener('click', (e) => {
      e.stopPropagation();
      delete projects[el.parentElement.firstChild.textContent];
      if (projects[el.parentElement.firstChild.textContent] === undefined) {
        if (Object.keys(projects).length === 0) {
          currPro = null;
        } else {
          currPro = projects[Object.keys(projects)[0]];
        }
      }
      renderProjects(projects, projectSection, currPro, taskSection);
    }));

    // select projects
    const projectElements = document.querySelectorAll('#projects li');
    projectElements.forEach((el) => el.addEventListener('click', () => {
      currPro = projects[el.firstChild.textContent];
      renderProjects(projects, projectSection, currPro, taskSection);
    }));
  };

  const renderProjects = (projects, projectSection, currPro, taskSection) => {
    removeChildElements(projectSection);
    removeChildElements(taskSection);
    createProjectElements(projects);
    createTaskElements(currPro);
    projectEvents(projects, projectSection, currPro, taskSection);
  };

  return { renderProjects };
}());

export default renderElements;

// function deleteTask(project, el) {
//   if (confirm('Are you sure you want to permanently delete this task?')) {
//     const task = el.dataset.taskDelete;
//     delete project[task];
//   }
// }
// (() => {
// const deleteBtn = document.querySelectorAll('data-taskDelete');
// const editBtn = document.querySelectorAll('data-taskEdit');
// const projElements = document.querySelectorAll('projElement');

//   return {
//     deleteBtn, editBtn, projElements,
//   };

// click event on projects to display correct tasks
// delete task buttons
// edit buttons
