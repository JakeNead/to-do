export default function newProject(projectName) {
  const keyArray = Object.keys(projects);
  let duplicate;
  keyArray.forEach((key) => {
    if (key.toLowerCase() === projectName.toLowerCase()) {
      duplicate = true;
    }
  });
  if (duplicate) {
    return console.log('That name already exists!');
  }
  projects[projectName] = {};
}
