import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import PresentationPage from "views/PresentationPage/PresentationPage";

import "./App.css";

import { handelRightClick } from "./utility";

function App(props) {
  document.addEventListener("contextmenu", handelRightClick);
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Switch>
          <Route path="/" component={PresentationPage} />
        </Switch>
      </div>
    </div>
  );
}
export default withRouter(App);
