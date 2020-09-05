import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { dailyLineData } from "./FetchData";

const Charts = ({ countries, country, name }) => {
  const [dayResult, setDayResult] = useState({});

  useEffect(() => {
    const getDays = async () => {
      const response = await dailyLineData();
      setDayResult(response);
    };
    getDays();
  }, []);

  const lineChart = () => {
    const lineData = {
      labels: dayResult.day,
      datasets: [
        {
          label: "Cases",
          data: dayResult.cases,
          backgroundColor: "rgba(23, 79, 234, 0.5)",
          pointBorderColor: "grey",
        },
        {
          label: "Recovered",
          data: dayResult.recovered,
          backgroundColor: "rgba(137, 203, 72, 0.5)",
          pointBorderColor: "grey",
        },
        {
          label: "Deaths",
          data: dayResult.deaths,
          backgroundColor: "rgba(234, 72, 23, 0.5)",
          pointBorderColor: "grey",
        },
      ],
    };

    return lineData;
  };

  const barChart = () => {
    const barData = {
      labels: ["Cases", "Active", "Recoverd", "Deaths"],
      datasets: [
        {
          label: "People",
          backgroundColor: [
            "rgba(23, 79, 234, 0.8)",
            "rgba(234, 178, 23, 0.8)",
            "rgba(137, 203, 72, 0.8)",
            "rgba(234, 72, 23, 0.8)",
          ],
          data: [
            country.cases,
            country.active,
            country.recovered,
            country.deaths,
          ],
        },
      ],
    };

    const options = {
      legend: { display: false },
      title: {
        display: true,
        text: `${name.toUpperCase()}`,
      },
    };
    return [barData, options];
  };

  if (name === "WorldWide") return <Line data={lineChart()} />;
  else {
    const [barData, options] = barChart();
    return <Bar data={barData} options={options} />;
  }
};

export default Charts;
