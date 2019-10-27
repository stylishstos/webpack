const webpack = require('webpack');

const IS_PROD = false;

module.exports = {
    entry: './home',
    output: {
        path: __dirname,
        filename: 'build.js',
        library: 'home'
    },
    
    mode: 'development',

    watch: !IS_PROD,

    watchOptions: {
        aggregateTimeout: 100 // 300 default
    },

    devtool: !IS_PROD
    ? 'source-map'
    : null,

    plugins: [
        new webpack.DefinePlugin({
            IS_PROD: JSON.stringify(IS_PROD)
        })
    ],

    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader'
            }
        ]
    }
}