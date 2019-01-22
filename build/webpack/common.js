const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { alias = {}, define = {} } = require('../webpackrc')

const devMode = process.env.NODE_ENV === 'development'

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../../dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            // {
            //     test: /\.(t|j)sx?$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env', '@babel/preset-react']
            //             // plugins: ['react-hot-loader/babel']
            //         }
            //     }
            // },

            // {
            //     // test: /\.tsx?$/,
            //     test: /\.(t|j)sx?$/,
            //     use: 'ts-loader',
            //     exclude: /node_modules/
            // },

            {
                test: /\.(t|j)sx?$/,
                use: { loader: 'awesome-typescript-loader' }
            },
            // addition - add source-map support
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            ...alias
            // root: path.resolve(__dirname, '../../')
        },
        extensions: ['.js', '.json', '.md', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.DefinePlugin({
            ...define
            // port: process.env.port || 3000
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        })
    ]
}
