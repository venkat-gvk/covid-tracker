import React, { useState, useEffect } from "react";
import RenderData from "./RenderData";
import CountryMenu from "./CountryMenu";
import CountryTable from "./CountryTable";
import { sortByCases } from "./utility";

import {
  fetchGlobalData,
  fetchCountriesData,
  fetchCountryData,
} from "./FetchData";

import { RingLoader } from "react-spinners";
import { Typography } from "@material-ui/core";

import "./Main.css";
import Charts from "./Charts";

const Main = () => {
  // worldwide data and countries data
  const [globalData, setGlobalData] = useState({});
  const [countries, setCountries] = useState([]);
  const [sortedCountries, setSortedCountries] = useState([]);

  // Each country data and input to fetch each country
  const [country, setCountry] = useState({});
  const [input, setInput] = useState("WorldWide");
  const [initial, setInitial] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const global = await fetchGlobalData();
      setGlobalData(global);

      const allCountries = await fetchCountriesData();
      setCountries(allCountries);
      setSortedCountries(sortByCases(allCountries));
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (initial && input === "WorldWide") {
      setCountry(globalData);
      return;
    }

    const fetchCountry = async () => {
      const response = await fetchCountryData(input);
      setCountry(response);
      setInitial(true);
    };

    fetchCountry();
  }, [input, initial]);

  const loadingScreen = (
    <div className="loading-screen">
      <RingLoader size={100} color="orange" loading />
    </div>
  );

  return (
    <>
      {Object.keys(countries).length ? (
        <div className="main__container">
          <div className="main__header">
            <header>
              <div className="main__corona-tracker">
                <Typography variant="h4" className="main__corona-tracker">
                  CORONA TRACKER
                </Typography>
              </div>
              <div className="main__last-updated">
                <Typography variant="body2">
                  LAST UPDATED AT {globalData.updated}
                </Typography>
              </div>
            </header>
          </div>

          <div className="main__body">
            <section className="main__section-container">
              <div className="main__section">
                <div className="main__worldwide">
                  <span className="main__text-worldwide">
                    <Typography color="secondary" variant="h6">
                      WORLDWIDE
                    </Typography>
                  </span>
                  <RenderData data={globalData} />
                </div>
                <div className="main__country">
                  <div className="main__country-renderdata">
                    <RenderData data={country} />
                  </div>
                  <div className="main__menubutton">
                    <CountryMenu
                      countries={countries}
                      input={input}
                      setInput={setInput}
                    />
                  </div>

                  <div className="main__charts">
                    <div className="chart">
                      <Charts
                        countries={countries}
                        country={country}
                        name={input}
                      />
                    </div>
                  </div>
                </div>

                <div className="main__country-list">
                  <div className="main__country-list-case-heading">
                    <Typography color="secondary" variant="h6">
                      HIGHEST CASES
                    </Typography>
                  </div>
                  <CountryTable countries={sortedCountries} />
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        loadingScreen
      )}
    </>
  );
};

export default Main;
