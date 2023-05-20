import initPage from './init';
import {
  modalEventListeners, closeModal, clearProjectModal, clearTaskModal, isUniqueName,
} from './modals';
// import newProject from './newProject';
import { NewProject, NewTask } from './newObjects';
import './normalize.css';
import './style.css';
import './modal.css';
import { renderProjects, renderTasks, removeChildElements } from './renderElements';

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

  // cache dom
  const projectModal = document.getElementById('project-modal');
  const projectForm = document.getElementById('project-form');
  const taskModal = document.getElementById('task-modal');
  const taskForm = document.getElementById('task-form');
  const projectSection = document.getElementById('projects');
  const taskSection = document.getElementById('taskList');

  renderProjects(projects, projectSection);
  renderTasks(currentProject, taskSection);

  // bind events
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isUniqueName(projectInput.value, projects)) {
      NewProject(projectInput.value, projects);
      closeModal(projectModal);
      clearProjectModal(projectForm);
      removeChildElements(projectSection);
      renderProjects(projects, projectSection);
    } else {
      console.log('That project name already exists!');
    }
  });

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isUniqueName(task.value, currentProject)) {
      currentProject[task.value] = NewTask(
        projects,
        currentProject,
        task.value,
        description.value,
        date.value,
        priority.checked,
      );
      closeModal(taskModal);
      clearTaskModal(taskForm);
      removeChildElements(taskSection);
      renderTasks(currentProject, taskSection);
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

// submit new project
// render the projects nav bar
// render the selected project's tasks
// search for 'all', 'today', 'next 7 days', 'high priority'

// checkbox
// task name
// notes
// due Date
// priority
// edit button
// delete button
// completed section
