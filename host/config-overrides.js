const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;

const buildDate = new Date().toLocaleString();

module.exports = function override(config, _env) {
  return {
    ...config,
    plugins: [
      ...config.plugins,
      new webpack.EnvironmentPlugin({ BUILD_DATE: buildDate }),
      new ModuleFederationPlugin({
        name: "host",
        remotes: {},
      }),
    ]
  };
}