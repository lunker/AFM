var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          compact: false,
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, '..','dist'),
    filename: 'client.js',
  },
  resolve: {
    extensions: ['', '.js']
  }
};
