import "./styles/ProjectWindow.scss";
import PathfindingIcon from "../images/pathfinding-icon.png";
import Markdown from "markdown-to-jsx";

const projectDescriptionMarkdown = `
# Pathfinding Visualizer
## About
A web-based pathfinding algorithm visualizer.

Current included algorithm(s):
 * Dijkstra's algorithm
 * A* (soon™)

As of now, touchscreen does not work with this. This was only intended to work with a PC, but who knows, I might end up adding support.

## Usage

Hold middle mouse button and move mouse to move around the canvas.

When placing any tile:
 - Left click to place a single tile
 - Right click to remove a single tile
 - For walls and weights, hold left click to place multiple tiles and hold right click to remove multiple tiles

Press play and watch the algorithm do its work. Try it out [here](http://naseers-pathfinder.herokuapp.com/) (takes a second to boot up).
`;

// Will be provided with a project and destructured to fill information as necessary.
const ProjectWindow = () => {
  return (
    <div className="project-window">
      <div className="project-window-frame">
        <div className="top-buttons-container">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 0h24v24H0z" stroke="none"/>
              <path d="M5 12h14M5 12l6 6M5 12l6-6"/>
            </svg>
            <span>Back</span>
          </button>
        </div>
        <div className="project-main-content">
          <div className="project-aside">
            <div className="project-image-container">
              <img src={PathfindingIcon} alt="Project icon"></img>
            </div>
            <div className="links-languages-container">
              <div className="project-links-container">
                <a href="https://google.ca" className="global-button-style">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 4v16l13 -8z"></path>
                  </svg>
                </a>
                <a href="https://google.ca" className="global-button-style">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>  
                </a>
              </div>
              <div className="project-languages-container">
                <span className="project-languages-title">Languages</span>
                <ul className="project-languages-list">
                  <li>Language</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>peepeepoopoo</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="project-description">
            {/* This will contain the HTML representation of the markdown for the project description. */}
            <Markdown>{projectDescriptionMarkdown}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectWindow;