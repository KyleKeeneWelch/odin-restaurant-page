const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'index': './src/scripts/index.js',
    'menu': './src/scripts/menu.js',
    'contact': './src/scripts/contact.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Odin - Restaurant Page Home',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Odin - Restaurant Page Menu',
      filename: 'menu.html',
      chunks: ['menu']
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Odin - Restaurant Page Contact',
      filename: 'contact.html',
      chunks: ['contact']
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};