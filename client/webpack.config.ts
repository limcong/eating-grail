import HtmlWebpackPlugin from 'html-webpack-plugin';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

const resolve = (...dir: string[]) => path.resolve(__dirname, ...dir);

const PUBLIC_PATH = './public';

const BUILD_PATH = '../dist';

const INPUT_PATH = './src/index.tsx';

const exportModule = {
  entry: {
    bundle: path.resolve(__dirname, INPUT_PATH),
  },
  output: {
    filename: 'static/js/[name].[hash].js',
    path: path.resolve(__dirname, BUILD_PATH),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': resolve('./src'),
    },
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, PUBLIC_PATH),
    },
    compress: true,
    port: 4000,
    allowedHosts: 'auto',
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  optimization: {
    usedExports: true,
    sideEffects: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /(node_modules)/,
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(PUBLIC_PATH, 'index.html'),
      filename: 'index.html',
      favicon: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.[contenthash:10].css',
    }),
  ],
  devtool: 'source-map',
};

module.exports = exportModule;

export default exportModule;
