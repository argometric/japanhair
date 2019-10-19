import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import orange from "@material-ui/core/colors/orange";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: orange
  },
  overrides: {
    MuiInput: {
      underline: {
        "&&&&:after": {
          borderBottom: "none"
        },
        "&&&&:hover:before": {
          borderBottom: "inherit"
        }
      }
    }
  }
});

function DatePickerClass() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <DatePicker
        disableToolbar
        disablePast
        autoOk
        variant="inline"
        value={selectedDate}
        onChange={handleDateChange}
        id="DatePicker"
      />
    </ThemeProvider>
  );
}
export default DatePickerClass;
