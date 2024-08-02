const {merge} = require("webpack-merge");
const baseConfig = require('./webpack.base.conf')
const config = require('../config/index')
const webpackProdConf = merge(baseConfig, {
  mode: 'production',
  module: {
    rules: []
  },
  devtool: config.build.devtool ? config.build.devtool : false
})

module.exports = webpackProdConf