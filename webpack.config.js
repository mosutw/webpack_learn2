var webpack = require('webpack');
var bower_dir = __dirname + '/bower_components';

var config= {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
    entry: {
        app:[ './app/main.jsx'],
        vendors: ['react']
    },
    resolve: {
        alias: { }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        noParse: [ ],
        loaders: [
            {
                test: /\.jsx$/, 
                loader: 'babel-loader',
                query: {
                    presets:'react'
                }
            }
        ]
    }

};
	
config.addVendor('react', bower_dir + '/react/react.min.js');

module.exports=config;
