// function NewTask(
//   currentProject,
//   taskName,
//   notes,
//   dueDate,
//   isPriority,
//   completed = false,
// ) {
//   return {
//     notes,
//     dueDate,
//     isPriority,
//     completed,
//   };
// }

// function NewProject(projectName, storage) {
//   storage[projectName] = {};

//   function deleteProject() {
//     delete storage[projectName];
//   }
//   return { projectName: {}, deleteProject };
// }

const CreateTask = (taskName, taskNotes, taskDueDate, taskIsPriority, taskCompleted = false) => {
  const id = crypto.randomUUID();
  let name = taskName;
  let notes = taskNotes;
  let dueDate = taskDueDate;
  let isPriority = taskIsPriority;
  let completed = taskCompleted;
  return {

    get id() { return id; },

    set taskName(newName) { name = newName; },
    get taskName() { return name; },

    set notes(newNotes) { notes = newNotes; },
    get notes() { return notes; },

    set dueDate(newDate) { dueDate = newDate; },
    get dueDate() { return dueDate; },

    togglePriority() { isPriority = !isPriority; },
    get isPriority() { return isPriority; },

    toggleCompleted() { completed = !completed; },
    get completed() { return completed; },
  };
};

const CreateProject = (projName) => {
  const taskList = [];

  const id = crypto.randomUUID();

  const addTask = (taskName, taskNotes, taskDueDate, taskIsPriority) => {
    taskList.push(CreateTask(taskName, taskNotes, taskDueDate, taskIsPriority));
  };

  const findTaskById = (taskId) => taskList.find((obj) => obj.getId === taskId);

  const deleteTask = (taskId) => {
    const index = taskList.findIndex((item) => item.getId() === taskId);
    taskList.splice(index, 1);
  };

  return {
    projName,
    get id() { return id; },
    addTask,
    get taskList() { return taskList; },
    findTaskById,
    deleteTask,
  };
};

const PM = () => {
  const storage = [];
  let currentProject;
  const addProject = (projName) => {
    storage.push(CreateProject(projName));
  };
  const deleteProject = (id) => {
    const index = storage.findIndex((obj) => obj.id === id);
    storage.splice(index, 1);
  };
  const renameProject = (newName, oldName) => {
    storage[newName] = storage[oldName];
    delete storage[oldName];
  };
  const currProjTaskList = () => {
    const proj = storage.findIndex((obj) => obj.id === currentProject);
    if (storage[proj] === undefined) {
      return undefined;
    }
    return storage[proj].taskList;
  };
  return {
    addProject,
    deleteProject,
    renameProject,
    currProjTaskList,
    get getStorage() { return storage; },
    get currPro() { return currentProject; },
    set currPro(id) { currentProject = id; },

  };
};

export {
  CreateTask, CreateProject, PM,
};
