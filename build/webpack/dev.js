const merge = require('webpack-merge')
const common = require('./common.js')
const webpack = require('webpack')
const openBrowser = require('react-dev-utils/openBrowser')
const packageConfig = require('../../package.json')
<<<<<<< HEAD:build/webpack/dev.js
const { proxy = {} } = require('../webpackrc')
=======
const { proxy } = require('../webpackrc')
>>>>>>> origin/master:build/webpack/dev.js
require('colors')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        compress: true, // 一切服务都启用 gzip 压缩
        port: 3000, // 端口
        hot: true, // 热更新
        clientLogLevel: 'none', // 阻止浏览器console消息
        noInfo: true, // 启动时和每次保存之后，那些显示的 webpack 包(bundle)的消息将被隐藏。错误和警告仍然会显示。
        proxy,
        after() {
            // 在服务内部的所有其他中间件之后， 提供执行自定义中间件的功能
            console.log(serverStatus)
            openBrowser(URI)
        }
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
})

const URI = 'http://localhost:3000'

const serverStatus = `
===================
    local_service: ${URI.yellow}
     project_name: ${packageConfig.name || ''}
===================
`
