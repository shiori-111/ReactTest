const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: __dirname + "/public/js",
    publicPath: "/js/",
    filename: "[name].js"
  },
  devServer: {
   historyApiFallback: true,
   static: {
    directory: './dist',
   },
    port: 8080,
    open: true,
  },
  devtool: "eval-source-map",
  mode: "development",
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }, {
      test: /\.css$/,
      use: ["style-loader","css-loader"]
    }]
  },
  plugins: [
   new HtmlWebpackPlugin({
     template: "./public/index.html",
     filename: "./index.html"
   }),
   new ESLintPlugin()
  ]
};
