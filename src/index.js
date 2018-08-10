/**
 * Created by common on 2017/7/16.
 */
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import app from "./app";

const render = Component => {
  const rootEl = document.querySelector("#root");
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );
};

render(app);

if (module.hot) {
  module.hot.accept("./app", () => {
    render(require("./app").default);
  });
}
