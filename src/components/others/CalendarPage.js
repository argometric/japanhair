import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getShops } from "../../api/shopAPI";
import TableSlot from "./Tableslot";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    width: "100%",
    border: "none",
    borderCollapse: "collapse",
    textAlign: "center"
  }
}));

const CalendarPage = props => {
  const [shops, setShops] = useState([]);
  let slots;
  let openingTimes;
  let closingTimes;
  let service;

  useEffect(() => {
    getShops().then(_shops => setShops(_shops));
  }, []);
  shops.forEach(s => {
    if (props.props === s.name) {
      openingTimes = s.openingTimes / 100;
      closingTimes = s.closingTimes / 100;
      slots = s.slots;
      service = s.service;
    }
  });

  const amountOfHours = closingTimes - openingTimes;

  const createData = (hour, slots) => {
    return { hour, slots };
  };

  const rows = [];
  for (let i = 0; i < amountOfHours; i++) {
    rows.push(createData((openingTimes + i).toString() + ":00", slots));
    rows.push(createData((openingTimes + i).toString() + ":30", slots));
  }

  const classes = useStyles();
  return (
    <>
      <table className={classes.table}>
        <thead>
          <tr>
            <td>Hour</td>
            <td align="center">Slots</td>
          </tr>
        </thead>
        <tbody id="TimeTable">
          {rows.map(row => (
            <tr key={row.hour}>
              <th component="th">{row.hour}</th>
              <TableSlot align="center" value={row.slots} service={service} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CalendarPage;
