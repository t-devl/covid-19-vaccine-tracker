import React from "react";

export default function Card({ data, sortOption }) {
  return (
    <div
      className={`card ${
        !data.population && sortOption === "Highest percentage vaccinated"
          ? "card--grey"
          : ""
      }`}
    >
      <h3 className="card__name">{data.name}</h3>
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
