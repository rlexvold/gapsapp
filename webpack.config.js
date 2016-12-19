// webpack.config.js
const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'app', 'main.js'),
    output: {
        path: path.join(__dirname, 'public', 'js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-0']
            }
        }, {
            test: /\.css$/,
            loader: 'css-loader!postcss-loader'
        }, {
            test: /\.scss$/,
            loader: 'css-loader!sass-loader'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: true,
            sourcemap: false,
            beautify: false,
            dead_code: true
        })
    ]
}