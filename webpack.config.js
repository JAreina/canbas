//  webpack.config.js
module.exports = {
    entry: './canbas/ejemplos/main.js',
    output: {
        filename: './public/bundle.js',
        path: __dirname
    },
    devtool: "source-map"
};
