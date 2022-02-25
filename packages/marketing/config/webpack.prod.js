const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const {merge} = require('webpack-merge')
const commonConfig = require("./webpack.common")

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    // publicPath: '/marketing/'
  },
  plugins:[
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes:{
        "./marketingApp": "./src/bootstrap.js"
      },
      shared: { 'react': { singleton: true }, 'react-dom': { singleton: true } }
    })
  ]
}

module.exports = merge(commonConfig, prodConfig);