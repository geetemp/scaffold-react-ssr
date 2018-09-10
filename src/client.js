import App, { configureStore } from "./App";
import React from "react";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { hydrate } from "react-dom";
import { Router } from "react-router";
import { RouteDataLoader } from "utils/hoc/route-data-loader";
import createBrowserHistory from "history/createBrowserHistory";
import styles from "assets/styles/global.scss";

const store = configureStore.createStore(window.__PRELOADED_STATE__);
const history = new createBrowserHistory();

hydrate(
  <Provider store={store}>
    <Router history={history}>
      <RouteDataLoader routes={App} store={store}>
        <style jsx>{styles}</style>
        {renderRoutes(App)}
      </RouteDataLoader>
    </Router>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
