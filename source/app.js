class Project {
  constructor(title, image, shortDescription, technologies, categories, link) {

    this.title = title;
    this.image = image;
    this.shortDescription = shortDescription,
      this.technologies = technologies;
    this.categories = categories;
    this.link = link;
  }
};

const prosta = new Project(
  "Prosta Nauka Matematyki",
  "../assets/images/frame1.png",
  "Aplikacja mobilna dla uczniów szkoły podstawowej ułatwiająca przygotowanie do egzaminu ósmoklasisty.",
  ["flutter", "firebase"],
  ["frontend"],
  "",
);

const butlometr = new Project(
  "Butlometr",
  "../assets/images/frame1.png",
  "Aplikacja mobilna dla nurków, która pozwala na zarządzanie butlami nurkowymi.",
  ["flutter", "firebase"],
  ["frontend", "iot", "fullstack"],
  "",
);

const allProjects = [prosta, butlometr];

const iotButton = document.getElementById('iot-button');
const frontendButton = document.getElementById('frontend-button');
const fullstackButton = document.getElementById('fullstack-button');

iotButton.onclick = () => showProjectsFromCategory('iot');
frontendButton.onclick = () => showProjectsFromCategory('frontend');
fullstackButton.onclick = () => showProjectsFromCategory('fullstack');

const projectsDiv = document.getElementById('projects-div');
projectsDiv.onload = showProjectsFromCategory('frontend');


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

function filterProjects(category) {
  let filteredProjects = [];
  filteredProjects = allProjects.filter(project => project.categories.includes(category));
  return filteredProjects;
};

function makeSelectedCategoryBold(category) {
  const categories = document.getElementsByClassName('dev-button');
  const clickedCategory = category.toLowerCase();
  for (let i = 0; i < categories.length; i++) {
    const categoryText = categories[i].innerText.toLowerCase();
    let categoryTrimmedText = categoryText.trim();
    console.log(`clickedCategory: ${clickedCategory} (${clickedCategory.length} letters), textCategory: ${categoryTrimmedText} (${categoryTrimmedText.length} letters)`);
    if (clickedCategory === categoryTrimmedText) {
      categories[i].style.fontWeight = "bold";
      console.log(`making bold: ${categories[i].innerText}`);
    } else {
      categories[i].style.fontWeight = "normal";
    }
  }
};


function setProjectTemplate(project, isHrToDisplay) {
  const projectTemplate =
    `
  <section class="project">
  <div class="project-container">
    <div class="projects-images-box">
      <img
        class="projects-images"
        src="assets/images/frame1.png"
        alt=""
      />
    </div>
    <div class="projects-description">
      <p class="project-title" id="project1">${project.title}</p>
      <p class="project-description">
        ${project.shortDescription}
      </p>
      <div class="projects-technologies">
        <div class="image-div-border">
          <img
            class="tech-image"
            src="assets/images/flutter.png"
            alt="Flutter"
          />
        </div>
        <div class="image-div-border">
          <img
            class="tech-image"
            src="assets/images/firebase.png"
            alt="Firebase"
          />
        </div>
      </div>
    </div>
  </div>
  ${isHrToDisplay ? "<hr />" : `<div id="sized-box"></div>`}
</section>`;

  return projectTemplate;
};
