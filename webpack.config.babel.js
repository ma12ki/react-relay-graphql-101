import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const BUILD_DIR = path.resolve(__dirname, 'build');
const BUILD_DIR_CLIENT = path.resolve(BUILD_DIR, 'client');

const SRC_DIR = path.resolve(__dirname, 'src');
const SRC_DIR_CLIENT = path.resolve(SRC_DIR, 'client');
const SRC_DIR_APP = path.resolve(SRC_DIR_CLIENT, 'app');

export default {
  entry: SRC_DIR_APP + '/index.jsx',
  module: {
    loaders: [
      { test : /\.jsx?/, include : SRC_DIR_APP, loader : 'babel' }
    ]
  },
  output: {
    path: BUILD_DIR_CLIENT,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${SRC_DIR_CLIENT}/index.html`,
      inject: 'body',
      hash: true
    })
  ]
};
