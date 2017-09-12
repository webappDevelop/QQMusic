
const path = require('path');

module.exports = {

    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, '/build'),
        filename: 'main.js'
    },

    module: {
        rules: [
            {test: /\.vue$/, use: 'vue-loader'},
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.(png|jpg|svg)$/, use: 'url-loader?limit=2048'},
            {test: /\.(mp3)$/, use: 'file-loader'}
        ]
    },

    
    devServer: {
        port: 8888,
        open: true
    }
}