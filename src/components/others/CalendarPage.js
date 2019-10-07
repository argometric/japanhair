import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TextField } from "@material-ui/core";

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
    minWidth: 650
  }
}));

const CalendarPage = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.root}>
        <Table className={classes.table} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Hour</TableCell>
              <TableCell align="center">Calories</TableCell>
              <TableCell align="center">Fat&nbsp;(g)</TableCell>
              <TableCell align="center">Carbs&nbsp;(g)</TableCell>
              <TableCell align="center">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody id="TimeTable">
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">
                  <TextField>{row.calories}</TextField>
                </TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">
                  <>{row.carbs}</>
                </TableCell>
                <TableCell align="center">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

export default CalendarPage;
