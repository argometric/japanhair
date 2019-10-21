import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";

function DatePickerClass() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
      <DatePicker
        disableToolbar
        disablePast
        autoOk
        variant="inline"
        value={selectedDate}
        onChange={handleDateChange}
        id="DatePicker"
      />
  );
}
export default DatePickerClass;
