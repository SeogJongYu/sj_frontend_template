const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    open: false,
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: "all",
    historyApiFallback: true,
    // proxy: [
    //   {
    //     context: ['/api', '/ws', '/media', '/static', '/admin', '/views'],
    //     target: 'http://127.0.0.1:8000',
    //     changeOrigin: true,
    //   },
    // ],
  },
});
