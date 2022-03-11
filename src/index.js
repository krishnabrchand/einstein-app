import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import App from "./App";
import "assets/scss/material-kit-pro-react.scss?v=1.10.0";
import theme from "assets/theme/theme";

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </MuiPickersUtilsProvider>,
  document.getElementById("root")
);
