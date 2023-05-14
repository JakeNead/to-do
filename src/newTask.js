export default function newTask(
  projects,
  currentProject,
  taskName,
  description,
  dueDate,
  isPriority,
  completed = false,
) {
  // for (const prop)
  // if (projects[currentProject].toLowerCase() === taskName.toLowerCase()) {
  //   return console.log('That task name already exists!');
  // }
  return {
    taskName,
    description,
    dueDate,
    isPriority,
    completed,
  };
}
// import the function below and run this before adding the task to projects

// function isTaskDuplicate(){
//     for (const prop in object)
//   if (projects[currentProject].toLowerCase() === taskName.toLowerCase()) {
//     return console.log('That task name already exists!');
//   }
// }

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
