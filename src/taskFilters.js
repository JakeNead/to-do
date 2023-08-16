import { renderTaskList, removeTasks } from './renderElements';

const taskFilters = (pm) => {
  const today = document.querySelector('#todayTasks');
  const week = document.querySelector('#weekTasks');
  const all = document.querySelector('#allTasks');
  const priority = document.querySelector('#priorityTasks');

  today.addEventListener('click', () => {
    pm.currPro = 'Today';
    renderTaskList(pm);
  });

  week.addEventListener('click', () => {
    pm.currPro = 'Week';
    renderTaskList(pm);
  });

  all.addEventListener('click', () => {
    pm.currPro = 'All';
    renderTaskList(pm);
  });
  priority.addEventListener('click', () => {
    pm.currPro = 'Priority';
    renderTaskList(pm);
  });
};

export default taskFilters;
