
const config = require('../config/index')
const {VueLoaderPlugin} = require("vue-loader");
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js",
    publicPath: process.env.NODE_ENV === 'production'
                ? config.build.assetsPublicPath
                : config.dev.assetsPublicPath
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader"
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        include: [
          resolve('src')
        ],
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[chunkhash].css'
    }),
    new CleanWebpackPlugin()
  ]
}