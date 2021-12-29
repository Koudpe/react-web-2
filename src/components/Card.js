import React from "react";
import Cardtitle from "./Cardtitle";

const Card = ({ card, handleRemove }) => {

  const removeHandle = () =>{
    handleRemove(card.id)
  }

  return (
    <div className='card'>
      <Cardtitle card={card} />
      <div className='remove-wrap'>
        <p className='remove' onClick={removeHandle}>X</p>
      </div>
    </div>
  );
};

export default Card;
