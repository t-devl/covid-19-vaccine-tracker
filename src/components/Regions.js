import React from "react";

export default function Regions({ regions, isRegionsActive }) {
  return (
    <div className={`regions ${isRegionsActive ? "regions--active" : ""}`}>
      <h2 className="regions__title">Vaccines administered:</h2>
      {Object.keys(regions).map((region) => (
        <div key={region} className="regions__region region">
          <h3 className="region__name">{region}</h3>
          <p className="region__vaccines-administered">
            {regions[region].administered.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
