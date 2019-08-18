module.exports = {
  mode: 'production',
  entry: './src',
  output: {
    path: path.resolve('lib'),
    filename: 'Component.js',
    libraryTarget: 'commonjs2'
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
  }
};

