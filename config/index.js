const path = require('path')
module.exports = {
  dev: {
    host: 'localhost',
    port: '9528',
    hot: true,
    assetsPublicPath: '/',
    autoOpenBrowser: true
  },
  build: {
    assetsPublicPath: '/',
    assetsRoot: path.resolve(__dirname, '../dist'),
    devtool: 'source-map',
  }
}