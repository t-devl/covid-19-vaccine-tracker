import React, { useEffect, useState } from "react";
import Regions from "./Regions";

export default function Modal({
  data,
  active,
  setCardClicked,
  rank,
  numberOfCards,
}) {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isRegionsActive, setIsRegionsActive] = useState(false);

  useEffect(() => {
    setIsModalActive(active);
  }, [active]);

  const closeModal = (e) => {
    e.stopPropagation();
    setIsModalActive(false);
    setCardClicked(null);
  };

  const toggleRegions = () => {
    if (isRegionsActive) {
      setIsRegionsActive(false);
    } else {
      setIsRegionsActive(true);
    }
  };

  const previousCard = (e, rank) => {
    e.stopPropagation();
    if (rank > 1) {
      setCardClicked(rank - 1);
    }
  };

  const nextCard = (e, rank) => {
    e.stopPropagation();
    if (rank < numberOfCards) {
      setCardClicked(rank + 1);
    }
  };

  return (
    <div
      className={`modal-container ${
        isModalActive ? "modal-container--active" : ""
      }`}
    >
      <div
        className={`modal ${isRegionsActive ? "modal--regions-active" : ""}`}
      >
        <header className="modal__header">
          <div className="modal__top-bar">
            <span className="modal__continent">{data.continent}</span>
            <button className="modal__close-btn" onClick={closeModal}>
              <i className="fas fa-times modal__close-icon"></i>
            </button>
          </div>
          <div className="modal__header-main">
            <button
              className="modal__arrow-btn"
              onClick={(e) => {
                previousCard(e, rank);
              }}
            >
              <i className="fas fa-chevron-circle-left modal__arrow-icon"></i>
            </button>
            <div className="modal__header-details">
              <h2 className="modal__country">{data.name}</h2>
              <h3 className="modal__capital">Capital: {data.capital}</h3>
              <p className="modal__population">
                Population:{" "}
                {data.population ? data.population.toLocaleString() : "N/A"}
              </p>
            </div>
            <button
              className="modal__arrow-btn"
              onClick={(e) => {
                nextCard(e, rank);
              }}
            >
              <i className="fas fa-chevron-circle-right modal__arrow-icon"></i>
            </button>
          </div>
        </header>
        <ul className="modal__list">
          <li className="modal__list-item">
            Vaccines administered: {data.vaccinesAdministered.toLocaleString()}
          </li>
          <li className="modal__list-item">
            Partially vaccinated:{" "}
            {data.peoplePartiallyVaccinated.toLocaleString()}{" "}
            {data.population
              ? `(${(
                  (data.peoplePartiallyVaccinated / data.population) *
                  100
                ).toFixed(2)}%)`
              : ""}
          </li>
          <li className="modal__list-item">
            Fully vaccinated: {data.peopleVaccinated.toLocaleString()}{" "}
            {data.population
              ? `(${((data.peopleVaccinated / data.population) * 100).toFixed(
                  2
                )}%)`
              : ""}
          </li>
        </ul>
        <p className="modal__last-updated">
          Last updated: {new Date(data.lastUpdated).toLocaleString()}
        </p>

        {Object.keys(data.regions).length > 0 ? (
          <div className="regions-container">
            <button className="view-regions-btn" onClick={toggleRegions}>
              {isRegionsActive ? "Hide Regions" : "Show Regions"}
            </button>
            <Regions
              regions={data.regions}
              isRegionsActive={isRegionsActive}
            ></Regions>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
