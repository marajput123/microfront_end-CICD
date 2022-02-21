const { merge } = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const package = require("../package.json")
console.log(package);

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new ModuleFederationPlugin({
      name:"container",
      remotes: {
        "marketing":"marketing@http://localhost:8082/remoteEntry.js"
      },
      shared: { 'react': { singleton: true }, 'react-dom': { singleton: true } },
    })
  ]
}

module.exports = merge(commonConfig, devConfig)