const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main2.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
        { test: /\.ts$/, loader: 'ts-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./index.template.html",
        filename: "index.html",
    }),
  ],
  optimization: {
    minimize: true,
},
  mode: 'development',
};