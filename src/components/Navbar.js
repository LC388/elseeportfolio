import React from "react";
import tempLogo from "../images/tempLogo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={tempLogo} className="navbar--logo" alt="logo"/>
      <ul className="navbar--menu">
          <li className="navbar--item">About</li>
          <li className="navbar--item">Contact</li>
          <li className="navbar--item">Facts</li>
        </ul>
        
    </nav>
  );
}

export default Navbar;
