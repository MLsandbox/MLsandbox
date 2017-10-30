const { resolve } = require('path');
const srcDir = resolve(__dirname, 'src');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

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
        options: { presets: ['es2015', 'react'], plugins: ['transform-class-properties'] },
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?url=false']
      }, {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        }
      }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
<<<<<<< HEAD
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     screw_ie8: true,
    //     conditionals: true,
    //     unused: true,
    //     comparisons: true,
    //     sequences: true,
    //     dead_code: true,
    //     evaluate: true,
    //     if_return: true,
    //     join_vars: true
    //   },
    //   output: {
    //     comments: false
    //   }
    // }), 
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // }),
    // new webpack.optimize.ModuleConcatenationPlugin(),
    // new CompressionPlugin({
    //   asset: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // })
=======
    //new webpack.optimize.UglifyJsPlugin({
    //  compress: {
    //    warnings: false,
    //    screw_ie8: true,
    //    conditionals: true,
    //    unused: true,
    //    comparisons: true,
    //    sequences: true,
    //    dead_code: true,
    //    evaluate: true,
    //    if_return: true,
    //    join_vars: true
    //  },
    //  output: {
    //    comments: false
    //  }
    //}), 
    //new webpack.DefinePlugin({
    //  'process.env.NODE_ENV': JSON.stringify('production')
    //}),
    //new webpack.optimize.ModuleConcatenationPlugin(),
    //new CompressionPlugin({
    //  asset: "[path].gz[query]",
    //  algorithm: "gzip",
    //  test: /\.js$|\.css$|\.html$/,
    //  threshold: 10240,
    //  minRatio: 0.8
    //})
>>>>>>> 2008a5f1acbb2aa2f8e273c48d5f84d1c1c87a77
  ]
}
