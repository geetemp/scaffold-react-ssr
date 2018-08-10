/**
 * Created by unnKoel on 2017/7/17.
 */
import TicTacToe from "routes/TicTacToe";
import AuthDataLoader from "utils/hoc/auth-data-loader";

const routesConfig = [
  {
    path: "/",
    exact: true,
    component: AuthDataLoader(TicTacToe)
  }
];

export default routesConfig;
