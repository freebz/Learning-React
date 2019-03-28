var webpack = require("webpack")

module.exports = {
  entry: "./index-client.js",
  output: {
    path: "assets",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
	test: /\.js$/,
	exclude: /(node_modules)/,
	loader: 'babel-loader',
	query: {
	  presets: ['env', 'stage-0', 'react']
	}
      }
    ]
  }
}
