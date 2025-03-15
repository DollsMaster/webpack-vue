const webpack = require('webpack')
const env = require('../config/prod.env')
const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require("html-webpack-plugin");
function getJoinPath(dir) {
  return path.join(__dirname, '..', dir)
}
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
const prodWebpackConfig = webpackMerge.merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: `static/js/[name].[chunkhash:8].js`,
    chunkFilename: `static/js/[name].[chunkhash:8].js`
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new MiniCssExtractPlugin({
      filename: `static/css/[name].[contenthash:8].css`,
      chunkFilename: `static/css/[name].[contenthash:8].css`
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: 'index.html',
      inject: true,
    
      title: 'vue-admin-template',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    
    

  ]
})
module.exports = prodWebpackConfig;