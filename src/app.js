import React from "react";
import configureStore from "store";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "routes/404";
import Index from "routes/Index";
import TicTacToe from "routes/TicTacToe";
import TicTacToeChild from "routes/TicTacToeChild";
import ticTacToeModel from "store/reducers/ticTacToe";
import ticTacToeChildModel from "store/reducers/ticTacToeChild";
import "assets/styles/global.scss";

configureStore.pushModel(ticTacToeModel);
configureStore.pushModel(ticTacToeChildModel);

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/tictactoe" component={TicTacToe}>
      <Route path="/tictactoe/:param" component={TicTacToeChild} />
    </Route>
    <Route component={NotFoundPage} />
  </Switch>
);

const App = [];
(function getStaticRouteConfig(routesConfig, routes = []) {
  let { children } = routesConfig.props;
  children = Array.isArray(children) ? children : [children];
  for (const child of children) {
    const { props } = child;
    const cloneProps = { ...props };
    if (!props.children) {
      routes.push(cloneProps);
    } else {
      delete cloneProps.children;
      cloneProps.routes = [];
      routes.push(cloneProps);
      return getStaticRouteConfig(child, cloneProps.routes);
    }
  }
})(Routes(), App);

export default App;
export { configureStore };
