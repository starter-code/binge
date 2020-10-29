const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const eslintOptions = {
  extensions: '.js',
  emitWarning: true,
};

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss'],
    alias: {
      apiEndpoints: path.resolve(__dirname, 'src/api/apiEndpoints'),
      components: path.resolve(__dirname, 'src/components'),
      constants: path.resolve(__dirname, 'src/constants/constants'),
      contexts: path.resolve(__dirname, 'src/contexts'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          to: 'assets',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ESLintPlugin(eslintOptions),
  ],
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    liveReload: false,
    open: true,
  },
};
