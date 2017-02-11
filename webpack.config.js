var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.png|\.svg|\.ttf|\.woff2|\.woff|\.eot/,
                loader: require.resolve("file-loader")
            }
        ]
    }
};