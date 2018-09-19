const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], { root: path.resolve(__dirname , '..') }),
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ]
};