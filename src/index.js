/**
 * Created by common on 2017/7/16.
 */
import React from "react";
import ReactDOM from "react-dom";
import TicTacToe from "routes/TicTacToe";

const render = Component => {
  const rootEl = document.querySelector("#root");
  ReactDOM.render(<Component />, rootEl);
};

render(TicTacToe);
