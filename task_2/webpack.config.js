const path = require("path");
module.exports = {
  mode: "development",
  entry: "./js/main.ts",
  module: { rules: [{ test: /\.ts$/, loader: 'ts-loader' }] },
  resolve: { extensions: [".ts", ".js"] },
  output: { filename: "bundle.js", path: path.resolve(__dirname, "dist") }
};
