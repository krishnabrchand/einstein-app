import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
//import NumberFormat from "react-number-format";
// import FormHelperText from "@material-ui/core/FormHelperText";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.dark,
  },
}));
// const numberToCurrency = (value) => new Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 }).format(value);

export default function SifAccordion(props) {
  const classes = useStyles();

useEffect(() => {
  
  console.log(props.values.rebuy);

if(props.values.rebuy){
  
}
  // return () => {
  //   cleanup
  // }


}, [props.values.rebuy]);


  return (
    <div className={classes.root}>
      <Accordion elevation={1}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography className={classes.heading}>Plan of Actions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={4}>
              {/* <TextField
                id="name"
                name="name"
                value={props.values.name}
                onChange={(e) => {
                  props.handleChange(e);
                }}
                error={props.touched.name && Boolean(props.errors.name)}
                helperText={props.touched.name && props.errors.name}
                onBlur={props.handleBlur}
                variant="outlined"
                label="Name"
              /> */}
              <RadioGroup
                aria-label="planofactionradio"
                name="planofactionradio"
                defaultValue={props.values.planofactionradio}
                value={props.values.planofactionradio}
                onChange={(e) => {
                  props.handleChange(e);
                }}
              >
                <FormControlLabel value="0" control={<Radio />} label="600 Days" />
                <FormControlLabel value="200" control={<Radio />} label="200 days" />
                <FormControlLabel value="245" control={<Radio />} label="245 days" />
              </RadioGroup>
            </Grid>
            {/* <Grid item xs={12} sm={12} md={4}>
              <TextField
                id="salary"
                name="salary"
                value={props.values.salary}
                onChange={(e) => {
                  props.handleChange(e);
                }}
                error={props.touched.salary && Boolean(props.errors.salary)}
                helperText={props.touched.salary && props.errors.salary}
                onBlur={(e) => {
                  props.values.salary = numberToCurrency(props.values.salary.replace(/,/g, ""));
                  props.handleBlur(e);
                }}
                variant="outlined"
                label="Salary"
              />
            </Grid> */}
            <Grid item xs={12} sm={12} md={4}>
              {props.values.planofactionradio}
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
