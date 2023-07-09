import initPage from './init';
import modalEvents from './modals';
import PM from './newObjects';
import './normalize.css';
import './style.css';
import './modal.css';
import renderProjects from './renderElements';

const todo = (function () {
  const pm = PM();

  // test projects/tasks
  pm.addProject('Yard Work');
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
