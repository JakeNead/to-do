export default function newProject(projectName, storage) {
  const nameArray = Object.keys(storage);
  for (let i = 0; i < nameArray.length; i++) {
    if (nameArray[i].toLowerCase() === projectName.toLowerCase()) {
      return console.log('That name already exists!');
    }
  }
  storage[projectName] = {};
}
