const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins = [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ];
}

const webpack = {
  entry: './src/js/app.js',
  output: {
    filename: 'app.js',
  },
  devtool: 'source-map',
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
  plugins: plugins
};

module.exports = webpack;
