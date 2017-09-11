
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
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
        ]
    },

    devServer: {
        port: 8888,
        open: true
    }
}