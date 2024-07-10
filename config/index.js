const path = require('path')
module.exports = {
  dev: {
    host: '0.0.0.0',
    port: '9528',
    hot: true,
    assetsPublicPath: '/',
    autoOpenBrowser: true
  },
  build: {
    assetsPublicPath: '/',
    assetsRoot: path.resolve(__dirname, '../dist')
  }

}