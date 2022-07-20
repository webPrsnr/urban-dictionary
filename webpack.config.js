const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode: mode,
  entry: path.resolve(__dirname, "src/front"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "src/front/dist"),
    publicPath: "/",
    clean: true,
  },
  // devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css", //"styles.css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      title: "Urban Dictionary",
      filename: "index.html",
      template: "src/front/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), "..."],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".scss"],
  },
};
