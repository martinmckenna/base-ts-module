const path = require('path');
const NpmDtsPlugin = require('npm-dts-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './dist/index.js',
  output: {
    filename: './index.js',
    path: path.resolve(__dirname),
    library: 'base-module',
    libraryTarget: 'umd'
  },
  plugins: [
    new NpmDtsPlugin({
      logLevel: 'warn'
    })
  ]
};
