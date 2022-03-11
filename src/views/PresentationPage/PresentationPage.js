/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// application/custom components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import CalculatorPage from "views/CalculatorPage/CalculatorPage.js";
// import Favorite from "@material-ui/icons/Favorite";
// Page style
import presentationStyle from "assets/jss/views/presentationStyle.js";
import { QUOTES } from "assets/data/quotes.js";
const useStyles = makeStyles(presentationStyle);

export default function PresentationPage(props) {
  const [quote, setQuote] = React.useState("");

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const classes = useStyles();

  return (
    <div>
      <Header
        brand={`${process.env.REACT_APP_NAME}`}
        //brand="Einstein's 8th Wonder of the world"
        // links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="einsteinCyan"
        changeColorOnScroll={{
          height: 0,
          color: "einsteinTeal",
        }}
      />

      <div className={classNames(classes.main)} style={{ marginTop: 55 }}>
        <CalculatorPage />
      </div>
    </div>
  );
}
