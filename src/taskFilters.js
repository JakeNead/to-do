import { renderTaskList, removeTasks, updateTaskHeader } from './renderElements';

const taskFilters = (pm) => {
  const today = document.querySelector('#todayTasks');
  const week = document.querySelector('#weekTasks');
  const all = document.querySelector('#allTasks');
  const priority = document.querySelector('#priorityTasks');

  today.addEventListener('click', () => {
    removeTasks();
    renderTaskList(pm.todayTasks(), pm);
    updateTaskHeader('Today');
  });

  week.addEventListener('click', () => {
    removeTasks();
    renderTaskList(pm.weekTasks(), pm);
    updateTaskHeader('This Week');
  });

  all.addEventListener('click', () => {
    removeTasks();
    renderTaskList(pm.allTasks(), pm);
    updateTaskHeader('All');
  });
  priority.addEventListener('click', () => {
    removeTasks();
    renderTaskList(pm.priorityTasks(), pm);
    updateTaskHeader('Priority');
  });
};

export default taskFilters;
