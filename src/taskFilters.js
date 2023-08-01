import { renderTaskList, removeTasks, updateTaskHeader } from './renderElements';

const taskFilters = (pm) => {
  const today = document.querySelector('#todayTasks');
  const week = document.querySelector('#weekTasks');
  const all = document.querySelector('#allTasks');
  const priority = document.querySelector('#priorityTasks');

  today.addEventListener('click', () => {
    pm.currPro = 'Today';
    removeTasks();
    renderTaskList(pm);
  });

  week.addEventListener('click', () => {
    pm.currPro = 'Week';
    removeTasks();
    renderTaskList(pm);
  });

  all.addEventListener('click', () => {
    pm.currPro = 'All';
    removeTasks();
    renderTaskList(pm);
  });
  priority.addEventListener('click', () => {
    pm.currPro = 'Priority';
    removeTasks();
    renderTaskList(pm);
  });
};

export default taskFilters;
