import React from "react";
import { Select, MenuItem } from "@material-ui/core";

const countryMenu = ({ countries, input, setInput }) => {
  const styles = {
    width: 250,
    height: 35,
    marginLeft: 250,
    marginTop: 20,
  };

  return (
    <>
      <Select
        variant="outlined"
        style={styles}
        value={input}
        onChange={e => setInput(e.target.value)}>
        <MenuItem value="WorldWide">
          <em>WorldWide</em>
        </MenuItem>
        {countries.map(({ country }, i) => (
          <MenuItem key={i} value={country.toLowerCase()}>
            {country}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default React.memo(countryMenu);
