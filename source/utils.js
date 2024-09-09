import { allProjects } from './projects.js'
// filter projects by category
function filterProjects(category) {
    let filteredProjects = [];
    filteredProjects = allProjects.filter(project => project.categories.includes(category));
    return filteredProjects;
  };
  
  // make selected category text bold
  function makeSelectedCategoryBold(category) {
    const categories = document.getElementsByClassName('dev-button');
    const clickedCategory = category.toLowerCase();
    for (let i = 0; i < categories.length; i++) {
      const categoryText = categories[i].innerText.toLowerCase();
      let categoryTrimmedText = categoryText.trim();
      if (clickedCategory === categoryTrimmedText) {
        categories[i].style.fontWeight = "bold";
      } else {
        categories[i].style.fontWeight = "normal";
      }
    }
  };

  export { filterProjects, makeSelectedCategoryBold };