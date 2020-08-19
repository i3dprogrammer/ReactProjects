import React from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ cards }) => {
  return (
    <div className="card-container">
      {cards.map((card) => {
        return <Card card={card} />;
      })}
    </div>
  );
};

CardList.defaultProps = {
  cards: [],
};

export default CardList;
