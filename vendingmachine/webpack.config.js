const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./public/src/app.js", "./public/stylesheets/style.sass"],
  output: {
    path: path.resolve(__dirname + "/public", "dist"),
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.sass$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ],
        exclude: /node_modules/,
      },
    ],
  },
};
