const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const utils = require('./utils')
function getAbsolutePath(dir) {
  return  path.resolve(__dirname, dir)
}
function getJoinPath(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: getAbsolutePath('../src/main'),
  output: {
    path: getAbsolutePath('../dist'),
    filename: "[name]-[chunkhash:8].js",
    chunkFilename: "[name]-[chunkhash:8].js"
  },
  resolve: {
    alias: {
      '@': getJoinPath('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader"
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: "style-loader"
          },{
            loader: "css-loader"
          },{
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        filename: "index.html"
      }),
      new VueLoaderPlugin()
  ]
}