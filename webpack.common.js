const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: `${path.resolve(__dirname, "./src")}/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.ejs",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
  },
};
