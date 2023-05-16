export default function newProject(projectName, storage) {
  const projNameArray = Object.keys(storage);
  for (let i = 0; i < projNameArray.length; i++) {
    if (projNameArray[i].toLowerCase() === projectName.toLowerCase()) {
      return console.log('That name already exists!');
    }
  }
  storage[projectName] = {};
}
