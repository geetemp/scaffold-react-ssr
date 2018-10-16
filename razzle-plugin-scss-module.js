config.module.rules.push({
  test: /\.scss$/,
  exclude: [paths.appBuild],
  use: IS_NODE // Style-loader does not work in Node.js without some crazy
    ? // magic. Luckily we just need css-loader.
      [require.resolve("css-loader"), require.resolve("sass-loader")]
    : IS_DEV
      ? [
          {
            loader: require.resolve("style-loader"),
            options: { sourceMap: true }
          },
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
            }
          },
          {
            loader: require.resolve("postcss-loader"),
            options: postCssOptions
          },
          { loader: require.resolve("sass-loader") }
        ]
      : [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              modules: true,
              minimize: true,
              localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
            }
          },
          {
            loader: require.resolve("postcss-loader"),
            options: postCssOptions
          },
          { loader: require.resolve("sass-loader") }
        ]
});
