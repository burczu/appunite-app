const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prepareAliases = require('./utils/functions').prepareAliases;
const paths = require('./utils/paths');

const cssRegex = /\.css$/;
const scssModuleRegex = /\.module\.scss$/;

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
  },
  entry: {
    bundle: './src/index.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: prepareAliases(paths.aliases),
  },
  module: {
    rules: [
      { test: /\.tsx?$/, enforce: 'pre', loader: 'tslint-loader' },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: scssModuleRegex,
        use: [
          require.resolve('css-hot-loader'),
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 2,
              localsConvention: 'camelCase',
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
                context: path.resolve(__dirname, 'src'),
              },
              sourceMap: true,
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: cssRegex,
        use: [
          require.resolve('css-hot-loader'),
          MiniCssExtractPlugin.loader,
          require.resolve('css-loader'),
          {
            loader: require.resolve('postcss-loader'),
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false,
    }),
    new CopyPlugin([{ from: 'public' }]),
  ],
};
