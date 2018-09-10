import React from "react";
import configureStore from "store";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "routes/404";
import ErrorPage from "routes/500";
import Index from "routes/Index";
import TicTacToe from "routes/TicTacToe";
import TicTacToeChild from "routes/TicTacToeChild";
import ticTacToeModel from "store/reducers/ticTacToe";
import ticTacToeChildModel from "store/reducers/ticTacToeChild";
import staticRoutes from "utils/staticRoutes";

configureStore.pushModel(ticTacToeModel);
configureStore.pushModel(ticTacToeChildModel);

const App = () => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/tictactoe" component={TicTacToe}>
      <Route path="/tictactoe/:param" component={TicTacToeChild} />
    </Route>
    <Route path="/500" component={ErrorPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default staticRoutes(App());
export { configureStore };
