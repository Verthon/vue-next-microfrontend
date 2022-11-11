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
        name: 'vue-remote',
        filename: 'remoteEntry.js',
        exposes: {
          './vueRemote': './src/expose.ts'
        }
      })
    ]
  }
})
