import React, { useState } from "react";
import { TimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

function TimePickerClass(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <TimePicker
          showTodayButton
          todayLabel="Current Time"
          label={props.label}
          value={selectedDate}
          minutesStep={5}
          onChange={props.onChange}
          name={props.name}
        />
      </MuiPickersUtilsProvider>
    </>
  );
}

export default TimePickerClass;
