import { applyMiddleware, compose, createStore } from "redux";
import { createRootReducer } from "redux/reducers";
import middlewares from "./middlewares";

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(),
    preloadedState || {},
    compose(
      applyMiddleware(...middlewares),
      process.env.BROWSER
        ? window.devToolsExtension
          ? window.devToolsExtension()
          : f => f
        : f => f
    )
  );

  return store;
}
