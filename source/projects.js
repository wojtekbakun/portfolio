import Project from './projectModel.js';

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

export { allProjects };