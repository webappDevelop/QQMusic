
const path = require('path'),
      autoprefixer = require('autoprefixer');

module.exports = {

    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, '/build'),
        filename: 'main.js'
    },

    resolve: {
        
        alias: {
            'assets': path.resolve(__dirname, './src/assets')
        },
        extensions: ['.json','.js']
    },

    module: {
        rules: [
            {  
                test: /\.vue$/, 
                loader: 'vue-loader',
                options: {
                    scss: 'vue-style-loader!css-loader!sass-loader',
                    postcss: [autoprefixer()]
                }
            },
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {
                test: /\.json$/, loader: 'file-loader', exclude: /node_modules/,
                options: {
                    name: 'data/[name].[ext]'
                }
            },
            {test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=2048'}
        ]
    },

    
    devServer: {
        port: 8888,
        open: true
    }
}