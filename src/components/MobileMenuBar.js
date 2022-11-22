import "./styles/MobileMenuBar.scss";
import { useRef, useState, useEffect } from "react";

const AboutIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path d="M16 16a7 7 0 1 0-7-7 7 7 0 0 0 7 7Zm0-12a5 5 0 1 1-5 5 5 5 0 0 1 5-5ZM17 18h-2A11 11 0 0 0 4 29a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1 11 11 0 0 0-11-11ZM6 28a9 9 0 0 1 9-8h2a9 9 0 0 1 9 8Z"/>
    </svg>
  );
};

const ProjectsIcon = () => {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 467 467" stroke="#434343" strokeWidth="4px">
      <path d="m311 171 44 16a9 9 0 0 0 3 0 9 9 0 0 0 8-6l11-30a9 9 0 0 0-5-11l-45-16c-4-2-9 1-11 5l-11 30a9 9 0 0 0 6 12zm19-27 27 10-5 13-27-10 5-13z"/>
      <circle cx="110.1" cy="397.9" r="9.4"/>
      <path d="m307 248 3-2a128 128 0 0 1 41-28l59-25 20-8 14-12c29-29 31-76 3-107a9 9 0 0 0-15 3l-21 58-16-6 22-62a9 9 0 0 0-9-12 78 78 0 0 0-64 55l-37-14a9 9 0 0 0-12 7l-9 46c-4 22-13 42-27 59l-79-79 5-6a9 9 0 0 0 0-13l-5-6c18-22 41-23 58-20a9 9 0 0 0 8-14c-8-10-17-18-29-23-28-13-61-8-85 10l-5-5a9 9 0 0 0-12 0L60 99a9 9 0 0 0 0 13c3 3 2 10-3 15s-12 6-15 3a9 9 0 0 0-13 0L3 156a9 9 0 0 0 0 13l58 58a9 9 0 0 0 12 0l27-26a9 9 0 0 0 0-13c-3-3-2-10 3-15s12-6 15-3a9 9 0 0 0 13 0l5-5 79 79L85 375a34 34 0 0 0 0 48 34 34 0 0 0 48 0l130-131 141 141a9 9 0 0 0 12 0l32-32a9 9 0 0 0 0-12L307 248zm87-178-16 45-17-7a60 60 0 0 1 33-38zM209 55a65 65 0 0 1 5 3c-19 2-35 11-47 26l-22-22c19-13 43-16 64-7zm-88 8 45 46-41 41-45-46 41-41zM67 208l-45-45 14-14 45 45-14 14zm23-48-7 11-24-24a36 36 0 0 0 19-20l25 25-13 8zm59-8 18-19 80 80-19 18-79-79zm-29 258a16 16 0 0 1-11 5 16 16 0 0 1-12-5c-6-6-6-16 0-23l166-166c21-21 35-47 41-76l6-36 103 38c5 2 10-1 11-5l19-50a60 60 0 0 1-22 77l-19 8-58 25a146 146 0 0 0-47 31L120 410zm290 3L276 280l19-19 134 134-19 18z"/>
    </svg>

  );
};

const ContactIcon = () => {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.86 455.86" style={{enableBackground: "new 0 0 455.861 455.861"}}>
      <path d="m52.62 139.03 102.42 88.9-102.42 88.9a14.78 14.78 0 0 0 19.36 22.31l105.6-91.65 40.67 35.3a14.74 14.74 0 0 0 19.37 0l40.66-35.3 105.6 91.65a14.78 14.78 0 0 0 19.37-22.31l-102.43-88.9 102.43-88.9a14.77 14.77 0 1 0-19.37-22.31L227.93 252.06 71.98 116.72a14.78 14.78 0 0 0-19.36 22.31z"/>
      <path d="M441.09 63.15H14.77A14.78 14.78 0 0 0 0 77.93v300c0 8.16 6.62 14.78 14.77 14.78H441.1c8.16 0 14.77-6.62 14.77-14.78v-300c0-8.16-6.61-14.78-14.77-14.78zm-14.78 300H29.55V92.7H426.3v270.46z"/>
    </svg>
  );
};

const MobileMenuBar = () => {
  return (
    <div className="MobileMenuBar menu-bar-container">
      <div className="menu-bar">
        <button className="menu-item" style={{"--highlight-color": "#DCADF2"}}>
          <div className="icon-container">
            <AboutIcon />
          </div>
        </button>
        <button className="menu-item" style={{"--highlight-color": "#A3D8FF"}}>
          <div className="icon-container">
            <ProjectsIcon />
          </div>
        </button>
        <button className="menu-item" style={{"--highlight-color":"#A9FFC1"}} data-active>
          <div className="icon-container">
            <ContactIcon />
          </div>
        </button>
        <div className="menu-bar-item-highlight"></div>
      </div>
    </div>
  );
};

export default MobileMenuBar;
