plugins: [
  new ExtractTextPlugin("bundle.css"),
  new OptimizeCss({
    assetNameRegExp: /\.optimize\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorOptions: {
      discardComments: {removeAll: true}
    },
    canPrint: true
  })
]
