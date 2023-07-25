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
pm.getStorage[0].addTask('Mow lawn', 'Don\'t forget to mow by the front yard maple', '2023-06-25', false, false);
pm.addProject('Shed Improvements');
pm.getStorage[1].addTask('Build Workbench', 'Use scrapwood from under the shed.', '2023-07-24', false, false);

initPage();
taskFilters(pm);
modalEvents(pm);
renderProjects(pm);

// convert date format on addTask submit and editTask
// need is today, less than 7 days functions

// search for 'all', 'today', 'next 7 days', 'high priority'
// display project name above task container
// add completed checkbox
// add edit/delete task functionality
// add completed task section?
