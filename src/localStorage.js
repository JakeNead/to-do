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

// Save to local storage whenever a project or task is modified
const updateLocalStorage = (pm) => {
  localStorage.setItem('todoStorage', JSON.stringify(pm.getStorage));
};

// Used init load only
const lookForLocalStorage = (pm) => {
  if (localStorage.getItem('todoStorage') === null) {
    instantiateObjects(demoArray, pm);
  } else {
    instantiateObjects(JSON.parse(localStorage.getItem('todoStorage')), pm);
  }
};

// Create object instances from the demoArray or local JSON data
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
