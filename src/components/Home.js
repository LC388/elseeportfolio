import React from "react";
import Card from "./Card";
import proData from "../proData";

const cards = proData.map(item => {
  return(
    <Card
    key={item.id}
    image = {item.image}
    title = {item.title}
    description = {item.description}
    />
  )})

function home() {
  return (
    <div className="home--container">
      <div className="home--content">
       {cards}
       
      </div>
     
    </div>
  );
}

export default home;
