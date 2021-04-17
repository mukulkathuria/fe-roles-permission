const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;

module.exports = {
  entry: "./src/index",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public"),
  },
  resolve: {
    extensions: [".es6", ".ts", ".tsx", ".js", ".jsx"],
    modules: ["node_modules"],
  },
  module: {
    rules: [
      {
        loader: "ts-loader",
        test: /\.ts$|\.es6|\.tsx$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpe?g|gif)$/i,
        loader: "file-loader",
        exclude: /node_modules/,
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true, // Page likely to severed when 404
  },
};
