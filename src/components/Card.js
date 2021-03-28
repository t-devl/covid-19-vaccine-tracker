import React from "react";

export default function Card({ data }) {
  return (
    <div className="card">
      <h3 className="card__name">{data.name}</h3>
      <p className="card__partially-vaccinated">
        Partially vaccinated: {data.peoplePartiallyVaccinated}{" "}
        {data.population
          ? `(${(
              (data.peoplePartiallyVaccinated / data.population) *
              100
            ).toFixed(2)}%)`
          : ""}
      </p>
      <p className="card__fully-vaccinated">
        Fully vaccinated: {data.peopleVaccinated}{" "}
        {data.population
          ? `(${((data.peopleVaccinated / data.population) * 100).toFixed(2)}%)`
          : ""}
      </p>
    </div>
  );
}
