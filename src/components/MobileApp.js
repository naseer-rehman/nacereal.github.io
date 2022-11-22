// import NameTitle from "./NameTitle";
// import AboutCard from "./AboutCard";
// import ProjectsListCard from "./ProjectsListCard";
// import ContactCard from "./ContactCard";
// import DinoCard from "./DinoCard";
import MobileCarousel from "./MobileCarousel";
import MobileMenuBar from "./MobileMenuBar";

const MobileApp = () => {
  return (
    <div className="App MobileView">
      {/* 
        -> Page content container
          -> Carousel of pages
          -> Do I render every menu or only introduce them when they are transitioning?
        -> Bottom page selector bar container
          -> Page selection bar
      */}
      <MobileCarousel />
      <MobileMenuBar />
    </div>
  );
};

export default MobileApp;
