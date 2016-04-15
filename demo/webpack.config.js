var path = require('path');
var webpack = require('webpack');

var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    APP_DIR + "/index.js"
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        loader: 'babel',
        include: APP_DIR
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
