const express = require("express")

const server = express()
const webpack = require("webpack")
const staticMiddleWare = express.static("dist")

// webpack 설정
const config = require("../../webpack.config")
const compiler = webpack(config);

// 웹팩을 미들웨어로 등록해서 사용하기 위한 모듈
const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
)

// 핫 로딩 미들웨어를
const webpackHotMiddleware = require("webpack-hot-middleware")(compiler)

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);
server.use(staticMiddleWare);

server.listen(3000, () => {
    console.log("Server is Listening")
});


