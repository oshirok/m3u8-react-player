const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: __dirname + '/dist',
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin({
    hash: true,
    filename: path.resolve(__dirname, './dist/index.html'),
  })],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
