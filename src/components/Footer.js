import React from 'react'
import { Link } from "react-router-dom";
import github from "../images/githubDark.png";
import linkedin from "../images/linkedinDark.png";
import email from "../images/emailDark.png";

const Footer = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    
  return (
    <div className='footer--container'>
    <a href="https://github.com/LC388" target="_blank" rel="noreferrer">
    <img src={github} alt="github logo" className="footer--icon" />
    </a>
  <a href='https://linkedin.com/elsee' target="_black" rel="noreferr">
    <img src={linkedin} alt="linkedin logo" className="footer--icon" />
  </a>
  <a href="mailto:elsee388@protonmail.com">
    <img src={email} alt="email logo" className="footer--icon" />
  </a>
  </div>
  )
}

export default Footer