import '../styles/App.scss'
import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import isUserOnMobile from "../modules/checkMobile.js";
import AboutMeSection from "./AboutMeSection.jsx";
import ProjectsSection from "./ProjectsSection.jsx";

import IsMobileContext from "../contexts/IsMobileContext.js";

function App() {
  // TODO: use something like this for the animation
  const [showAboutSection, setShowAboutSection] = useState(true);
  const [showProjectsSection, setShowProjectsSection] = useState(true); 
  // TODO: Fix this? Showing YES on desktop
  const isOnMobile = useRef(isUserOnMobile());

  // TODO: Clean this up
  useEffect(() => {
    console.log(`Loaded! Mobile? ${isOnMobile.current === true ? "true" : "false"}`);

    return () => {
      // console.log("No longer loaded!");
    };
  }, []);


  return (
    <IsMobileContext.Provider value={isOnMobile}>
      <div className={`${isOnMobile.current ? "mobile" : ""}`}>
        <Header />
        {showAboutSection && <AboutMeSection />}
        {showProjectsSection && <ProjectsSection />}
      </div>
    </IsMobileContext.Provider>
  )
}

export default App
