import { renderTaskElements, removeTasks, updateTaskHeader } from './renderElements';

const taskFilters = (pm) => {
  const today = document.querySelector('#todayTasks');
  const week = document.querySelector('#weekTasks');
  const all = document.querySelector('#allTasks');

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
};

export default taskFilters;
