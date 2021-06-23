const path = require('path');
const NpmDtsPlugin = require('npm-dts-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './dist/lib/index.js',
  output: {
    filename: './dist/index.js',
    path: path.resolve(__dirname),
    library: 'base-module',
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: './dist/lib',
    port: 8000
  },
  devtool: 'inline-source-map',
  plugins: [
    new NpmDtsPlugin({
      logLevel: 'warn',
      output: './dist/index.d.ts'
    })
  ]
};
