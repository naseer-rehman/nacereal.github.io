import "./styles/ProjectCard.scss";
import BitcoinBotLogo from "../images/bitcoin-discord-bot-logo.png";

// A component for every project card that represents a single project.
const ProjectCard = () => {
  return (
    <div className="ProjectCard content-box">
      <div className="project-card-image-container">
        <img src={BitcoinBotLogo} alt="Project logo." />
      </div>
      <div className="project-card-info">
        <h3>Project Name Here</h3>
        <div className="project-card-button-container">
          <button>INFO</button>
          <button><span>git</span></button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;