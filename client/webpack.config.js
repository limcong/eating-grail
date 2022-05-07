const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const resolve = (...dir) => path.resolve(__dirname, ...dir);

const PUBLIC_PATH = "./public";

const BUILD_PATH = "../dist";

const INPUT_PATH = "./src/index.tsx";

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, INPUT_PATH),
  },
  output: {
    filename: "static/js/[name].[hash].js",
    path: path.resolve(__dirname, BUILD_PATH),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": resolve("./src"),
    },
  },
  devServer: {
    disableHostCheck: true,
    https: true, // 本地调试开启https
  },
  optimization: {
    usedExports: true, // 识别无用代码 未使用的导出内容不会被生成 usedExports 依赖于 terser 去检测语句中的副作用。
     sideEffects: true,  // 开启副作用标识功能 sideEffects更为有效是因为它允许跳过整个模块/文件和整个文件子树。
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
          {
            loader: "ts-loader",
          },
        ],
        exclude: /(node_modules)/,
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/,
        type: "asset",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(PUBLIC_PATH, "index.html"),
      filename: "index.html",
      favicon: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.[contenthash:10].css', // 设置css文件的输出路径
    }),
  ],
};
