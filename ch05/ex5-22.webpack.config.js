// 예제 5-22 webpack.config.js에 소스매핑을 추가한 버전

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "dist/assets",
    filename: "bundle.js",
    sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
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
