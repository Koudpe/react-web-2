import React, { useState, useEffect } from "react";
import Cardlist from "./components/Cardlist";
import Cardform from "./components/Cardform";

const Page = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const storageCards = JSON.parse(localStorage.getItem("cards"));
    if (storageCards) {
      setCards(storageCards);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const addCard = (card) => {
    setCards([...cards, card]);
  };

  const handleRemove = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className='app'>
      <Cardform addCard={addCard} />
      <Cardlist cards={cards} handleRemove={handleRemove} />
    </div>
  );
};

export default Page;
