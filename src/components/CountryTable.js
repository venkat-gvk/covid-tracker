import React from "react";
import { Paper } from "@material-ui/core";

const CountryTable = ({ countries }) => {

  return (
    <Paper>
      <div className="country-table">
        <tbody>
          {countries.map(({ country, cases }, i) => (
            <tr key={i}>
              <td>{country}</td>
              <td>{cases}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </Paper>
  );
};

export default CountryTable;
