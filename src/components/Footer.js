import React, {Link} from 'react'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import email from '../images/email.png'

function Footer() {
  return (
    <div className='footer--container'>
    <Link ><img src={github} alt="github logo" className='footer--icon'/></Link>
    <Link><img src={linkedin} alt="linkedin logo" className='footer--icon'/></Link>
    <Link><img src={email} alt="email logo" className='footer--icon'/></Link>
    </div>  
  )
}

export default Footer