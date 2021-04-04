import React from "react";
import Card from "./Card";

export default function CardsContainer({ displayedData, sortOption }) {
  return (
    <div className="cards-container">
      {displayedData.map((item, index) => (
        <Card
          key={item.name}
          data={item}
          sortOption={sortOption}
          rank={index + 1}
        ></Card>
      ))}
    </div>
  );
}
