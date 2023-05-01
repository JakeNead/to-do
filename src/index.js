import initPage from './init';
import modalEventListeners from './modals';
import taskFactory from './taskFactory';
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
// let projects = {
//     "test project": {
//         taskName: 'laundry'
//         notes: 'Set size to medium'
//     }
// }

// search for 'all', 'today', 'next 7 days', 'high priority'

// checkbox
// task name
// notes
// due Date
// priority
// edit button
// delete button
// completed section
