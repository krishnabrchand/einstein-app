/*eslint-disable*/

import { createTheme } from "@material-ui/core";
import {
  deepPurple,
  purple,
  deepOrange,
  red,
  lightBlue,
  blueGrey,
  teal,
  grey,
} from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: {
      main: lightBlue[800],
      //contrastText: deepPurple[900],
    },
    warning: {
      main: "#ff9800",
      light: "#ffb74d",
      dark: "#f57c00",
    },
    // error: {
    //   main: red["A700"],
    // },
    default: {
      main: red["A700"],
    },
  },
  typography: {
    fontWeight: "bold",
  },
});

theme.props = {
  MuiButton: {
    disableElevation: true,
  },
  MuiTextField: {
    fullWidth: true,
    //variant: "outlined",
  },
  MuiInputLabel: {
    //shrink: false,
    // required: true,
    // variant: "outlined",
  },
  MuiInput: {
    disableUnderline: false,
  },

  MuiCheckbox: {},
};

theme.overrides = {
  /*  Theme Overwrite START */

  MuiButton: {
    root: {
      borderRadius: 5,
      textTransform: "none",
    },
    containedPrimary: {
      fontWeight: 700,
      "&:hover": {
        backgroundColor: deepPurple[500],
        color: purple[50],
        fontWeight: 700,
      },
    },
    containedSecondary: {
      fontWeight: 700,
    },
  },

  MuiInput: {
    root: {},
  },
  MuiOutlinedInput: {
    root: {},
    input: {
      padding: "10px",
    },
  },
  MuiTextField: {
    root: {},
  },

  MuiFilledInput: {},

  MuiInputLabel: {
    root: {
      //textTransform: "uppercase",
      padding: "0px 0px 0px 0px",
      margin: "0px 3px",
      fontSize: "0.8rem",
      //MuiInputLabel-outlined.MuiInputLabel-shrink
    },

    outlined: {
      //textTransform: "uppercase",
      // transform: `translate(10px, 10px) scale(1)`,
    },
    shrink: {
      textTransform: "uppercase",
      transform: `translate(10px, -5px) scale(1) !important`,
      margin: "0 5px",
      fontWeight: 600,
      backgroundColor: "white",
      padding: "0 5px",
      color: deepPurple[900],
    },
  },

  MuiFormHelperText: {
    root: {
      //color: deepPurple[900],
      //fontSize: "0.8rem",
      //padding: "2px",
      // padding: theme.spacing(0.25),
    },
    contained: {
      textTransform: "uppercase",
      color: `${deepOrange["A700"]}!important`,
    },
    error: {},
  },

  MuiCheckbox: {
    root: {
      color: red["A700"],
    },
    colorPrimary: {
      color: `${blueGrey[900]}`,
    },
    colorSecondary: {
      color: `${teal[900]}`,
    },
  },
  MuiAlert: {
    root: {
      borderRadius: 0,
      fontSize: "0.8rem",
      color: "#000",
    },
    filledWarning: {
      color: "#b71c1c",
      fontWeight: "500",
      backgroundColor: "#ffb74d",
    },
  },

  MuiPaper: {},

  MuiTableHead: {
    root: {
      backgroundColor: teal[700],
    },
  },
  MuiTableCell: {
    root: {
      padding: "8px",
      lineHeight: "1.3rem",
      // borderLeft: "1px solid rgba(224, 224, 224, 1)",
    },
    head: {
      borderLeft: `1px solid ${teal[600]}`,
      padding: "12px",
      paddingRight: "5px",
      color: grey[300],
      fontWeight: 600,
    },
    body: {
      borderLeft: `1px solid ${grey[300]}`,
      padding: "12px",
      paddingRight: "5px",
    },
    // stickyHeader: {
    //   lineHeight: "1.9rem",
    //   backgroundColor: deepPurple[800],
    // },
  },

  MuiTableRow: {
    root: {
      "&:hover": {
        backgroundColor: grey[200],
      },
    },
    head: {
      "&:hover": {
        backgroundColor: teal[700],
      },
    },
  },
  MuiTouchRipple: {
    root: {},
  },

  /*  Theme Overwrite END */
};

export default theme;
