import React from "react";
import Card from "./Card";

const CardList = ({ cards, handleRemove }) => {
  return (
    <div className='card-list'>
      {cards.map((card) => {
        return <Card key={card.id} card={card} handleRemove={handleRemove}/>;
      })}
    </div>
  );
};

export default CardList;
