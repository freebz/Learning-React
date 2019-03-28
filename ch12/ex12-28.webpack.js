{
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [
      "style-loader",
      "css-loader",
      {
	loader: "postcss-loader",
	options: {
	  plugins: () => [require("autoprefixer")]
	}
      }
    ]
  })
},
{
  test: /\.scss/,
  loader: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [
      "css-loader",
      {
	loader: "postcss-loader",
	options: {
	  plugins: () => [require("autoprefixer")]
	}
      },
      "sass-loader"
    ]
  })
}
