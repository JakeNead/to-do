import { renderTaskElements, removeTasks, updateTaskHeader } from './renderElements';

const taskFilters = (pm) => {
  const today = document.querySelector('#todayTasks');
  const week = document.querySelector('#weekTasks');
  const all = document.querySelector('#allTasks');
  const priority = document.querySelector('#priorityTasks');

  today.addEventListener('click', () => {
    removeTasks();
    renderTaskElements(pm.todayTasks());
    updateTaskHeader('Today');
  });

  week.addEventListener('click', () => {
    removeTasks();
    renderTaskElements(pm.weekTasks());
    updateTaskHeader('This Week');
  });

  all.addEventListener('click', () => {
    removeTasks();
    renderTaskElements(pm.allTasks());
    updateTaskHeader('All');
  });
  priority.addEventListener('click', () => {
    removeTasks();
    renderTaskElements(pm.priorityTasks());
    updateTaskHeader('Priority');
  });
};

export default taskFilters;
