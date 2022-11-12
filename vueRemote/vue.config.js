const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      historyApiFallback: true
    },
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'vueRemote',
        filename: 'remoteEntry.js',
        exposes: {
          './sharedApp': './src/expose.ts'
        }
      })
    ]
  }
})
