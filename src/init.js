const initPage = () => {
  document.body.innerHTML = `
  <div id='content'>
  <header> 
  <h1>ToDoIt</h1>
  <svg xmlns='http://www.w3.org/2000/svg' height='48' viewBox='0 96 960 960' width='48'><path d='M479.765 716Q538 716 579 675.235q41-40.764 41-99Q620 518 579.235 477q-40.764-41-99-41Q422 436 381 476.765q-41 40.764-41 99Q340 634 380.765 675q40.764 41 99 41Zm.235 60q-83 0-141.5-58.5T280 576q0-83 58.5-141.5T480 376q83 0 141.5 58.5T680 576q0 83-58.5 141.5T480 776ZM70 606q-12.75 0-21.375-8.675Q40 588.649 40 575.825 40 563 48.625 554.5T70 546h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T170 606H70Zm720 0q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T790 546h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890 606H790ZM479.825 296Q467 296 458.5 287.375T450 266V166q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510 166v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm0 720q-12.825 0-21.325-8.62-8.5-8.63-8.5-21.38V886q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510 886v100q0 12.75-8.675 21.38-8.676 8.62-21.5 8.62ZM240 378l-57-56q-9-9-8.629-21.603.37-12.604 8.526-21.5 8.896-8.897 21.5-8.897Q217 270 226 279l56 57q8 9 8 21t-8 20.5q-8 8.5-20.5 8.5t-21.5-8Zm494 495-56-57q-8-9-8-21.375T678.5 774q8.5-9 20.5-9t21 9l57 56q9 9 8.629 21.603-.37 12.604-8.526 21.5-8.896 8.897-21.5 8.897Q743 882 734 873Zm-56-495q-9-9-9-21t9-21l56-57q9-9 21.603-8.629 12.604.37 21.5 8.526 8.897 8.896 8.897 21.5Q786 313 777 322l-57 56q-8 8-20.364 8-12.363 0-21.636-8ZM182.897 873.103q-8.897-8.896-8.897-21.5Q174 839 183 830l57-56q8.8-9 20.9-9 12.1 0 20.709 9Q291 783 291 795t-9 21l-56 57q-9 9-21.603 8.629-12.604-.37-21.5-8.526ZM480 576Z'/></svg>
  </header>

  <main>
  
  <nav>
  <p>today</p>
  <p>week</p>
  <p>all</p>
  <div id='projects-section'>
  <h3>Projects</h3>
  <button id='add-project' data-modal-target='#project-modal'>+ Add Project</div>
  <ul id='projects'><ul>
  </nav>
  
  <section id='tasks'>
  <p>Here are the main tasks for the current project</p>
  <button id='add-task' data-modal-target='#task-modal'>+ Add Task</button>
  <div id='taskList'></div>
  </section>

  </main>

  <footer>
  <p>Made by Jake</p>
  <a href='https://github.com/JakeNead/to-do\'>
  <svg id='odin-logo' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z'/>
  </svg>
  </a>
  </footer>

  <div id="project-modal" class='modal'>
    <form id='project-form' action="#">
    <label for="projectInput" ></label>
    <input type="text" name="projectInput" id="projectInput" placeholder="Project Name" required>
    <div id='project-modal-buttons'>
    <button id='project-submit' type="submit">Add</button>
    <button data-close-button>Cancel</button>
    </div>
</form>
</div>

<div id="task-modal" class='modal'>
    <form id='task-form' action="#">
    <label for="task" ></label>
    <input type="text" name="task" id="task" placeholder="Task Name" required>
    <label for="description"></label>
    <input type="text" name='description' id = 'description' placeholder="Description">
    <label for="date"></label>
    <input type="date" name="date" id="date">
    
    <div id='priority-checkbox'> 
    <label for="priority">Flag as priority</label>
    <input type="checkbox" name="priority" id="priority" value="low-priority">
    </div>
    <div id='task-modal-buttons'>
    <button id='task-submit' type="submit">Add</button>
    <button data-close-button >Cancel</button>
    </div>

</form>
</div>
  </div>
  <div id='overlay'> </div>
  `;
};

export default initPage;
