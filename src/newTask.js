export default function newTask(project, taskName, notes, dueDate, isPriority, completed = false) {
  projects.project = {
    taskName,
    notes,
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
