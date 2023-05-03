export default function newProject(projectName) {
  const nameArray = Object.keys(projects);
  for (let i = 0; i < nameArray.length; i++) {
    if (nameArray[i].toLowerCase() === projectName.toLowerCase()) {
      return console.log('That name already exists!');
    }
  }
  projects[projectName] = {};
}
