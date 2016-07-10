import path from 'path';

export default {
  entry: path.resolve(__dirname, 'index.js'),
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: { stage: 0 }
      }
    ]
  },
  output: { filename: 'index.bundle.js', path: './' }
};
