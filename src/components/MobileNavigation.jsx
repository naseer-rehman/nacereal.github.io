import "../styles/MobileNavigation.scss";
import { useState } from "react";

const NavigationLink = ({children, active, changePage}) => {
  return (
    <a 
      onClick={changePage}
      href="#"
      className={`mobile-nav__link ${active === true ? "mobile-nav__link--active" : ""}`}
    >
      {children}
    </a>
  );
}

function MobileNavigation({currentPage, pages, setPage}) {
  return (
    <div className="mobile-nav-container">
      <nav className="mobile-nav">
        {pages.map(
          (page, ind) => 
            <NavigationLink 
              key={ind}
              changePage={() => setPage(page)}
              active={page === currentPage}
            >
              {page}
            </NavigationLink>
        )}
      </nav>
    </div>
  );
}

export default MobileNavigation;