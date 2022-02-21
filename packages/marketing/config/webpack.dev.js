const { merge } = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new moduleFederationPlugin({
      name:"marketing",
      filename:"remoteEntry.js",
      exposes:{
        "./marketingApp": "./src/bootstrap"
      },
      shared: { 'react': { singleton: true }, 'react-dom': { singleton: true } },
    })
  ]
}

module.exports = merge(commonConfig, devConfig)