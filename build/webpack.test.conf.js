'use strict'
const config = require('../config')
const webpack = require('webpack')
const {merge} = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const portfinder = require('portfinder')
const webpackDevConfig = merge(webpackBaseConfig,{
  mode: 'development',
  devServer: {
    host: config.dev.host,
    port: config.dev.port,
    publicPath: config.dev.assetsPublicPath,
    open: config.dev.autoOpenBrowser
  },
  plugins: [
      new webpack.DefinePlugin({
        'process.env': require('../config/dev.env')
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: '../index.html',
        inject: true
      })
  ]
})
console.log('-------webpackDevConfig', webpackDevConfig)
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port
      webpackDevConfig.devServer.port = port
      webpackDevConfig.plugins.push({
        compilationSuccessInfo: [
            `应用运行中: http://${webpackDevConfig.devServer.host}:${port}`
        ]
      })
      resolve(webpackBaseConfig)
    }
  })
})