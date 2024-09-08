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
  ["frontend", "x"],
  "",
);

const allProjects = [prosta, butlometr];


function showProjectsFromCategory(category) {
  const projectsDiv = document.getElementById("projects-div");
  const projectsToShow = filterProjects(category);
  projectsToShow.forEach(project =>
  {
    const projectTemplate = setProjectTemplate(project);
    projectsDiv.innerHTML += projectTemplate;
  }
  )
  document.body.appendChild(projectsDiv);
}

function filterProjects(category){
  return projectsToShow = allProjects.filter(project => project.categories.includes(category));
}


function setProjectTemplate(project){
  const projectTemplate =
  `<section class="project">
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
        Aplikacja mobilna przygotowująca 8 klasistów do egzaminu.
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
  <hr />
</section>`;

return projectTemplate;
};
