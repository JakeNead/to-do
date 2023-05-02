import initPage from './init';
import modalEventListeners from './modals';
import newProject from './newProject';
import newTask from './newTask';
import './normalize.css';
import './style.css';
import './modal.css';

initPage();
modalEventListeners();

const projects = {
  'Sample Project': {
    taskName: 'Submit summer schedule',
    notes: 'Include vaction dates and doctor appointments.',
    dueDate: '5/30/23',
    priority: true,
    completed: false,
  },
};

// search for 'all', 'today', 'next 7 days', 'high priority'

// checkbox
// task name
// notes
// due Date
// priority
// edit button
// delete button
// completed section
