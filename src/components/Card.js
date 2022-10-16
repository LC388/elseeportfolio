import React from "react";
import { motion } from "framer-motion";

const Card = (props) => {

  const truncate=(str) => {
    return str.length > 100 ? str.substring(0, 100) + "..." : str;
}

  return (
    <>
      <motion.div
        className="card--container"
        whileHover={{ scale: 1.5}}
        animate={{}}
      >
        <div className="image--container">
          <img src={require(`../images/${props.image}`)} alt="code snippet" className="card--image" />
        </div>
        <div className="card--content">
          <div className="title">
            <h3>{props.title}</h3>
          </div>
          <div className="cardbody">
            <p className="card--description">{truncate(props.description)}
            </p>
          </div>
          <div className="btn">
            <button>
              <a href="/">view more</a>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
