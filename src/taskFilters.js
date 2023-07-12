import { renderTaskElements, removeTasks } from './renderElements';

const taskFilters = (pm) => {
  const today = document.querySelector('#todayTasks');
  const week = document.querySelector('#weekTasks');
  const all = document.querySelector('#allTasks');

  today.addEventListener('click', () => {
    console.log('today');
  });

  week.addEventListener('click', () => {
    console.log('week');
  });

  all.addEventListener('click', () => {
    removeTasks();
    renderTaskElements(pm.allTasks());
  });
};

export default taskFilters;
