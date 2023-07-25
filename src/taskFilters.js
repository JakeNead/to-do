import { renderTaskElements, removeTasks } from './renderElements';

const taskFilters = (pm) => {
  const today = document.querySelector('#todayTasks');
  const week = document.querySelector('#weekTasks');
  const all = document.querySelector('#allTasks');

  today.addEventListener('click', () => {
    removeTasks();
    renderTaskElements(pm.todayTasks());
  });

  week.addEventListener('click', () => {
    removeTasks();
    renderTaskElements(pm.weekTasks());
  });

  all.addEventListener('click', () => {
    removeTasks();
    renderTaskElements(pm.allTasks());
  });
};

export default taskFilters;
