const {merge} = require("webpack-merge");
const baseWebpackConfig = require('./webpack.base.conf')
const config = require('../config/index')
const portfinder = require('portfinder')
const {dev} = require("../config");
const FriendlyErrorsPlugin = require('@soda/friendly-errors-webpack-plugin');
const devWebpackConfig = merge(baseWebpackConfig, {
  devServer: {
    port: config.dev.port,
    host: config.dev.host,
    hot: config.dev.hot,
    open: false,
    client: {
      logging: 'none',
      overlay: false,
      progress: true
    },
    // 启用gzip压缩，提高网络传输速度。
    compress: true,
  },
  stats: 'errors-only',
  mode: "development"
})


//module.exports = devWebpackConfig
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port
      devWebpackConfig.devServer.port = port
      devWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
            notes: ['编译成功后会显示信息嗷┗|｀O′|┛ ']
          }
        })
      )
      resolve(devWebpackConfig)
    }
  })
})
