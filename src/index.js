import initPage from './init';
import modalEvents from './modals';
import PM from './newObjects';
import './normalize.css';
import './style.css';
import './modal.css';
import { renderProjects } from './renderElements';
import taskFilters from './taskFilters';

const pm = PM();

// test projects/tasks
pm.addProject('Yard Work');
pm.getStorage[0].addTask('Mow lawn', 'Don\'t forget to mow by the front yard maple', '2023-07-25', false, false);
pm.getStorage[0].addTask('Bag Leaves', 'Borrow Frodo\'s rake.', '2023-06-20', false, false);
pm.getStorage[0].addTask('Fight off the Ant Lions', 'Don\'t step on the ground...', '2023-07-28', false, false);
pm.addProject('Shed Improvements');
pm.getStorage[1].addTask('Build Workbench', 'Use scrapwood from under the shed.', '2023-07-24', false, false);

initPage();
taskFilters(pm);
modalEvents(pm);
renderProjects(pm);

// could move renderTask conditionals to PM
// edit task functionality
// local storage
// completed task section?
