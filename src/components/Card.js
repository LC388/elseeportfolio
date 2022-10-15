import React from 'react'
import pizza from "../images/pizza.png"
import { motion } from 'framer-motion'

const Card = () => {
  return (
    <>
    <motion.div className='card--container'
    whileHover={{scale: 1.5, originY: -0.2, originX: 2}}
    animate={{}}>
    <div className='image--container'>
    <img src={pizza} alt="code snippet" className='card--image' />
    </div>
<div className="card--content">
    <div className="title"><h3>title</h3></div>
    <div className="cardbody"><p>body</p></div>
    </div>
    <div className="btn"><button>
        <a href='/'>view more</a>
    </button></div>
</motion.div>
    </>
  )
}

export default Card