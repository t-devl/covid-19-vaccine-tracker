import React from "react";

export default function Card({ data, sortOption, rank }) {
  return (
    <div
      className={`card ${
        (!data.population || data.peoplePartiallyVaccinated === 0) &&
        sortOption === "Highest percentage vaccinated"
          ? "card--grey"
          : ""
      }`}
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
    </div>
  );
}
