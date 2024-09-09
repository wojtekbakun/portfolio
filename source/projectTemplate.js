

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

    export default setProjectTemplate;