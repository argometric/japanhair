import React from "react";
import { makeStyles } from "@material-ui/core/styles";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("08:00", 159, "", 24, 4.0),
  createData("09:00", 159, "", 24, 4.0),
  createData("10:00", 159, "", 24, 4.0),
  createData("11:00", 159, "", 24, 4.0),
  createData("12:00", 159, "", 24, 4.0),
  createData("13:00", 159, "", 24, 4.0),
  createData("14:00", 159, "", 24, 4.0),
  createData("15:00", 159, "", 24, 4.0),
  createData("16:00", 159, "", 24, 4.0),
  createData("17:00", 159, "", 24, 4.0),
  createData("18:00", 159, "", 24, 4.0),
  createData("19:00", 159, "", 24, 4.0)
];

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    width: "100%",
    border: "none",
    borderCollapse: "collapse"
  }
}));

const CalendarPage = () => {
  const classes = useStyles();
  return (
    <>
      <table className={classes.table} stickyHeader>
        <thead>
          <tr>
            <td>Hour</td>
            <td align="center">Calories</td>
            <td align="center">Fat&nbsp;(g)</td>
            <td align="center">Carbs&nbsp;(g)</td>
            <td align="center">Protein&nbsp;(g)</td>
          </tr>
        </thead>
        <tbody id="TimeTable">
          {rows.map(row => (
            <tr key={row.name}>
              <th component="th">{row.name}</th>
              <td align="center">
                <input type="text" value={row.calories}></input>
              </td>
              <td align="center">
                <input type="text" value={row.fat}></input>
              </td>
              <td align="center">
                <input type="text" value={row.carbs}></input>
              </td>
              <td align="center">
                {" "}
                <input type="text" value={row.protein}></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CalendarPage;
