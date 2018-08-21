import App from "./App";
import React from "react";
import { hydrate } from "react-dom";
import { Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

const history = new createBrowserHistory();
hydrate(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
