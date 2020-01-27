const path = require('path');

const parentDir = path.join(__dirname, '../');
console.log(parentDir);

module.exports = {
  entry: [
    path.join(parentDir, 'index.js'),
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'raw-loader',
      ],
    },
    ],
  },
  output: {
    path: `${parentDir}/dist`,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
