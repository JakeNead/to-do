function NewTask(
  currentProject,
  taskName,
  description,
  dueDate,
  isPriority,
  completed = false,
) {
  return {
    description,
    dueDate,
    isPriority,
    completed,
  };
}

function NewProject(projectName, storage) {
  storage[projectName] = {};
}

export { NewProject, NewTask };

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
