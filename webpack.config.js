const { resolve } = require('path');
const srcDir = resolve(__dirname, 'src');

module.exports = {
  entry: `${srcDir}/index.js`,
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }]
  }
}