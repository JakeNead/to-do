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

    getId() { return id; },

    setTaskName(newName) { name = newName; },
    getTaskName() { return name; },

    setNotes(newNotes) { notes = newNotes; },
    getNotes() { return notes.taskName; },

    setDueDate(newDate) { dueDate = newDate; },
    getDueDate() { return dueDate; },

    setIsPriority() { isPriority = !isPriority; },
    getIsPriority() { return isPriority; },

    setCompleted() { completed = !completed; },
    getCompleted() { return completed; },
  };
};

const CreateProject = (projName) => {
  const taskList = [];

  const id = crypto.randomUUID();

  const getId = () => id;

  const addTask = (taskName, taskNotes, taskDueDate, taskIsPriority) => {
    taskList.push(CreateTask(taskName, taskNotes, taskDueDate, taskIsPriority));
  };

  const getTaskList = () => taskList;

  const findTaskById = (id) => taskList.find((obj) => obj.getId === id);

  const deleteTask = (id) => {
    const index = taskList.findIndex((item) => item.getId() === id);
    taskList.splice(index, 1);
  };

  return {
    projName,
    getId,
    addTask,
    getTaskList,
    findTaskById,
    deleteTask,
  };
};

const ProjectManager = () => {
  const storage = [];
  // currentProject could be a UUID
  let currentProject;
  const addProject = (projName) => {
    storage.push(CreateProject(projName));
  };

  const deleteProject = (projectName) => {
    delete storage[projectName];
  };

  const renameProject = (newName, oldName) => {
    storage[newName] = storage[oldName];
    delete storage[oldName];
  };

  return {
    addProject,
    deleteProject,
    renameProject,
    get getStorage() { return storage; },
    get currPro() { return currentProject; },
    set currPro(proj) { currentProject = proj; },
    get currProjObj() {
      const proj = storage.findIndex((obj) => obj.getId === currentProject);
      return storage[proj].getTaskList();
    },
  };
};

export {
  CreateTask, CreateProject, ProjectManager,
};
