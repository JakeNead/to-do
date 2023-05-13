export default function newTask(
  projects,
  currentProject,
  taskName,
  description,
  dueDate,
  isPriority,
  completed = false,
) {
  if (projects[currentProject].toLowerCase() === taskName.toLowerCase()) {
    return console.log('That task name already exists!');
  }
  return {
    taskName,
    description,
    dueDate,
    isPriority,
    completed,
  };
}

// set task(setTaskName) {
//       taskName = setTaskName;
//     },
//     set newNotes(setNotes) {
//       notes = setNotes;
//     },
//     set newDueDate(setDueDate) {
//       dueDate = setDueDate;
//     },
//     set newPriority(setPriority) {
//       isPriority = setPriority;
//     },
//     set completed(isCompleted) {
//       completed = isCompleted;
//     },
