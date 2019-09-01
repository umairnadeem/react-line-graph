const path = require('path');
const base = require('./webpack.config.base');

module.exports = {
  ...base,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  externals: {
    react: 'commonjs react',
  },
};
