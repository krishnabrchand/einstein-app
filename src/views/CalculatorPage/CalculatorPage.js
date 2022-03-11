/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import InputAdornment from "@material-ui/core/InputAdornment";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  LinearProgress,
  Button,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormHelperText from "@material-ui/core/FormHelperText";

//Formik
import { Formik, Form, Field } from "formik";

/* Yup form validaton */
import * as Yup from "yup";
// application/custom components

// Page style
import presentationStyle from "assets/jss/views/presentationStyle.js";
import CustomDatePicker from "components/CustomDatePicker";

import SifTablePage from "./SifTablePage";
import { ExportCsv } from "./ExportCsv";

const useStyles = makeStyles(presentationStyle);

const setDateFormat = (date) => {
  let today = new Date(date);

  var year = today.getFullYear();

  var month = (1 + today.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  var day = today.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  today = month + "/" + day + "/" + year;
  return today;
};

const trauncateFractionAndFormat = (parts, digits) => {
  return parts
    .map(({ type, value }) => {
      if (type !== "fraction" || !value || value.length < digits) {
        return value;
      }
      let retVal = "";
      for (
        let idx = 0, counter = 0;
        idx < value.length && counter < digits;
        idx++
      ) {
        if (value[idx] !== "0") {
          counter++;
        }
        retVal += value[idx];
      }
      return retVal;
    })
    .reduce((string, part) => string + part);
};

const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 20,
});

const initialmv = 1000;

const INITIAL_FORM_STATE = {
  membershipAmount: trauncateFractionAndFormat(
    formatter.formatToParts(initialmv, 4)
  ),
  membershipRewards: trauncateFractionAndFormat(
    formatter.formatToParts(initialmv * 3, 4)
  ),
  startDate: setDateFormat(new Date()),
  rebuy: true,
};
const CURRENCY_REGEX = new RegExp("^[0-9][0-9,]*[0-9]$");
const REQUIRED_ERROR_MESSAGE = "Amount is required.";
const MIN_VALUE_MESSAGE = "Amount must be greater than or equal to 300.";
const INVALID_FORMAT_ERROR_MESSAGE = "Amount is required.";

/*yup.addMethod(schemaType: Schema, name: string, method: ()=> Schema): void */
function isValidCurrency(message) {
  return this.test("isValidCurrency", message, function (value) {
    const { path, createError } = this;
    if (!value) {
      return createError({ path, message: message ?? REQUIRED_ERROR_MESSAGE });
    }
    value = value.replace(/,/g, "");
    if (value < 300) {
      return createError({ path, message: message ?? MIN_VALUE_MESSAGE });
    }
    if (!value.match(CURRENCY_REGEX)) {
      return createError({
        path,
        message: message ?? INVALID_FORMAT_ERROR_MESSAGE,
      });
    }
    return true;
  });
}
function isValidSalary(message) {
  return this.test("isValidSalary", message, function (value) {
    const { path, createError } = this;
    if (!value) {
      return createError({ path, message: message ?? REQUIRED_ERROR_MESSAGE });
    }
    value = value.replace(/,/g, "");
    if (value < 300) {
      return createError({ path, message: message ?? MIN_VALUE_MESSAGE });
    }

    if (!value.match(CURRENCY_REGEX)) {
      return createError({
        path,
        message: message ?? INVALID_FORMAT_ERROR_MESSAGE,
      });
    }
    return true;
  });
}

Yup.addMethod(Yup.string, "isValidCurrency", isValidCurrency);
//Yup.addMethod(Yup.mixed, "isValidSalary", isValidSalary);

const FORM_VALIDATION = Yup.object().shape({
  membershipAmount: Yup.string().isValidCurrency(),
  //salary: Yup.mixed().isValidSalary(),
});

export default function CalculatorPage() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.main)}>
      {/* Top Control Section START*/}

      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        // onSubmit={(values) => {
        //   console.log(`Form Submitting ${JSON.stringify(values, null, 2)}`);
        // }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            console.log(`Form Submitting ${JSON.stringify(values, null, 2)}`);
            //alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ ...props }) => (
          <Form>
            <Grid container spacing={2} style={{ padding: "10px" }}>
              {/* Membership Start Date DatePicker */}

              <Grid item xs={12} sm={12} md={3}>
                <Field
                  name="startDate"
                  label="Membership Start Date"
                  component={CustomDatePicker}
                />
              </Grid>

              {/* Membership Amount TextBox */}

              <Grid item xs={12} sm={12} md={3}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="membershipAmount">
                    Membership Amount
                  </InputLabel>
                  <OutlinedInput
                    id="membershipAmount"
                    name="membershipAmount"
                    value={props.values.membershipAmount}
                    error={
                      props.touched.membershipAmount &&
                      Boolean(props.errors.membershipAmount)
                    }
                    onChange={(e) => {
                      const numRegex = /^[0-9\b]+$/; //allow number only
                      if (
                        e.target.value === "" ||
                        numRegex.test(e.target.value.replace(/,/g, ""))
                      ) {
                        trauncateFractionAndFormat(
                          formatter.formatToParts(initialmv, 4)
                        );
                        props.values.membershipRewards =
                          trauncateFractionAndFormat(
                            formatter.formatToParts(
                              e.target.value.replace(/,/g, "") * 3,
                              4
                            )
                          );
                        props.handleChange(e);
                      }
                    }}
                    onBlur={(e) => {
                      props.values.membershipRewards =
                        trauncateFractionAndFormat(
                          formatter.formatToParts(
                            e.target.value.replace(/,/g, "") * 3,
                            4
                          )
                        );
                      props.values.membershipAmount =
                        trauncateFractionAndFormat(
                          formatter.formatToParts(
                            e.target.value.replace(/,/g, ""),
                            4
                          )
                        );
                      props.handleBlur(e);
                    }}
                    startAdornment={
                      <InputAdornment position="start">HU</InputAdornment>
                    }
                  />
                  <FormHelperText>
                    {props.touched.membershipAmount &&
                      props.errors.membershipAmount}
                  </FormHelperText>
                </FormControl>
              </Grid>

              {/* Membership Rewards TextField */}

              <Grid item xs={12} sm={12} md={3}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="membershipRewards">
                    Membership Rewards 3x
                  </InputLabel>
                  <OutlinedInput
                    id="membershipRewards"
                    name="membershipRewards"
                    value={props.values.membershipRewards}
                    startAdornment={
                      <InputAdornment position="start">HU</InputAdornment>
                    }
                    disabled
                  />
                </FormControl>
              </Grid>

              {/* Rebuy Checkbox */}

              <Grid item xs={12} sm={12} md={3}>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={props.values.rebuy}
                        onChange={(e) => {
                          props.handleChange(e);
                          // props.submitForm();
                        }}
                        name="rebuy"
                        color="primary"
                      />
                    }
                    label="Rebuy"
                  />

                  {/* Export to Excel */}
                  {/* <ExportCsv {...props} /> */}
                </FormGroup>
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                {props.isSubmitting && <LinearProgress />}
              </Grid>
            </Grid>

            <Grid container spacing={1}>
              <Grid item xs={12}>
                {<SifTablePage {...props} />}
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>

      {/* Top Control Section END*/}
    </div>
  );
}
