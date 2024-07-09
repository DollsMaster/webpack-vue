const path = require('path')
module.exports = {
  dev: {
    host: 'localhost',
    port: '9528',
    assetsPublicPath: '/'
  },
  build: {
    assetsPublicPath: '/',
    assetsRoot: path.resolve(__dirname, '../dist')
  }

}