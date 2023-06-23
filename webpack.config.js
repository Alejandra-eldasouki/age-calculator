const path = require('path');
// below  const path = require('path');, add this line:
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js', // this indicates the main js file that everything will be bundled into
  output: {
    filename: 'bundle.js', // this is the file name for the bundled output
    path: path.resolve(__dirname, 'dist'), // this is the directory for the bundled output, in this case it's 'dist'
    devtool: 'eval-source-map',
    devServer: {
      contentBase: './dist',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Project', // this line will be the title that shows up in your browser tab
      template: './src/index.html', // everything will get injected into this file
      inject: 'body',
    }),
  ],
  // this gets added right after the 'output' object, still within the `module.exports` object
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
