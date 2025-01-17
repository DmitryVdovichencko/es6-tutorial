 var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './js/main.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.bundle.js'
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 use:[
                 {
                loader: 'babel-loader',
                  }
                 ]
              
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };