const { resolve } = require('path');
const srcDir = resolve(__dirname, 'src');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: `${srcDir}/index.js`,
  output: {
    path: resolve(__dirname, "static"),
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { presets: ['es2015', 'react']},
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?url=false']
      }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`
    }),new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
}