const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  target: "node",
  entry: "./src/client/entry-server.js",
  output: {
    libraryTarget: "commonjs2",
    publicPath: "/static/",
    filename: "ssr.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue$: "vue/dist/vue.min.js",
    },
  },
  plugins: [new VueLoaderPlugin(), new MiniCssExtractPlugin({})],
};
