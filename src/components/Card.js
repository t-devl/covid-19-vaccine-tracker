import React from "react";
import Modal from "./Modal";

export default function Card({
  data,
  sortOption,
  rank,
  setCardClicked,
  cardClicked,
  numberOfCards,
}) {
  return (
    <div
      className={`card ${
        (!data.population || data.peoplePartiallyVaccinated === 0) &&
        sortOption === "Highest percentage vaccinated"
          ? "card--grey"
          : ""
      }`}
      onClick={() => setCardClicked(rank)}
    >
      <div className="card__index">{rank}</div>
      <h2 className="card__name">{data.name}</h2>
      <p className="card__vaccines-administered">
        {data.vaccinesAdministered.toLocaleString()} vaccines administered
      </p>
      <p className="card__partially-vaccinated">
        {data.peoplePartiallyVaccinated.toLocaleString()} partially vaccinated{" "}
        <span className="card__percentage">
          {data.population
            ? `(${(
                (data.peoplePartiallyVaccinated / data.population) *
                100
              ).toFixed(2)}%)`
            : ""}
        </span>
      </p>
      <p className="card__fully-vaccinated">
        {data.peopleVaccinated.toLocaleString()} fully vaccinated{" "}
        <span className="card__percentage">
          {data.population
            ? `(${((data.peopleVaccinated / data.population) * 100).toFixed(
                2
              )}%)`
            : ""}
        </span>
      </p>
      <Modal
        data={data}
        rank={rank}
        active={cardClicked === rank}
        setCardClicked={setCardClicked}
        numberOfCards={numberOfCards}
      ></Modal>
    </div>
  );
}
