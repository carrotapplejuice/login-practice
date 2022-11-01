// const http = require('http');
// const app = http.createServer((req, res) => {

//     //  한글 꺠짐 현상 처리 방법
//     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

//     // console.log(req.url);
//     if (req.url === '/') {
//         res.end('여기는 루트 입니다.');
//     }
// })

// app.listen(3000, function () {
//     console.log("Hello World");
// })
"use strict";

//  모듈
const express = require("express");
const app = express();

//  라우팅
const home = require("./routes/home");

//  앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

//  use -> 미들 웨어를 등록해주는 메서드
app.use("/", home);

module.exports = app;