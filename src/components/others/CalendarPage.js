import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import shopStore from "../../stores/shopStore";
import TableSlot from "./Tableslot";
import { loadShops } from "../../actions/shopActions";

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
  let openingHours;
  let openingMinutes;
  let closingHours;
  let closingMinutes;
  let service;

  useEffect(() => {
    shopStore.addChangeListerner(onChange);
    if (shopStore.getShops().length === 0) loadShops();
    return () => shopStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setShops(shopStore.getShops());
  }

  shops.forEach(s => {
    if (props.props === s.name) {
      openingHours = Math.trunc(s.openingTimes / 100);
      openingMinutes = Number((s.openingTimes - openingHours * 100).toFixed(2));
      closingHours = Math.trunc(s.closingTimes / 100);
      closingMinutes = Number((s.closingTimes - closingHours * 100).toFixed(2));
      slots = s.slots;
      service = s.service;
    }
  });
  let amountOfHours = closingHours - openingHours;

  const createData = (hour, slots) => {
    return { hour, slots };
  };

  const rows = [];
  if (openingMinutes === 0) {
    rows.push(createData(openingHours.toString() + ":00", slots));
    rows.push(createData(openingHours.toString() + ":15", slots));
    rows.push(createData(openingHours.toString() + ":30", slots));
    rows.push(createData(openingHours.toString() + ":45", slots));
  }
  if (openingMinutes === 15) {
    rows.push(createData(openingHours.toString() + ":15", slots));
    rows.push(createData(openingHours.toString() + ":30", slots));
    rows.push(createData(openingHours.toString() + ":45", slots));
  }
  if (openingMinutes === 30) {
    rows.push(createData(openingHours.toString() + ":30", slots));
    rows.push(createData(openingHours.toString() + ":45", slots));
  }
  if (openingMinutes === 45) {
    rows.push(createData(openingHours.toString() + ":45", slots));
  }
  for (let i = 1; i < amountOfHours; i++) {
    rows.push(createData((openingHours + i).toString() + ":00", slots));
    rows.push(createData((openingHours + i).toString() + ":15", slots));
    rows.push(createData((openingHours + i).toString() + ":30", slots));
    rows.push(createData((openingHours + i).toString() + ":45", slots));
  }
  if (closingMinutes === 15) {
    rows.push(createData(closingHours.toString() + ":00", slots));
  }
  if (closingMinutes === 30) {
    rows.push(createData(closingHours.toString() + ":00", slots));
    rows.push(createData(closingHours.toString() + ":15", slots));
  }
  if (closingMinutes === 45) {
    rows.push(createData(closingHours.toString() + ":00", slots));
    rows.push(createData(closingHours.toString() + ":15", slots));
    rows.push(createData(closingHours.toString() + ":30", slots));
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
