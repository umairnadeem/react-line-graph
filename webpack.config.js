const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve('src'),
  output: {
    path: path.resolve('lib'),
    filename: 'Component.js',
    // libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve('lib'),
    compress: true,
    port: process.env.PORT || 3000,
  }
};

