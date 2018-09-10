import App, { configureStore, staticRoutes } from "./App";
import React from "react";
import { Provider } from "react-redux";
import { hydrate } from "react-dom";
import { Router } from "react-router";
import { RouteDataLoader } from "utils/hoc/route-data-loader";
import createBrowserHistory from "history/createBrowserHistory";

const store = configureStore.createStore(window.__PRELOADED_STATE__);
const history = new createBrowserHistory();

hydrate(
  <Provider store={store}>
    <Router history={history}>
      <RouteDataLoader routes={staticRoutes} store={store}>
        <App />
      </RouteDataLoader>
    </Router>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
