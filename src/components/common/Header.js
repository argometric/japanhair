import React from "react";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(
    localStorage.getItem("tabState") || 0
  );

  const handleChange = (event, newValue) => {
    localStorage.setItem("tabState", newValue);
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "orange"
          }
        }}
        centered
      >
        <Tab value="0" label="Home" component={NavLink} selected exact to="/" />
        <Tab
          value="1"
          label="Add Shop"
          component={NavLink}
          selected
          to="/shops"
        />
        <Tab value="2" label="Book" component={NavLink} selected to="/book" />
        <Tab value="3" label="Test" component={NavLink} selected to="/test" />
      </Tabs>
    </Paper>
  );
}
