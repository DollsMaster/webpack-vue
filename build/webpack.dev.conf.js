const path = require('path')
const baseWebpackConfig = require("./webpack.base.conf")
const webpackMerge = require("webpack-merge")
const devWebpackConfig = webpackMerge.merge(baseWebpackConfig, {
  mode: "development",
  stats: 'errors-warnings',
})
module.exports = devWebpackConfig