import React from "react";
import styles from "./RenderData.module.css";
import CountUp from "react-countup";
import { Card, CardContent, Typography } from "@material-ui/core";

const RenderData = ({ data }) => {
  const {
    cases,
    deaths,
    active,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
  } = data;

  return (
    <>
      <Card className={styles.cases_card}>
        <CardContent>
          <Typography
            variant="body2"
            align="center"
            className={styles.cases_data}>
            CASES
          </Typography>
          <Typography variant="h6" align="center">
            <CountUp start={0} end={cases} duration={2.5} separator="," />
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" align="center">
            Today:
            <CountUp start={0} end={todayCases} duration={1.5} separator="," />
          </Typography>
        </CardContent>
      </Card>
      <Card className={styles.active_card}>
        <CardContent>
          <Typography
            variant="body2"
            align="center"
            className={styles.active_data}>
            ACTIVE
          </Typography>
          <Typography variant="h6" align="center">
            <CountUp start={0} end={active} duration={2.5} separator="," />
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" align="center">
            As of now
          </Typography>
        </CardContent>
      </Card>
      <Card className={styles.recovered_card}>
        <CardContent>
          <Typography
            variant="body2"
            align="center"
            className={styles.recovered_data}>
            RECOVERED
          </Typography>
          <Typography variant="h6" align="center">
            <CountUp start={0} end={recovered} duration={2.5} separator="," />
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" align="center">
            Today:
            <CountUp
              start={0}
              end={todayRecovered}
              duration={1.5}
              separator=","
            />
          </Typography>
        </CardContent>
      </Card>
      <Card className={styles.deaths_card}>
        <CardContent>
          <Typography
            variant="body2"
            align="center"
            className={styles.deaths_data}>
            DEATHS
          </Typography>
          <Typography variant="h6" align="center">
            <CountUp start={0} end={deaths} duration={2.5} separator="," />
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" align="center">
            Today:
            <CountUp start={0} end={todayDeaths} duration={1.5} separator="," />
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default React.memo(RenderData);
