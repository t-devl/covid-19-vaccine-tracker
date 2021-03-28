import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function CardsContainer() {
  const [sovereignStates, setSovereignStates] = useState([]);
  const [unitedKingdom, setUnitedKingdom] = useState([]);
  const [europeanUnion, setEuropeanUnion] = useState([]);
  const [continents, setContinents] = useState([]);
  const [world, setWorld] = useState([]);

  useEffect(() => {
    fetch("https://covid-api.mmediagroup.fr/v1/vaccines")
      .then((res) => res.json())
      .then((data) => {
        let unitedKingdom = [];
        let europeanUnion = [];
        let sovereignStates = [];
        let continents = [];
        let world = [];

        Object.keys(data).forEach((key) => {
          switch (key) {
            case "England":
            case "Northern Ireland":
            case "Scotland":
            case "Wales":
              unitedKingdom.push({
                name: key,
                vaccinesAdministered: data[key].All.administered,
                peopleVaccinated: data[key].All.people_vaccinated,
                peoplePartiallyVaccinated:
                  data[key].All.people_partially_vaccinated,
                population: data[key].All.population,
                continent: data[key].All.continent,
                location: data[key].All.location,
                lastUpdated: data[key].All.updated,
              });
              break;
            case "European Union":
              europeanUnion.push({
                name: key,
                administered: data[key].All.administered,
                peopleVaccinated: data[key].All.people_vaccinated,
                peoplePartiallyVaccinated:
                  data[key].All.people_partially_vaccinated,
                lastUpdated: data[key].All.updated,
                population: data[key].All.population,
              });
              break;
            case "Europe":
            case "North America":
            case "South America":
            case "Oceania":
            case "Asia":
            case "Africa":
              continents.push({
                name: key,
                administered: data[key].All.administered,
                peopleVaccinated: data[key].All.people_vaccinated,
                peoplePartiallyVaccinated:
                  data[key].All.people_partially_vaccinated,
                lastUpdated: data[key].All.updated,
              });
              break;
            case "World":
              world.push({
                name: key,
                administered: data[key].All.administered,
                peopleVaccinated: data[key].All.people_vaccinated,
                peoplePartiallyVaccinated:
                  data[key].All.people_partially_vaccinated,
                lastUpdated: data[key].All.updated,
                population: data["Global"].All.population,
              });
              break;
            case "Global":
              break;
            default:
              sovereignStates.push({
                name: key,
                vaccinesAdministered: data[key].All.administered,
                peopleVaccinated: data[key].All.people_vaccinated,
                peoplePartiallyVaccinated:
                  data[key].All.people_partially_vaccinated,
                population: data[key].All.population,
                continent: data[key].All.continent,
                location: data[key].All.location,
                lastUpdated: data[key].All.updated,
              });
              break;
          }
        });
        return {
          sovereignStates,
          unitedKingdom,
          europeanUnion,
          continents,
          world,
        };
      })
      .then((arrays) => {
        setSovereignStates([...arrays.sovereignStates]);
        setUnitedKingdom([...arrays.unitedKingdom]);
        setEuropeanUnion([...arrays.europeanUnion]);
        setContinents([...arrays.continents]);
        setWorld([...arrays.world]);
      });
  }, []);

  return (
    <div className="cards-container">
      {sovereignStates.map((state) => (
        <Card key={state.name} data={state}></Card>
      ))}
    </div>
  );
}
