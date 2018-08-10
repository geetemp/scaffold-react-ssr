/**
 * Created by common on 2017/7/16.
 */
import React from "react";
import { Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import configureStore from "redux/store";
import { history } from "redux/store/syncHistoryWithStore";
import { ConnectedRouter } from "react-router-redux";
import { RouteDataLoader } from "utils/hoc/route-data-loader";
import routesConfig from "routes";

const store = configureStore(window.__PRELOADED_STATE__);

export default function app() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <RouteDataLoader routes={routesConfig} store={store}>
          <Switch>
            {renderRoutes(routesConfig, { routes: routesConfig, store })}
          </Switch>
        </RouteDataLoader>
      </ConnectedRouter>
    </Provider>
  );
}
