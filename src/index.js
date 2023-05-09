import initPage from './init';
import modalEventListeners from './modals';
import newProject from './newProject';
import newTask from './newTask';
import './normalize.css';
import './style.css';
import './modal.css';

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

  initPage();
  modalEventListeners();

  // cache dom
  const projectForm = document.getElementById('project-form');
  const taskForm = document.getElementById('task-form');

  // bind events
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newProject(projectInput.value).bind(todo);
    // projects[projectInput.value] = {};
    console.log(projects);
  });

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newTask(taskForm.value);
  });

  return { projects };
  // submit new project
  // render the projects nav bar
  // render the selected project's tasks

//   function isRepeatProject(projectName) {
//     const nameArray = Object.keys(projects);
//     for (let i = 0; i < nameArray.length; i++) {
//       if (nameArray[i].toLowerCase() === projectName.toLowerCase()) {
//         return console.log('That name already exists!');
//       }
//     }
//     return projectName;
//   }
}());

console.log(todo.projects);

// search for 'all', 'today', 'next 7 days', 'high priority'

// checkbox
// task name
// notes
// due Date
// priority
// edit button
// delete button
// completed section

// create a factory function that creates a project and adds tasks as methods.

// new factory function to try out

// const project = function () {
//   function newTask(project, taskName, notes, dueDate, isPriority, completed = false) {
//     return {
//       taskName,
//       notes,
//       dueDate,
//       isPriority,
//       completed,
//     };
//   }
// };
