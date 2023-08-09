const demoArray = [
  {
    projName: 'Yard Work',
    id: 'c92d7892-3bb7-494c-a1f5-af579d23e96f',
    taskList: [
      {
        id: 'a99c594d-52ee-41c9-b7f2-bc8a17b75bd6',
        projId: 'c92d7892-3bb7-494c-a1f5-af579d23e96f',
        taskName: 'Mow lawn',
        notes: "Don't forget to mow by the front yard maple",
        dueDate: 'Jul 25th 2023',
        dueDateObj: '2023-07-25T07:00:00.000Z',
        completed: false,
        isPriority: false,
      },
      {
        id: 'b99c594d-52ee-41c9-b7f2-bc8a17b75bd6',
        projId: 'c92d7892-3bb7-494c-a1f5-af579d23e96f',
        taskName: 'Trim maple',
        notes: 'Use the ladder to get the upper branches.',
        dueDate: 'Jul 27th 2023',
        dueDateObj: '2023-07-27T07:00:00.000Z',
        completed: false,
        isPriority: false,
      },
    ],
  },
  {
    projName: 'Work Magic',
    id: 'c92d7892-3bb7-494c-a1f5-af579d23e96f',
    taskList: [
      {
        id: 'a99c594d-52ee-41c9-b7f2-bc8a17b75bd6',
        projId: 'c92d7892-3bb7-494c-a1f5-af579d23e96f',
        taskName: 'Gather intergalactic ingredients',
        notes: 'Ask weird neighbor if they can help',
        dueDate: 'Aug 5th 2023',
        dueDateObj: '2023-08-05T07:00:00.000Z',
        completed: false,
        isPriority: true,
      },
      {
        id: 'b99c594d-52ee-41c9-b7f2-bc8a17b75bd6',
        projId: 'c92d7892-3bb7-494c-a1f5-af579d23e96f',
        taskName: 'Experiment',
        notes: 'Don\'t forget to wear gloves and goggles.',
        dueDate: 'Aug 8th 2023',
        dueDateObj: '2023-08-08T07:00:00.000Z',
        completed: false,
        isPriority: true,
      },
    ],
  },
  {
    projName: 'Shed improvements',
    id: 'a92d7892-3bb7-494c-a1f5-af579d23e96f',
    taskList: [],
  }];

// save to local storage whenever a project or task is updated
const updateLocalStorage = (pm) => {
  localStorage.setItem('todoStorage', JSON.stringify(pm.getStorage));
};

// look for local storage on init load only
const lookForLocalStorage = (pm) => {
  if (localStorage.getItem('todoStorage') === null) {
    console.log('local storage is empty. Load the demo projects');
    instantiateObjects(demoArray, pm);
  } else {
    console.log(JSON.parse(localStorage.getItem('todoStorage')));
    instantiateObjects(JSON.parse(localStorage.getItem('todoStorage')), pm);
  }
};

// Create new objects from the demoArray or local JSON data
const instantiateObjects = (storage, pm) => {
  for (let i = 0; i < storage.length; i += 1) {
    pm.addProject(storage[i].projName);
    for (let j = 0; j < storage[i].taskList.length; j += 1) {
      let task = storage[i].taskList[j];
      pm.getStorage[i].addTask(task.taskName, task.notes, task.dueDateObj, task.isPriority, pm.getStorage[i].id);
    }
  }
};

export { updateLocalStorage, lookForLocalStorage };

// on page load, check if localStorage is empty
//   if empty, load the demo projects/tasks
//   if not empty, render the local storage projects/tasks

// Options for adding methods to projects again:
//      loop through my storage data and recreate the obj instances
//      apply prototype methods to each proj/task
