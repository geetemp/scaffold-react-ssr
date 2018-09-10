const autoprefixer = require("autoprefixer");
module.exports = {
  modify: (config, { target, dev }, webpack) => {
    const postCssOptions = {
      ident: "postcss", // https://webpack.js.org/guides/migrating/#complex-options
      plugins: () => [
        autoprefixer({
          browsers: [
            ">1%",
            "last 4 versions",
            "Firefox ESR",
            "not ie < 9" // React doesn't support IE8 anyway
          ],
          flexbox: "no-2009"
        })
      ]
    };
    const scssRule = config.module.rules.filter(rule => {
      return (rule.test || {}).toString() == /\.scss$/;
    })[0];
    scssRule.use = [
      {
        loader: require.resolve("babel-loader")
      },
      {
        loader: require("styled-jsx/webpack").loader,
        options: { type: "scoped" }
      }
    ];
    return config;
  }
};
