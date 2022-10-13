import React from "react";
import { Link } from "react-router-dom";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import email from "../images/email.png";


function Footer() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

  return (
    <div className="footer--container">
    <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer">
        <img src={github} alt="github logo" className="footer--icon" />
        </a>
      <Link to="https://linkedin.com/elsee">
        <img src={linkedin} alt="linkedin logo" className="footer--icon" />
      </Link>
      <Link>
        <img src={email} alt="email logo" className="footer--icon" />
      </Link>
    </div>
  );
}

export default Footer;
