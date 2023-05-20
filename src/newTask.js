function newTask(
  currentProject,
  taskName,
  description,
  dueDate,
  isPriority,
  completed = false,
) {
  // const taskNameArray = Object.keys(currentProject);
  // if (taskNameArray.includes(taskName)) {
  //   return alert('That task name already exists!');
  // }
  return {
    description,
    dueDate,
    isPriority,
    completed,
  };
}
function newProject(projectName, storage) {
  storage[projectName] = {};
}

export { newProject, newTask };

// try using object methods instead of separate functions

// const Task = (
//   title,
//   taskName,
//   description,
//   dueDate,
//   isPriority,
//   completed = false,
// ) => {
//   let storage = [];

//   const add = function (item) {
//     storage.push(item);
//   };
//   const remove = function (item) {
//     storage = storage.filter((thing) => thing !== item);
//   };

//   return {
//     get title() { return title; },
//     add,
//     remove,
//   };
// };
