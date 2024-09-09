import Project from './projectModel.js';

const prosta = new Project(
    "Prosta Nauka Matematyki",
    "../assets/images/prosta.png",
    "Aplikacja mobilna dla uczniów szkoły podstawowej ułatwiająca przygotowanie do egzaminu ósmoklasisty.",
    ["flutter", "firebase"],
    ["frontend"],
    "",
);

const butlometr = new Project(
    "Butlometr",
    "../assets/images/butlometr.png",
    "Aplikacja mobilna dla nurków, która pozwala na zarządzanie butlami nurkowymi.",
    ["flutter", "firebase", "rpi", "restapi"],
    ["iot"],
    "",
);

const tictactoe = new Project(
    'Tic-Tac-Toe',
    '../assets/images/tictactoe.png',
    "Aplikacja mobilna umożliwiająca grę w kółko i krzyżyk.",
    ["flutter"],
    ["frontend"],
    "",
);

const visualQuest = new Project(
    'Visual Quest',
    '../assets/images/visualquest.png',
    "Quiz sprawdzający wiedzę z szerokiego zakresu popularnych zagadnień.",
    ["flutter"],
    ["frontend"],
    "",
);

const justPlanIt = new Project(
    'Just Plan It',
    '../assets/images/jpi3.png',
    "Aplikacja webowa przeznaczona do planowania długoterminowych zadań.",
    ["nodejs", "flutter", "firebase", "restapi", "gemini"],
    ["fullstack"],
    "",
);

const dzienDobry = new Project(
    'Dzień Dobry',
    '../assets/images/dziendobry.png',
    "System ułatwiający utrzymanie roślin i informujący o warunkach atmosferycznych w praktyczny sposób",
    ["python", "flutter", "restapi"],
    ["fullstack", "iot"],
    "",
);

const subG = new Project(
    'SubG',
    '../assets/images/subg1.png',
    "Płytka rozojowa na bazie Nucleo przeznaczona do praktyki z komunikacją na częstotliwości poniżej 1 GHz",
    ["stm", "c"],
    ["iot"],
    "",
);


const allProjects = [prosta, butlometr, tictactoe, visualQuest, justPlanIt, dzienDobry, subG];

export { allProjects };