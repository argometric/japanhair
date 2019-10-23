import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import orange from "@material-ui/core/colors/orange";

function DatePickerClass() {
  const [selectedDate, handleDateChange] = useState(new Date());

  const materialTheme = createMuiTheme({
    palette: {
      primary: {
        main: orange[500]
      },
      secondary: {
        main: orange[500]
      },
      error: {
        main: orange[500]
      },
      text: {
        primary: orange[500],
        secondary: orange[500],
        hint: orange[500],
        disabled: orange[500]
      },
      background: {
        paper: "#444",
      },
      divider: orange[500],
      action: {
        hover: orange[500],
        disabled: orange[100],
        disabledBackground: orange[50]
      },
    },
    overrides: {
      MuiPickersCalendarHeader: {
        iconButton: {
           color: orange[500],
        },
      },
      MuiPickersDay: {
        day: {
          color: orange[500],
          '&:hover': {
            backgroundColor: orange[500],
            opacity: 0.75,
            color: "#000"
          }
        },
        daySelected: {
          backgroundColor: orange[500],

        },
        dayDisabled: {
          color: orange[100],
        },
      },
      MuiPickersModal: {
         dialogAction: {
          color: orange[800]
        },
      },
    },
  });


  return (
    <ThemeProvider theme={materialTheme}>
      <DatePicker
        disableToolbar
        disablePast
        autoOk
        // variant="inline"
        value={selectedDate}
        onChange={handleDateChange}
        id="DatePicker"
      />
    </ThemeProvider>
  );
}
export default DatePickerClass;
