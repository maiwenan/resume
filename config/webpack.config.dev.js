var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var resume = require('../data/resume.json');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: './index.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass'
      },
      {
        test: /\.less$/,
        loader: 'style!css!postcss!less'
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)(\?.*)?(#.*)?$/,
        loader: 'url?name=fonts/[name].[hash].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.less', '.css'],
    alias: {
      'template': '../template/' + resume.resumeTpl
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: resume.resumeTitle,
      template: path.resolve(__dirname, '../src/index.html')
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:3000'
    })
  ],
  postcss: [autoprefixer],
  devtool: 'eval'
};
