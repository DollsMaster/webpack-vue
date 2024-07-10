const {merge} = require("webpack-merge");
const baseWebpackConfig = require('./webpack.base.conf')
const config = require('../config/index')
const portfinder = require('portfinder')
const {dev} = require("../config");
const devWebpackConfig = merge(baseWebpackConfig, {
  devServer: {
    port: config.dev.port,
    host: config.dev.host,
    hot: config.dev.hot,
    open: config.dev.autoOpenBrowser
  },
  mode: "development"
})


//module.exports = devWebpackConfig
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      devWebpackConfig.devServer.port = port
      devWebpackConfig.plugins.push(
        new FriendlyErrorsWebpackPlugin({
          compilationSuccessInfo: [
            `应用运行中: http://${devWebpackConfig.devServer.host}:${port}`
          ]
        })
      )
      /*devWebpackConfig.plugins.push({
        compilationSuccessInfo: [
          `应用运行中: http://${devWebpackConfig.devServer.host}:${port}`
        ]
      })*/
      resolve(devWebpackConfig)
    }
  })
})
/*
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      devWebpackConfig.devServer.port = port
      devWebpackConfig.plugins.push({
        compilationSuccessInfo: [
          `应用运行中: http://${devWebpackConfig.devServer.host}:${port}`
        ]
      })
      resolve(devWebpackConfig)
    }
  })
})*/
