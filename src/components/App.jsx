import '../styles/App.scss'
import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import isUserOnMobile from "../modules/checkMobile.js";
import AboutMeSection from './AboutMeSection.jsx';

function App() {
  // TODO: use something like this for the animation
  const [showAboutSection, setShowAboutSection] = useState(false); 
  // TODO: Fix this? Showing YES on desktop
  // const isOnMobile = useRef(isUserOnMobile()); 

  // TODO: Clean this up
  useEffect(() => {
    // console.log(`Loaded! Mobile ${isOnMobile ? "YES" : "NO"}`);

    return () => {
      // console.log("No longer loaded!");
    };
  }, []);


  return (
    <>
      <Header />
      <AboutMeSection />
    </>
  )
}

export default App
