//  webpack.config.js ----


module.exports = {
  entry: './canbas/src/main.js',
  output: {
    filename: './docs/bundle.js',
    path: __dirname
  },
  devtool: "source-map",
  module:{
       rules:[
           {
               test:/\.css$/,
               use:['style-loader','css-loader']
           }
      ]
}

};
