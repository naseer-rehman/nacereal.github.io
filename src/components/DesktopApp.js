import NameTitle from "./NameTitle";
import AboutCard from "./AboutCard";
import ProjectsListCard from "./ProjectsListCard";
import ContactCard from "./ContactCard";
import DinoCard from "./DinoCard";

const DesktopApp = () => {
  return (
    <div className="App DesktopView">
      <div className="name-title-container">
        <NameTitle />
      </div>
      <div className="cards-container">
        <AboutCard />
        <ProjectsListCard />
        <div className="stacked-cards-container">
          <ContactCard />
          <DinoCard />
        </div>
      </div>
    </div>
  );
};

export default DesktopApp;
