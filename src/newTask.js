export default function newTask(
  projects,
  currentProject,
  taskName,
  description,
  dueDate,
  isPriority,
  completed = false,
) {
  const taskNameArray = Object.keys(currentProject);
  if (taskNameArray.includes(taskName)) {
    return console.log('That task name already exists!');
  }
  return {
    description,
    dueDate,
    isPriority,
    completed,
  };
}
