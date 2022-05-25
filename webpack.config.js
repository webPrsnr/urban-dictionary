const path = require("path");

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode: mode,
  entry: path.resolve(__dirname, "src/front"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "src/front/dist"),
  },

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
