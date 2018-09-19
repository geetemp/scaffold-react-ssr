import React from "react";
import { hydrate } from "react-dom";
import client from "./clientA";

const render = Component => {
  hydrate(<Component />, document.getElementById("root"));
};

render(client);

if (module.hot) {
  module.hot.accept("./clientA", () => {
    render(require("./clientA").default);
  });
}
