var webpack = require('webpack');

var commonsPlugin =

    new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: {
        main : "./jsx/app.js"
    },

    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['jsx?harmony']}
        ]
    },
    output: {
        path: __dirname + '/build/',
        publicPath: "/build/",
        filename: '[name].js'
    },
    externals: {
        "react-router": 'ReactRouter',
        "react" : "react"
    },

    plugin : [commonsPlugin]
};