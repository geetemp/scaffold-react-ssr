import App, { configureStore } from "./App";
import React from "react";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import express from "express";
import { Provider } from "react-redux";
import { matchRoutes } from "react-router-config";
import { renderToString } from "react-dom/server";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const emptyState = configureStore.createStore().getState();

const server = express();
server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", (req, res) => {
    const { url } = req;
    const branch = matchRoutes(App, url);
    const context = {};
    const promises = branch.map(({ route, match }) => {
      const { component } = route;
      return component.getInitialProps
        ? component
            .getInitialProps({
              pathname: match.url,
              query: match.params,
              req,
              res
            })
            .then(res => {
              return {
                pageSpace: component.namespace || component.name,
                res
              };
            }).catch(res => {
              if (res.code === 404) {
                context.url = "/404"
              } else if (res.code === 500) {
                context.url = "/500"
              }
            })
        : Promise.resolve(null);
    });

    Promise.all(promises).then(initPageDatas => {
      const initState = JSON.parse(JSON.stringify(emptyState));
      for (const initPageData of initPageDatas) {
        if (initPageData) {
          const { pageSpace } = initPageData,
            pageState = initState[pageSpace];
          initState[pageSpace] = { ...pageState, ...initPageData.res };
        }
      }
      render(configureStore.createStore(initState));
    });

    function render(store) {
      
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter context={context} location={url}>
            {renderRoutes(App)}
          </StaticRouter>
        </Provider>
      );

      if (context.url) {
        res.redirect(context.url);
      } else {
        res.status(200).send(`<!doctype html>
          <html lang="">
            <head>
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta charset="utf-8" />
              <title>Welcome to Razzle</title>
              <meta name="viewport" content="width=device-width, initial-scale=1">
              ${
                assets.client.css
                  ? `<link rel="stylesheet" href="${assets.client.css}">`
                  : ""
              }
            </head>
            <body>
                <div id="root">${markup}</div>
                ${`<script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(
                  store.getState()
                ).replace(/</g, "\\u003c")}
              </script>`}
                ${
                  process.env.NODE_ENV === "production"
                    ? `<script src="${assets.client.js}" defer></script>`
                    : `<script src="${
                        assets.client.js
                      }" defer crossorigin></script>`
                }
            </body>
          </html>`);
      }
    }
  });

export default server;
