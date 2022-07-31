// @ts-check
const path = require("path");
const webpack4 = require("webpack4");
const { sentryWebpackPlugin } = require("@sentry/unplugin");

webpack4(
  {
    mode: "production",
    entry: "./src/entrypoint1.js",
    cache: false,
    output: {
      path: path.resolve(__dirname, `./out/webpack4`),
      filename: "index.js",
      library: "ExampleBundle",
      libraryTarget: "commonjs",
    },
    plugins: [sentryWebpackPlugin()],
    devtool: "source-map",
  },
  (err) => {
    if (err) {
      throw err;
    }
  }
);
