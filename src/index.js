import initPage from './init';
import modalEvents from './modals';
import PM from './newObjects';
import './normalize.css';
import './style.css';
import './modal.css';
import { renderProjects } from './renderElements';
import taskFilters from './taskFilters';
import { lookForLocalStorage } from './localStorage';

const pm = PM();

lookForLocalStorage(pm);
initPage();
taskFilters(pm);
modalEvents(pm);
renderProjects(pm);
