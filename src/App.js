import { useState, useEffect } from "react";
import "./App.css";
import CardsContainer from "./components/CardsContainer";
import Filter from "./components/Filter";
import Sort from "./components/Sort";

function App() {
  const [filterOption, setFilterOption] = useState("");
  const [sortOption, setSortOption] = useState("Alphabetical (A-Z)");
  const [sovereignStates, setSovereignStates] = useState([]);
  const [unitedKingdom, setUnitedKingdom] = useState([]);
  const [europeanUnion, setEuropeanUnion] = useState([]);
  const [continents, setContinents] = useState([]);
  const [world, setWorld] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("covidVaccineData")) &&
      Date.now() -
        JSON.parse(localStorage.getItem("covidVaccineData")).timestamp <
        60 * 60 * 1000
    ) {
      let data = JSON.parse(localStorage.getItem("covidVaccineData"));
      setSovereignStates([...data.sovereignStates]);
      setUnitedKingdom([...data.unitedKingdom]);
      setEuropeanUnion([...data.europeanUnion]);
      setContinents([...data.continents]);
      setWorld([...data.world]);
      setFilterOption("Sovereign state");
    } else {
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
                  peopleVaccinated: data[key].All.people_partially_vaccinated,
                  peoplePartiallyVaccinated: data[key].All.people_vaccinated,
                  population: data[key].All.population,
                  continent: data[key].All.continent,
                  location: data[key].All.location,
                  lastUpdated: data[key].All.updated,
                });
                break;
              case "European Union":
                europeanUnion.push({
                  name: key,
                  vaccinesAdministered: data[key].All.administered,
                  peopleVaccinated: data[key].All.people_partially_vaccinated,
                  peoplePartiallyVaccinated: data[key].All.people_vaccinated,
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
                  vaccinesAdministered: data[key].All.administered,
                  peopleVaccinated: data[key].All.people_partially_vaccinated,
                  peoplePartiallyVaccinated: data[key].All.people_vaccinated,
                  lastUpdated: data[key].All.updated,
                });
                break;
              case "World":
                world.push({
                  name: key,
                  vaccinesAdministered: data[key].All.administered,
                  peopleVaccinated: data[key].All.people_partially_vaccinated,
                  peoplePartiallyVaccinated: data[key].All.people_vaccinated,
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
                  peopleVaccinated: data[key].All.people_partially_vaccinated,
                  peoplePartiallyVaccinated: data[key].All.people_vaccinated,
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
          setFilterOption("Sovereign state");

          localStorage.setItem(
            "covidVaccineData",
            JSON.stringify({
              ...arrays,
              timestamp: Date.now(),
            })
          );
        });
    }
  }, []);

  useEffect(() => {
    if (filterOption === "Sovereign state") {
      setDisplayedData(sovereignStates);
    } else {
      setDisplayedData(continents);
    }
    setSortOption("Alphabetical (A-Z)");
  }, [filterOption]);

  useEffect(() => {
    if (sortOption === "Alphabetical (A-Z)") {
      const sortedData = [...displayedData].sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
      setDisplayedData(sortedData);
    } else if (sortOption === "Most vaccines administered") {
      const sortedData = [...displayedData].sort((a, b) =>
        a.vaccinesAdministered < b.vaccinesAdministered ? 1 : -1
      );
      setDisplayedData(sortedData);
    } else if (sortOption === "Highest percentage vaccinated") {
      const sortedData = [...displayedData].sort((a, b) =>
        (a.population ? a.peoplePartiallyVaccinated / a.population : -1) <
        (b.population ? b.peoplePartiallyVaccinated / b.population : -1)
          ? 1
          : -1
      );
      setDisplayedData(sortedData);
    }
  }, [sortOption]);

  return (
    <div className="App">
      <h1 className="title">COVID-19 Vaccine Tracker</h1>
      <Filter
        filterOption={filterOption}
        setFilterOption={setFilterOption}
      ></Filter>
      <Sort
        sortOption={sortOption}
        setSortOption={setSortOption}
        filterOption={filterOption}
      ></Sort>
      <CardsContainer
        displayedData={displayedData}
        sortOption={sortOption}
      ></CardsContainer>
    </div>
  );
}

export default App;
