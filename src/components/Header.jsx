import "../styles/Header.scss";

function Header() {
  return (
    <h1 className="header" aria-label="Naseer Rehman">
      naseer-rehman@mywebsite
      <span className="header__colon">:</span>
      <span className="header__tilda">~</span>
      <span className="header__dollar">$</span>
      <span className="header__command-text"></span>
      <span className="header__cursor header__cursor--flashing" />
    </h1>
  );
}

export default Header;