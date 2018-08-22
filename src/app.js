import React from "react";
import configureStore from "store";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "routes/404";
import Index from "routes/Index";
import TicTacToe from "routes/TicTacToe";
import ticTacToeModel from "store/reducers/ticTacToe";
import "assets/styles/global.scss";

configureStore.pushModel(ticTacToeModel);

const App = () => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/tictactoe" component={TicTacToe} />
    <Route component={NotFoundPage} />
  </Switch>
);

const staticRouteConfig = (function(App) {
  const app = App(),
    routes = app.props.children;
  const staticRoutes = [];
  if (routes && routes.length) {
    routes.reduce((lastStaticRoutes, route) => {
      lastStaticRoutes.push(route.props);
      return lastStaticRoutes;
    }, staticRoutes);
  }
  return staticRoutes;
})(App);

export default App;
export { configureStore, staticRouteConfig };
