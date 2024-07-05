import { useContext } from "react";

import "../styles/ProjectsSection.scss";
import bitcoinBotImage from "../images/bitcoin-discord-bot-logo.png";
import pathfindingAppImage from "../images/pathfinding-icon.png";
import puzzlePieceImage from "../images/puzzle-piece.png";
import cscoursebookImage from "../images/common-sense-coursebook-logo.png";
import uwoscraperImage from "../images/uwoscraperlogo.png";
import GithubIcon from "./icons/GithubIcon";

import IsMobileContext from "../contexts/IsMobileContext";

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
    uwoscraperImage,
    "https://github.com/naseer-rehman/uwo-course-app",
    null,
    ["TypeScript", "NodeJS"],
  ),
  createProjectObject(
    "CSCoursebook", 
    cscoursebookImage,
    null,
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
    null,
    ["NodeJS"],
  ),
];

const ProjectLink = ({children, ...props}) => {
  // TODO: Add link stuff
  return <a className="mobile-project-card__link" {...props}>{children}</a>
};

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
  const langsReduction = (acc, val) => {
    if (val === props.langs[props.langs.length - 1]) {
      return acc + val;
    }
    return acc + val + ", ";
  };

  return (
    <div className="mobile-project-card">
      <div className="mobile-project-card__img-container">
        <img src={props.imageUrl} alt="" className="mobile-project-card__img" />
      </div>
      <div className="mobile-project-card__info-container">
        <span className="mobile-project-card__title">{props.name}</span>
        <span className="mobile-project-card__langs">
          {props?.langs?.reduce(langsReduction, "")}
        </span>
      </div>
      <div className="mobile-project-card__links-container">
        <ProjectLink 
          href={props.githubUrl ?? props.projectUrl}
        >
          {/* TODO: Change icon based on link type */}
          <GithubIcon />
        </ProjectLink>
      </div>
    </div>
  );
};

function ProjectsSection(props) {
  const isOnMobile = useContext(IsMobileContext);

  return (
    <div className="projects">
      {projects.map((obj, ind) => {
        return isOnMobile.current
          ? <MobileProjectCard key={ind} {...obj} />
          : <ProjectCard key={ind} {...obj} />;
      })}
    </div>
  );
}

export default ProjectsSection;