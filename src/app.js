import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "routes/404";
import Index from "routes/Index";
import TicTacToe from "routes/TicTacToe";
import "assets/styles/global.scss";

const App = () => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/tictactoe" component={TicTacToe} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default App;
