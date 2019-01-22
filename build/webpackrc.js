const path = require('path')
// const packageJSON = require('../package')

module.exports = {
    alias: {
        root: path.resolve(__dirname, '../'),
        src: path.resolve(__dirname, '../src')
    },
    define: {
        port: process.env.port || 3000,
        nova_root: process.env.nova_root || '',
        nova_uri: process.env.nova_uri || ''
    },
    devServer: {
        host: process.env.host || 'localhost',
        port: process.env.port || 3000 // 端口
    },
    proxy: {
        '/site_api/v1': {
            target:
                process.env.nova_root ||
                `http://localhost:${process.env.port || 3000}`
        }
    }
}
