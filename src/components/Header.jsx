import "../styles/Header.scss";
import { useState } from "react";

function Header() {
  const [commandText, setCommandText] = useState("");
  // TODO: determine if the command line should be on a separate line from the user+host text
  return (
    <h1 className="header" aria-label="Naseer Rehman">
      <span className="header__hostline">
        naseer-rehman@mywebsite
        {/* <span className="header__new-message">New!</span> */}
      </span>
      <span className="header__colon">:</span>
      <span className="header__tilda">~</span>
      <span className="header__dollar">$</span>
      <span className="header__command-text">{commandText}</span>
      <span className="header__cursor header__cursor--flashing" />
    </h1>
  );
}

export default Header;