import React from "react";
import copyright from "../images/copyright.png"


function Underlay() {


  return (
    <div className="underlay--container">
    <img src={copyright} alt="symbol" className="underlay--icon"/>
    <p className="underlay--p">Lauren Clements</p>
    </div>
  );
}

export default Underlay;
