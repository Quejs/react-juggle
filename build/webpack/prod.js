const merge = require('webpack-merge')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../..')
        }),
        new UglifyJSPlugin(),
        new CopyWebpackPlugin([
            {
                from: 'public',
                to: 'public',
                toType: 'dir'
            }
        ])
    ]
})
