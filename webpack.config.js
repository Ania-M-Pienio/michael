const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: [path.resolve(__dirname, "src", "js", "index.js")],
  },
  mode: "development",
  target: "web",
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "public"),
    assetModuleFilename: "assets/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 2 } },
          { loader: "postcss-loader" },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "index.html",
      chunks: ["index"],
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "[id].[contenthash].css",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
