function NewTask(
  currentProject,
  taskName,
  notes,
  dueDate,
  isPriority,
  completed = false,
) {
  return {
    notes,
    dueDate,
    isPriority,
    completed,
  };
}

function NewProject(projectName, storage) {
  storage[projectName] = {};

  function renameProj(oldKey, newKey) {
    storage[newKey] = storage[oldKey];
    delete storage[oldKey];
  }
  return { projectName: {}, renameProj };
}

export { NewProject, NewTask };

// try using object methods instead of separate functions?

// function CreateProject(name) {
//   const tasks = [];

//   function createTask(title, notes, isPriority) {
//     return {
//       title,
//       notes,
//       isPriority,
//       completed: false,
//       markComplete() {
//         this.completed = true;
//       },
//     };
//   }

//   return {
//     name,
//     addTask(title, description) {
//       const task = createTask(title, description);
//       tasks.push(task);
//       return task;
//     },
//     getTasks() {
//       return tasks;
//     },
//   };
// }
