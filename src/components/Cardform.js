import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Cardform = ({ addCard }) => {
  const [card, setCard] = useState({
    id: "",
    text: "",
  });

  const handleInputChange = (e) => {
    setCard({ ...card, text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (card.text.trim()) {
      addCard({ ...card, id: uuidv4() });
      setCard({ ...card, text: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='card-form'>
      <input type='text' value={card.text} onChange={handleInputChange} />
      <button type='submit'>ADD</button>
    </form>
  );
};

export default Cardform;
