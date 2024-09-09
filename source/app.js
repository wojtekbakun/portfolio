import setProjectTemplate from './projectTemplate.js'
import { filterProjects, makeSelectedCategoryBold } from './utils.js';

const iotButton = document.getElementById('iot-button');
const frontendButton = document.getElementById('frontend-button');
const fullstackButton = document.getElementById('fullstack-button');

iotButton.onclick = () => showProjectsFromCategory('iot');
frontendButton.onclick = () => showProjectsFromCategory('frontend');
fullstackButton.onclick = () => showProjectsFromCategory('fullstack');

window.onload = showProjectsFromCategory('frontend');

// show projects from selected category and make selected category text bold
function showProjectsFromCategory(category) {
  const projectsDiv = document.getElementById('projects-div');
  projectsDiv.innerHTML = "";

  let projectsToShow = [];
  projectsToShow = filterProjects(category);

  projectsToShow.forEach(project => {
    // don't display hr after the last project
    const isHrToDisplay = projectsToShow.indexOf(project) !== projectsToShow.length - 1;

    // set project template
    let projectTemplate = setProjectTemplate(project, isHrToDisplay);

    // append project to the projectsDiv
    projectsDiv.innerHTML += projectTemplate;
  }
  )
  // make selected category text bold
  makeSelectedCategoryBold(category);
};