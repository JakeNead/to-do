import { format } from 'date-fns';

const CreateTask = (taskName, taskNotes, taskDueDate, taskIsPriority, taskCompleted = false) => {
  const id = crypto.randomUUID();
  let name = taskName;
  let notes = taskNotes;
  let dueDate = format(new Date(taskDueDate), 'MMM do yyyy');
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

  const isUniqueTask = (newTaskName) => !(taskList.some((obj) => obj.taskName.toLowerCase() === newTaskName.toLowerCase()));

  return {
    projName,
    addTask,
    findTaskById,
    deleteTask,
    isUniqueTask,
    get id() { return id; },
    get taskList() { return taskList; },
  };
};

const PM = () => {
  const storage = [];
  let currentProject;

  const addProject = (newProjName) => storage.push(CreateProject(newProjName));

  const deleteProject = (id) => {
    const index = storage.findIndex((obj) => obj.id === id);
    storage.splice(index, 1);
  };

  const renameProject = (newName) => {
    storage[storage.findIndex((obj) => obj.id === currentProject)].projName = newName;
  };

  const isUniqueProject = (newProjName) => !(storage.some((obj) => obj.projName.toLowerCase() === newProjName.toLowerCase()));

  const todayTasks = () => {};

  const weekTasks = () => {};

  const allTasks = () => storage.flatMap((projObj) => projObj.taskList);

  const findProject = (selectProj) => storage[storage.findIndex((obj) => obj.projName === selectProj)];

  return {
    addProject,
    deleteProject,
    renameProject,
    isUniqueProject,
    todayTasks,
    weekTasks,
    allTasks,
    findProject,
    get getStorage() { return storage; },
    get currPro() { return storage[storage.findIndex((obj) => obj.id === currentProject)]; },
    get currProId() { return currentProject; },
    set currProId(id) { currentProject = id; },
    get projectNameArray() {
      let nameArr = [];
      storage.forEach((item) => { nameArr.push(item.projName); });
      return nameArr;
    },

  };
};

export default PM;

// given a project name,
// search storage[] for the project obj

// add the new task to the tasklist[]
