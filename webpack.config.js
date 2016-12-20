// webpack.config.js
const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        app: path.join(__dirname, 'app', 'main.js'),
        vendor: ['jquery', 'toastr',
            'alt',
            'react',
            'react-dom',
            'react-router',
            'underscore',
            'magnific-popup'
        ]
    },
    output: {
        path: path.join(__dirname, 'public', 'js'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: 'babel_cache',
                    presets: ['es2015', 'react']
                }
            },
            { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
            {
                test: /\.css$/,
                loader: 'css-loader!postcss-loader'
            },
            {
                test: /\.scss$/,
                loader: 'css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }, {
            toastr: 'toastr'
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: false,
            sourcemap: true,
            beautify: true,
            dead_code: true
        })
    ]
}