const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      historyApiFallback: true
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'remote2',
        filename: 'remoteEntry.js',
        // exposes: {
        //   './App': './src/App.vue',
        //   './mountVue3App': './src/expose'
        // }
        exposes: {
          './App.vue': './src/bootstrap'
        }
        // shared: require('./package.json').dependencies
      })
    ]
  }
})
