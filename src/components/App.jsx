import '../styles/App.scss'
import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import isUserOnMobile from "../modules/checkMobile.js";
import AboutMeSection from "./AboutMeSection.jsx";
import ProjectsSection from "./ProjectsSection.jsx";
import MobileNavigation from "./MobileNavigation.jsx";

import IsMobileContext from "../contexts/IsMobileContext.js";

function App() {
  const PAGES = ["ABOUT", "PROJECTS"];

  // TODO: use something like this for the animation
  const isOnMobile = useRef(isUserOnMobile());
  const [showAboutSection, setShowAboutSection] = useState(true);
  const [showProjectsSection, setShowProjectsSection] = useState(isOnMobile.current === false);
  const [currentPage, setCurrentPage] = useState(PAGES[0]);

  // TODO: Clean this up
  useEffect(() => {
    console.log(`Loaded! Mobile? ${isOnMobile.current === true ? "true" : "false"}`);

    return () => {
      // console.log("No longer loaded!");
    };
  }, []);

  useEffect(() => {
    console.log("running current page hook");
    if (isOnMobile.current) {
      setShowAboutSection(currentPage === "ABOUT");
      setShowProjectsSection(currentPage === "PROJECTS");
    }
  }, [currentPage]);


  return (
    <IsMobileContext.Provider value={isOnMobile}>
      <div className={`${isOnMobile.current ? "mobile" : ""} main-container`}>
        <Header />
        {showAboutSection && <AboutMeSection />}
        {showProjectsSection && <ProjectsSection />}
        {isOnMobile.current 
          && <MobileNavigation 
            pages={PAGES}
            setPage={setCurrentPage}
            currentPage={currentPage}
          />}
      </div>
    </IsMobileContext.Provider>
  )
}

export default App
