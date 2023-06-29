import initPage from './init';
import {
  modalEvents, closeModal, clearProjectModal, clearTaskModal, isUniqueName,
} from './modals';
import { CreateTask, CreateProject, PM } from './newObjects';
import './normalize.css';
import './style.css';
import './modal.css';
import renderProjects from './renderElements';

const todo = (function () {
  const pm = PM();

  // add some test projects/tasks
  pm.addProject('Yard Work');
  const projId = pm.getStorage[0].id;
  pm.currProId = projId;
  pm.getStorage[0].addTask('Mow lawn', 'Don\'t forget to mow by the front yard maple', '6/25/23', false, false);
  pm.addProject('Shed Improvements');
  pm.getStorage[1].addTask('Build Workbench', 'Use scrapwood from under the shed.', '8/25/23', false, false);

  initPage();
  modalEvents(pm);
  renderProjects(pm);
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
