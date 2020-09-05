import axios from "axios";

const URL = "https://disease.sh/v3/covid-19";

export const fetchGlobalData = async () => {
  try {
    const { data } = await axios.get(`${URL}/all`);

    const response = {
      cases: data.cases,
      active: data.active,
      deaths: data.deaths,
      recovered: data.recovered,
      todayCases: data.todayCases,
      todayDeaths: data.todayDeaths,
      todayRecovered: data.todayRecovered,
      updated: new Date(data.updated).toLocaleString(),
    };

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountriesData = async () => {
  try {
    const { data } = await axios.get(`${URL}/countries`);
    const response = data.map(obj => {
      const {
        country,
        cases,
        active,
        deaths,
        recovered,
        todayCases,
        todayDeaths,
        todayRecovered,
      } = obj;
      return {
        country,
        cases,
        active,
        deaths,
        recovered,
        todayCases,
        todayDeaths,
        todayRecovered,
      };
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountryData = async country => {
  try {
    if (country === "WorldWide") return fetchGlobalData();

    const { data } = await axios.get(`${URL}/countries/${country}`);
    const response = {
      cases: data.cases,
      active: data.active,
      deaths: data.deaths,
      recovered: data.recovered,
      todayCases: data.todayCases,
      todayDeaths: data.todayDeaths,
      todayRecovered: data.todayRecovered,
      updated: new Date(data.updated).toLocaleString(),
    };

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const dailyLineData = async () => {
  const { data } = await axios.get(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=215"
  );

  const day = (Object.keys(data.cases));
  const cases = Object.values(data.cases);
  const deaths = Object.values(data.deaths);
  const recovered = Object.values(data.recovered);

  return { day, cases, deaths, recovered };
};
