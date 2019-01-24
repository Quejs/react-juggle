const merge = require('webpack-merge')
const common = require('./common.js')
const webpack = require('webpack')
const openBrowser = require('react-dev-utils/openBrowser')
const packageConfig = require('../../package.json')
const { proxy = {}, devServer = {} } = require('../webpackrc')

require('colors')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        compress: true, // 一切服务都启用 gzip 压缩
        hot: true, // 热更新
        progress: true,
        clientLogLevel: 'none', // 阻止浏览器console消息
        noInfo: true, // 启动时和每次保存之后，那些显示的 webpack 包(bundle)的消息将被隐藏。错误和警告仍然会显示。
        overlay: false,
        proxy,
        quiet: true,
        // contentBase: '/',
        // watchContentBase: true,
        watchOptions: {
            ignored: /node_modules/
        },
        after() {
            console.log(serverStatus)
            openBrowser(localAccess)
        },
        ...devServer
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
})

const localAccess = `${devServer.host}:${devServer.port}`

const serverStatus = `
===================
    local_service: ${localAccess.yellow}
     project_name: ${packageConfig.name || ''}
===================
`
