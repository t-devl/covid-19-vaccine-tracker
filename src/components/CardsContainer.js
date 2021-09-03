import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function CardsContainer({ displayedData, sortOption }) {
  const [cardClicked, setCardClicked] = useState("");

  const activateModal = (name) => {
    setCardClicked(name);
  };

  return (
    <div className="cards-container">
      {displayedData.map((item, index) => (
        <Card
          key={item.name}
          data={item}
          sortOption={sortOption}
          rank={index + 1}
          activateModal={activateModal}
          cardClicked={cardClicked}
        ></Card>
      ))}
    </div>
  );
}
