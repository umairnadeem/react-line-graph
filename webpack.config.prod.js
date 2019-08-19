const base = require('./webpack.config.base');

module.exports = {
  ...base,
  mode: 'production',
  output: {
    libraryTarget: 'commonjs2',
  },
  externals: {
    react: 'commonjs react',
  },
};
