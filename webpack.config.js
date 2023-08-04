const path = require("path");
const pkg = require("./package.json");
const libraryName = pkg.name;
const config = {
  mode: "production",
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: libraryName + ".min.js",
    library: libraryName,
    libraryTarget: "umd",
    libraryExport: "default",
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src")],
    extensions: [".json", ".js"],
  },
};

module.exports = config;
