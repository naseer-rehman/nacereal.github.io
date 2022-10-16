import "./styles/ProjectsListCard.scss";
import ProjectCard from "./ProjectCard";
import { v4 as uuidv4 } from "uuid";

const ProjectsListCard = () => {
  
  return (
    <div className="ContentCard ProjectsListCard">
      <h2>Projects</h2>
      <div className="card-content-container">
        <div className="project-cards-container content-box">
          {Array.from({length: 10}, () => <ProjectCard key={uuidv4()} />)}
        </div>
      </div>
    </div>
  );
};

export default ProjectsListCard;