const merge = require('webpack-merge')
const common = require('./common.js')
const webpack = require('webpack')
const openBrowser = require('react-dev-utils/openBrowser')
const WebpackDevServer = require('webpack-dev-server')
// const path = require('path')

const packageConfig = require('../../package.json')
const { proxy = {} } = require('../webpackrc')
require('colors')

const serverConfig = {
    host: process.env.host || 'localhost',
    port: process.env.port || 3000, // 端口
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
    after() {}
}

const compiler = webpack(
    merge(common, {
        mode: 'development',
        devtool: 'inline-source-map',
        plugins: [new webpack.HotModuleReplacementPlugin()]
    })
)

const localAccess = `${serverConfig.host}:${serverConfig.port}`

const serverStatus = `
===================
    local_service: ${localAccess.yellow}
     project_name: ${packageConfig.name || ''}
===================
`

// new webpack.ProgressPlugin((percentage, msg, current, active, modulepath) => {
//     if (process.stdout.isTTY && percentage < 1) {
//         process.stdout.cursorTo(0)
//         modulepath = modulepath
//             ? ' …' + modulepath.substr(modulepath.length - 30)
//             : ''
//         current = current ? ' ' + current : ''
//         active = active ? ' ' + active : ''
//         process.stdout.write(
//             (percentage * 100).toFixed(0) +
//                 '% ' +
//                 msg +
//                 current +
//                 active +
//                 modulepath +
//                 ' '
//         )
//         process.stdout.clearLine(1)
//     } else if (percentage == 1) {
//         process.stdout.cursorTo(0)
//         console.log(
//             `${(percentage * 100).toFixed(0)}% webpack: done. ${serverStatus}`
//         )
//         openBrowser(localAccess)
//     }
// }).apply(compiler)

const server = new WebpackDevServer(compiler, serverConfig)
const { port, host } = serverConfig
server.listen(port, host, err => {
    if (err) {
        console.log('err: ', err)
        return
    }

    console.log(serverStatus)
    openBrowser(localAccess)
})
