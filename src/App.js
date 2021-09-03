import { useState, useEffect } from "react";
import "./App.css";
import CardsContainer from "./components/CardsContainer";
import Filter from "./components/Filter";
import Sort from "./components/Sort";

function App() {
  const [filterOption, setFilterOption] = useState("");
  const [sortOption, setSortOption] = useState("Alphabetical (A-Z)");
  const [countries, setCountries] = useState([]);
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
      setCountries([...data.countries]);
      setWorld([...data.world]);
      setFilterOption("Country");
    } else {
      fetch("https://covid-api.mmediagroup.fr/v1/vaccines")
        .then((res) => res.json())
        .then((data) => {
          let countries = [];
          let world = [];

          Object.keys(data).forEach((key) => {
            switch (key) {
              case "World":
                world.push({
                  name: key,
                  vaccinesAdministered: data[key].All.administered,
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
                const { All: country, ...regions } = data[key];
                countries.push({
                  name: key,
                  vaccinesAdministered: country.administered,
                  peopleVaccinated: country.people_vaccinated,
                  peoplePartiallyVaccinated:
                    country.people_partially_vaccinated,
                  population: country.population,
                  continent: country.continent,
                  location: country.location,
                  capital: country.capital_city,
                  lastUpdated: country.updated,
                  regions: regions,
                });
                break;
            }
          });
          return {
            countries,
            world,
          };
        })
        .then((arrays) => {
          console.log(arrays.countries);
          setCountries([...arrays.countries]);
          setWorld([...arrays.world]);
          setFilterOption("Country");

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
    if (filterOption === "Country") {
      setDisplayedData(countries);
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
