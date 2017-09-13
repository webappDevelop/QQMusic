
const path = require('path');

module.exports = {

    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, '/build'),
        filename: 'main.js'
    },

    resolve: {
        alias: {
            // 'mp3': path.resolve(__dirname, './src/play/mp3')
        }
    },

    module: {
        rules: [
            {test: /\.vue$/, use: 'vue-loader'},
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.(png|jpg|svg)$/, use: 'url-loader?limit=2048'},
            {
                test: /\.(mp3)$/, 
                loader: 'file-loader',
                options: {
                    name: 'mp3/[name].[ext]' //[name].[ext] 是把文件原名当成构建后的名，
                                            //如果不加，他会默认以哈希码的格式构建
                }
            }
        ]
    },

    
    devServer: {
        port: 8888,
        open: true
    }
}