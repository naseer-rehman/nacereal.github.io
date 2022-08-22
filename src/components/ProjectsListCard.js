import "./styles/ProjectsListCard.scss";
import ProjectCard from "./ProjectCard";

const ProjectsListCard = () => {
  
  return (
    <div className="ContentCard ProjectsListCard">
      <h2>Projects</h2>
      <div className="project-cards-container content-box">
        {Array.from({length: 2}, () => <ProjectCard />)}
      </div>
    </div>
  );
};

export default ProjectsListCard;