const {merge} = require("webpack-merge");
const baseConfig = require('./webpack.base.conf')
const config = require('../config/index')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpackProdConf = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: path.posix.join('static', 'js/chunk-[chunkhash:8].js'),
    chunkFilename: path.posix.join('static', 'js/chunk-[chunkhash:8].js')
  },
  module: {
    rules: []
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: path.posix.join('static', 'css/[name].[contenthash:8].js'),
      chunkFilename: path.posix.join('static', 'css/[name].[contenthash:8].js')
    })
  ],
  devtool: false,
  optimization: {
    chunkIds: 'deterministic'
  }

})

module.exports = webpackProdConf