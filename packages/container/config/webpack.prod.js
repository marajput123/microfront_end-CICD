const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common")

const CDN_DOMAIN = process.env.PRODUCTION_DOMAIN;


const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: "/container/"
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes:{
        marketing: `marketing@/marketing/latest/remoteEntry.js`
      },
      shared: { 'react': { singleton: true }, 'react-dom': { singleton: true } },
    })
  ]
}

module.exports = merge(commonConfig, prodConfig)