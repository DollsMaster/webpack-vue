const path = require('path')
const webpack = require('webpack');
const webpackMerge = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require("./webpack.base.conf.js")
const devWebpackConfig = webpackMerge.merge(baseWebpackConfig, {
  mode: "development",
  stats: 'errors-warnings',

  devServer: {
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: 'localhost',
    port: 9528,
    open: false,
    
    client: {
      logging: 'warn', // 只显示警告和错误
      overlay: { errors: true, warnings: false }, // 只显示错误，不显示警告
      progress: true, // 显示构建进度
    },
    proxy: [
      {
        context: ["/user"],
        target: "http://localhost:8081"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    }),
  ]
})
module.exports = devWebpackConfig