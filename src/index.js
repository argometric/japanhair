import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import orange from "@material-ui/core/colors/orange";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: orange[500]
    },
    text: {
      primary: orange[500],
      secondary: orange[500],
      hint: orange[500],
      disabled: orange[500]
    },
    background: {
      paper: "#0d0d0d"
    },
    action: {
      hover: orange[500],
      disabled: orange[100],
      selected: orange[500]
    }
  },
  overrides: {
    MuiMenuItem: {
      gutters: {
        "&:hover": {
          color: "#000"
        }
      },
      root: {
        "&$selected": {
          color: "#000"
        }
      }
    }
  }
});
render(
  <Router>
    <ThemeProvider theme={defaultMaterialTheme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
