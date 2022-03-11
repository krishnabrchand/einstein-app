/*eslint-disable*/
import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={0} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#cfcfcf",
    fontSmooth: true,
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(0),
    },
    borderRadius: 0,
  },
}));

export default function CalculatorTopWarning() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert severity="warning">
        <span>
          <b>DISCLAIMER:</b> This calculator is intended to be used and must be
          used for informational and entertainment purpose only and does not
          constitute financial, accounting, or legal advice. Please note that
          the result shown at the end of this calculator assume that elected
          contributions are made for the entire 600 days. This is NOT a
          financial advise neither owner of this site is a financial advisor;
          you must consult with a financial expert/professional on financial
          matters. You are using this calculator at your own risk.
        </span>
      </Alert>
    </div>
  );
}
