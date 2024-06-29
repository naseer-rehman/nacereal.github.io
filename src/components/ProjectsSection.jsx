import "../styles/ProjectsSection.scss";
import bitcoinBotImage from "../images/bitcoin-discord-bot-logo.png";
import pathfindingAppImage from "../images/pathfinding-icon.png";
import puzzlePieceImage from "../images/puzzle-piece.png";
import cscoursebookImage from "../images/common-sense-coursebook-logo.png";

const genericImage = puzzlePieceImage;

const createProjectObject = (name, imageUrl, githubUrl, projectUrl) => ({
  name,
  imageUrl,
  githubUrl,
  projectUrl,
});

const projects = [
  createProjectObject(
    "UWO Course Scraper", 
    genericImage,
    "https://github.com/naseer-rehman/uwo-course-app"
  ),
  createProjectObject(
    "CSCoursebook", 
    cscoursebookImage,
    "https://common-sense-coursebook.vercel.app/"
  ),
  createProjectObject(
    "Pathfinding Visualizer", 
    pathfindingAppImage,
    null,
    "https://naseer.io/pathfinding-visualizer/"
  ),
  createProjectObject(
    "Discord Bitcoin Price Bot", 
    bitcoinBotImage,
    "https://github.com/naseer-rehman/Bitcoin-Price-Bot"
  ),
];

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="project-card__title-container">
        <span className="project-card__title">{props.name}</span>
      </div>
      <div className="project-card__img-container">
        <img src={props.imageUrl} className="project-card__img"/>
      </div>
      <a href={props.projectUrl || props.githubUrl} className="project-card__open-button">OPEN</a>
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