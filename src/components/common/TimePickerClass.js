import React, { useState } from "react";
import { TimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

function TimePickerClass(props) {
  let moment = require("moment");
  let time = moment().toDate();
  time.setHours(props.hour);
  time.setMinutes(0);
  time.setSeconds(0);
  time.setMilliseconds(0);

  const [selectedDate, handleDateChange] = useState(time);

  moment().format();
  const onChange = date => {
    handleDateChange(date);
    let parsedDate = moment(date).format("HHmm");
    props.onChange(props.name, parsedDate);
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <TimePicker
          inputVariant="outlined"
          ampm={false}
          showTodayButton
          todayLabel="Current Time"
          label={props.label}
          value={selectedDate}
          minutesStep={15}
          onChange={date => onChange(date)}
          name={props.name}
        />
      </MuiPickersUtilsProvider>
    </>
  );
}

export default TimePickerClass;
