const Webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [];

const DefinePlugin = new Webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
});


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

const UglifyPlugin = new Webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  }
})

const DedupePlugin = new Webpack.optimize.DedupePlugin();

const CommonChunksPlugin = new Webpack.optimize.CommonsChunkPlugin({ name: 'vendor' });

plugins.push(DefinePlugin);
plugins.push(HtmlWebpackPluginConfig);
plugins.push(UglifyPlugin);
plugins.push(DedupePlugin);
plugins.push(CommonChunksPlugin);



module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: 'public/[name].js',
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