const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const webpack = {
  entry: './js/app.js',
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
    ],
  },
  plugins: [
    new UglifyJSPlugin()
  ]
};

module.exports = webpack;
