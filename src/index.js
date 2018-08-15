/**
 * Created by common on 2017/7/16.
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "store";
import TicTacToe from "routes/TicTacToe";
import ticTacToeModel from "store/reducers/ticTacToe";

configureStore.pushModel(ticTacToeModel);

const render = Component => {
  const rootEl = document.querySelector("#root");
  ReactDOM.render(
    <Provider store={configureStore.createStore()}>
      <Component />
    </Provider>,
    rootEl
  );
};

render(TicTacToe);
