import React from "react";

export default function Filter({ filterOption, setFilterOption }) {
  return (
    <div className="filter">
      <label className="filter__label">Vaccines administered by:</label>
      <select
        className="filter__select"
        value={filterOption}
        onChange={(e) => setFilterOption(e.target.value)}
      >
        <option className="filter__option">Country</option>
        <option className="filter__option">Continent</option>
      </select>
    </div>
  );
}
