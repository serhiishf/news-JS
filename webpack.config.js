let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}
console.log(mode + " mode");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtrractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: mode,
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "./index.js",
    //maints: "./index.ts",
    //script: "./script.js",    in this string I can add new ENTRY points, "script" - name dist file
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new MiniCssExtrractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
  ],
  devServer: {
    open: true,
    hot: true,
    port: "auto",
    static: {
      directory: "./src",
      watch: true,
    },
  },

  //resolve добавлено вместе с type script. Назначение не понятно
  /*   resolve: {
    extensions: [".tsx", ".ts", ".js"],
  }, */

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [mode === "development" ? "style-loader" : MiniCssExtrractPlugin.loader, "css-loader", { loader: "postcss-loader" }, "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|tts|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(mp3|waw)$/i,
        type: "asset/resource",
        generator: {
          filename: "audio/[name][ext]",
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
