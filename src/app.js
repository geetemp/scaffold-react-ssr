import React from "react";
import { renderRoutes } from "react-router-config";
import configureStore from "store";
import routes from "routes";
import "assets/styles/global.css";
import ticTacToeModel from "store/reducers/ticTacToe";
import ticTacToeChildModel from "store/reducers/ticTacToeChild";
import createStaticRoutes from "utils/createStaticRoutes";

configureStore.pushModel(ticTacToeModel);
configureStore.pushModel(ticTacToeChildModel);

let staticRoutes = createStaticRoutes(routes());
const App = () => <React.Fragment>{renderRoutes(staticRoutes)}</React.Fragment>;

export default App;
export { configureStore, staticRoutes };
