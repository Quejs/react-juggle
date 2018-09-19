const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware');
const express = require('express');
const openBrowser = require('react-dev-utils/openBrowser');

const devConfig = require('./webpack.dev.js');

const app = express();
const compiler = webpack(devConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: devConfig.output.publicPath
}));

app.listen(3000, () => {
    const URI = 'http://localhost:3000';
    console.log(`Example app listening on ${URI}`);
    openBrowser(URI)
});
