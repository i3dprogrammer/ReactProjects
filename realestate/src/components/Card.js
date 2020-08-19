import React from "react";
import "./Card.css";

const Card = ({ card }) => {
  return (
    <div className="container">
      <div className="Card">
        <div className="title">{card.title}</div>
        <img className="image" src="assets/room.jpg" alt="room" />
        <div className="description">
          <div className="data">
            <div className="location">{card.location}</div>
            <div className="price">{card.price}</div>
            <div className="area">{card.area}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
