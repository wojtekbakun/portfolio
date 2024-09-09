

function setProjectTemplate(project, isHrToDisplay) {
    const projectTemplate =
      `
    <section class="project">
    <div class="project-container">
      <div class="projects-images-box">
        <img
          class="projects-images"
          src="${project.image}"
          alt=""
        />
      </div>
      <div class="projects-description">
        <p class="project-title" id="project1">${project.title}</p>
        <p class="project-description">
          ${project.shortDescription}
        </p>
        <div class="projects-technologies">
          ${getTechnologiesImages(project.technologies)}
        </div>
      </div>
    </div>
    ${isHrToDisplay ? "<hr />" : `<div id="sized-box"></div>`}
  </section>`;
  
    return projectTemplate;
  };

  function getTechnologiesImages(technologies) {
    let imagesHTML = "";
    technologies.forEach(element => {
     imagesHTML += `
      <div class="image-div-border">
            <img
              class="tech-image"
              src="${getSingleImage(element)}"
              alt="Flutter"
            />
          </div>
          `
    });
    console.log(imagesHTML);
    return imagesHTML;
  };

  function getSingleImage(technology) {
    console.log(technology);
    let imageURL = "";
    switch (technology) {
      case "flutter":
        imageURL = '../assets/images/flutter.png';
        break;
      case "firebase":
        imageURL = '../assets/images/firebase.png';
        break;
      case "rpi":
        imageURL = '../assets/images/logos_raspberry-pi.png';
        break;
      case "stm":
        imageURL = '../assets/images/simple-icons_stmicroelectronics.png';
        break;
      case "restapi":
        imageURL = '../assets/images/mdi_api.png';
        break;
      case "python":
        imageURL = '../assets/images/logos_python.png';
        break;
      case "nodejs":
        imageURL = '../assets/images/logos_nodejs.png';
        break;
      case "html":
        imageURL = '../assets/images/logos_html-5.png';
        break;
      case "css":
        imageURL = '../assets/images/logos_css-3.png';
        break;
      case "express":
        imageURL = '../assets/images/logos_express.png';
        break;
      case "gemini":
        imageURL = '../assets/images/logos_google-gemini.png';
        break;
      case "c":
        imageURL = '../assets/images/devicon_c.png';
        break;
    }
    return imageURL;
  };

    export default setProjectTemplate;