import initPage from './init';
import {
  modalEventListeners, closeModal, clearProjectModal, clearTaskModal, isUniqueName,
} from './modals';
import { CreateTask, CreateProject, PM } from './newObjects';
import './normalize.css';
import './style.css';
import './modal.css';
import renderElements from './renderElements';

// initPage();
// modalEventListeners();
// renderPage()
//    import and run all the proj/task element events
//        proj: click el, edit, delete
//        task: click el, eidt, delete, completed
//    imports editModalEvents() and runs it each refresh
// navEvents()
//     need to run renderPage so has to load after that module
//     on click search projects, make a temp obj arg added into renderPage()
//    'all', 'today', 'next 7 days', 'high priority', 'completed
//    import renderPage()

const todo = (function () {
  const pm = PM();
  pm.addProject('Yard Work');
  const projId = pm.getStorage[0].id;
  pm.currPro = projId;
  pm.getStorage[0].addTask('Mow lawn', 'Don\'t forget to mow by the front yard maple', '6/25/23', false, false);
  pm.addProject('Shed Improvements');
  pm.getStorage[1].addTask('Build Workbench', 'Use scrapwood from under the shed.', '8/25/23', false, false);

  initPage();
  modalEventListeners();
  renderElements.renderPage(pm);

  // cache modal dom
  const projectModal = document.getElementById('project-modal');
  const projectForm = document.getElementById('project-form');
  const taskModal = document.getElementById('task-modal');
  const taskForm = document.getElementById('task-form');
  const editProjectCancelButton = document.getElementById('projectCancelButton');
  const editProjectForm = document.getElementById('editProjectForm');

  // render projects/tasks
  // const taskSection = document.getElementById('taskList');
  // const projectSection = document.getElementById('projectList');
  // renderElements.renderPage(projects, projectSection, currentProject, taskSection);

  // bind events
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isUniqueName(projectInput.value, projects)) {
      NewProject(projectInput.value, projects);
      closeModal(projectModal);
      clearProjectModal(projectForm);
      renderElements.renderPage(projects, projectSection, currentProject, taskSection);
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
      renderElements.renderPage(projects, taskSection);
    } else {
      console.log('That task name already exists!!');
    }
  });
}());

// search for 'all', 'today', 'next 7 days', 'high priority', 'completed
// display project name above task container
// add completed checkbox
// add completed task section

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

// const projects = {
//   Project1: {
//     'Submit Summer Schedule': {
//       notes: 'Include vaction dates and doctor appointments.',
//       dueDate: '5/30/23',
//       priority: true,
//       completed: false,
//     },
//     'Build Workbench': {
//       notes: 'Use Scrapwood from the cabin',
//       dueDate: '8/30/23',
//       priority: false,
//       completed: false,
//     },
//   },
//   'Another Test Project': {
//     'Eat 3800 avocados': {
//       notes: 'Become a round, rolling feller that can\'t be stopped.',
//       dueDate: '5/30/23',
//       priority: true,
//       completed: false,
//     },
//   },
//   'third one': {
//     'Say hi to spruce': {
//       notes: 'Don\'t forget to give him wet food',
//       dueDate: '9/30/23',
//       priority: false,
//       completed: false,
//     },
//   },
// };

// let currentProject = projects.Project1;
