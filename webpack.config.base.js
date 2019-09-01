const path = require('path');

module.exports = {
  entry: path.resolve('src'),
  output: {
    path: path.resolve('lib'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: path.resolve('lib'),
    compress: true,
    port: process.env.PORT || 3000,
  },
};
