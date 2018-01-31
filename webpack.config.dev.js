const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [];


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseInlineTagWhitespace: true,
    removeComments: true,
  },
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
});



plugins.push(HtmlWebpackPluginConfig)


module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'public/bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins
}