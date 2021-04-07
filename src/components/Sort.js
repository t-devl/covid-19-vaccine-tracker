import React from "react";

export default function Sort({ sortOption, setSortOption, filterOption }) {
  return (
    <div className="sort">
      <label className="sort__label">Sort by:</label>
      <select
        className="sort__select"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option className="sort__option">Alphabetical (A-Z)</option>
        <option className="sort__option">Most vaccines administered</option>
        {filterOption === "Country" ? (
          <option className="sort__option">
            Highest percentage vaccinated
          </option>
        ) : (
          ""
        )}
      </select>
    </div>
  );
}
