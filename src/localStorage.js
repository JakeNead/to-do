// save to local storage whenever a project or task is updated
const updateLocalStorage = (pm) => {
  localStorage.setItem('todoStorage', JSON.stringify(pm.getStorage));
};

// look for local storage on init load only
const lookForLocalStorage = (pm) => {
  if (JSON.parse(localStorage.getItem('todoStorage')) === null) {
    console.log('local storage is empty. Load the demo projects');
  } else {
    console.log('Parse the local storage data');
    // pm.storage = JSON.parse(localStorage.getItem('todoStorage'));
  }
};

export { updateLocalStorage, lookForLocalStorage };

// on page load, check if localStorage is empty
//   if empty, load the demo projects/tasks
//   if not empty, render the local storage projects/tasks

// Options for adding methods to projects again:
//      loop through my storage data and recreate the obj instances
//      apply prototype methods to each proj/task
