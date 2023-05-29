import initPage from './init';
import {
  modalEventListeners, closeModal, clearProjectModal, clearTaskModal, isUniqueName,
} from './modals';
import { NewProject, NewTask } from './newObjects';
import './normalize.css';
import './style.css';
import './modal.css';
import renderElements from './renderElements';

const todo = (function () {
  const projects = {
    'Sample Project1': {
      'Sample Task1': {
        taskName: 'Submit summer schedule',
        notes: 'Include vaction dates and doctor appointments.',
        dueDate: '5/30/23',
        priority: true,
        completed: false,
      },
      'Sample Task2': {
        taskName: 'Build Workbench',
        notes: 'Use Scrapwood from the cabin',
        dueDate: '8/30/23',
        priority: false,
        completed: false,
      },
    },
    'Sample Project2': {
      'Sample Task': {
        taskName: 'Submit summer schedule',
        notes: 'Include vaction dates and doctor appointments.',
        dueDate: '5/30/23',
        priority: true,
        completed: false,
      },
    },
  };

  const currentProject = projects['Sample Project1'];

  initPage();
  modalEventListeners();

  // cache modal dom
  const projectModal = document.getElementById('project-modal');
  const projectForm = document.getElementById('project-form');
  const taskModal = document.getElementById('task-modal');
  const taskForm = document.getElementById('task-form');

  // render projects/tasks
  const taskSection = document.getElementById('taskList');
  const projectSection = document.getElementById('projects');
  renderElements.renderProjects(projects, projectSection);
  renderElements.renderTasks(currentProject, taskSection);

  // bind events
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isUniqueName(projectInput.value, projects)) {
      NewProject(projectInput.value, projects);
      closeModal(projectModal);
      clearProjectModal(projectForm);
      renderElements.renderProjects(projects, projectSection);
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
      renderElements.renderTasks(currentProject, taskSection);
    } else {
      console.log('That task name already exists!!');
    }
  });

//   projectSelect.addEventListener('click', (proj) => {
//     // assign current project variable to click
//     // render tasks
//     // highlight selected project
//   });
}());

// checkbox
// task name
// notes
// due Date
// priority
// edit button
// delete button
// completed section

// bundle render functions in one module
// add click event for all projects to change currentProject
// search for 'all', 'today', 'next 7 days', 'high priority'
// display project name above task container

// when a change to projects {} occurs.....
//     clear proj/task container
//     render proj/task elements
//     cache the rendered DOM
//     add event listeners to the
//          proj elements(to render tasks and highlight currProj)
//          proj delete button
//          proj edit button
//          task delete button
//          task edit button
//          task element completed?

//   project variable runs:
//      clear proj container
//      render proj elements
//      cache proj dom
//      proj event listeners
//          edit/delete

//   task variable runs:
//      clear task container
//      render task elements
//      cache task dom
//      task event listeners
//          edit/delete/completed
