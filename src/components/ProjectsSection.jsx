import "../styles/ProjectsSection.scss";
import bitcoinBotImage from "../images/bitcoin-discord-bot-logo.png";
import pathfindingAppImage from "../images/pathfinding-icon.png";
import puzzlePieceImage from "../images/puzzle-piece.png";
import cscoursebookImage from "../images/common-sense-coursebook-logo.png";

const genericImage = puzzlePieceImage;

const createProjectObject = (name, imageUrl, githubUrl, projectUrl, langs) => ({
  name,
  imageUrl,
  githubUrl,
  projectUrl,
  langs: langs ?? null,
});

const projects = [
  createProjectObject(
    "UWO Course Scraper", 
    genericImage,
    "https://github.com/naseer-rehman/uwo-course-app",
    ["TypeScript", "NodeJS"],
  ),
  createProjectObject(
    "CSCoursebook", 
    cscoursebookImage,
    "https://common-sense-coursebook.vercel.app/",
    ["React, JavaScript"],
  ),
  createProjectObject(
    "Pathfinding Visualizer", 
    pathfindingAppImage,
    null,
    "https://naseer.io/pathfinding-visualizer/",
    ["JavaScript", "HTML", "CSS"],
  ),
  createProjectObject(
    "Discord Bitcoin Price Bot", 
    bitcoinBotImage,
    "https://github.com/naseer-rehman/Bitcoin-Price-Bot",
    ["NodeJS"],
  ),
];

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="project-card__title-container">
        <span className="project-card__title">{props.name}</span>
      </div>
      <div className="project-card__img-container">
        {/* TODO: Add alt for this and check how descriptive it should be */}
        <img src={props.imageUrl} className="project-card__img"/>
      </div>
      <a href={props.projectUrl || props.githubUrl} className="project-card__open-button">OPEN</a>
    </div>
  );
};

const MobileProjectCard = (props) => {
  return (
    <div className="mobile-project-card">
      <div className="mobile-project-card__img-container">
        <img src="" alt="" className="mobile-project-card__img" />
      </div>
      <div className="mobile-project-card__info-container">
        <span className="mobile-project-card__title">{props.name}</span>
        
      </div>
    </div>
  );
};

function ProjectsSection(props) {
  return (
    <div className="projects">
      {projects.map((obj, ind) => <ProjectCard key={ind} {...obj} />)}
    </div>
  );
}

export default ProjectsSection;