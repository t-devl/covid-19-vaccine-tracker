import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function CardsContainer({ displayedData }) {
  return (
    <div className="cards-container">
      {displayedData.map((item) => (
        <Card key={item.name} data={item}></Card>
      ))}
    </div>
  );
}
