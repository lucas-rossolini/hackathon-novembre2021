import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/logo.png";
import "./Header.css";

function Header() {
  const [isChecked, setIsChecked] = React.useState("");
  function handleIsChecked() {
    if (isChecked === "") {
      setIsChecked("checked");
    } else {
      setIsChecked("");
    }
  }
  return (
    <div>
      <div className="nameLogo ">
        <h1 className="nameApp">WildVibes</h1>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <input
          id="burger"
          type="checkbox"
          checked={isChecked}
          readOnly={true}
        />
        <label id="label-burger" htmlFor="burger" onClick={handleIsChecked}>
          <span id="burger-top"></span>
          <span id="burger-middle"></span>
          <span id="burger-bottom"></span>
        </label>
        <nav id="nav-header">
          <ul>
            <li>
              <Link to="/" className="a" onClick={handleIsChecked}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/search" className="a" onClick={handleIsChecked}>
                Search
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="a" onClick={handleIsChecked}>
                Favorites
              </Link>
            </li>
            <li>
              <Link to="/Player" className="a" onClick={handleIsChecked}>
                Player
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
