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
const prodWebpackConfig = {
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: path.posix.join('js/chunk-[chunkhash:8].js'),
    chunkFilename: path.posix.join('js/chunk-[chunkhash:8].js')
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
            loader: MiniCssExtractPlugin.loader
          },{
            loader: "css-loader"
          },{
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: path.posix.join('css/[name]-[contenthash:8].css'),
      chunkFilename: path.posix.join('css/[name]-[contenthash:8].css'),
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    }),
  ],
  optimization: {
    chunkIds: 'deterministic',
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production'
}
module.exports = prodWebpackConfig;