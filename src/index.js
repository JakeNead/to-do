import initPage from './init';
import {
  modalEventListeners, closeModal, clearProjectModal, clearTaskModal,
} from './modals';
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

  const currentProject = 'Sample Project1';

  initPage();
  modalEventListeners();

  // cache dom
  const projectModal = document.getElementById('project-modal');
  const projectForm = document.getElementById('project-form');
  const taskModal = document.getElementById('task-modal');
  const taskForm = document.getElementById('task-form');

  // bind events
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newProject(projectInput.value, projects);
    closeModal(projectModal);
    clearProjectModal(projectForm);
    console.log(projects);
  });

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    projects[currentProject][task.value] = newTask(
      description.value,
      date.value,
      priority.checked,
    );
    closeModal(taskModal);
    clearTaskModal(taskForm);
    console.log(projects);
  });
}());

//   return { projects };

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

//     return {
//       taskName,
//       notes,
//       dueDate,
//       isPriority,
//       completed,
//     };
//   }
// };
