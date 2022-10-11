import React from 'react'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import email from '../images/email.png'

function Footer() {
  return (
    <div className='footer--container'>
    <img src={github} alt="github logo" className='footer--icon'/>
    <img src={linkedin} alt="linkedin logo" className='footer--icon'/>
    <img src={email} alt="email logo" className='footer--icon'/>
    </div>  
  )
}

export default Footer