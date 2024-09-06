class Project {
    constructor(title, image, shortDescription, technologies, categories, link){

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

function getProjects(category){
    allProjects.forEach(project => {
        if(project.categories.includes(category)){
            console.log(project.title);
        }
        else{
            console.log(`${project.title} doesn't belong to this category`);
        }
    })
};
