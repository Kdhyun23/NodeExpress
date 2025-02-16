// 모듈
const express = require('express');
const app = express();

// 포트
const port = 8080;

// 라우팅
const home = require('./src/routes');

// 앱 세팅
app.use('/', home);
app.set('views', __dirname + '/src');
app.set('view engine', 'ejs');
app.use(express.static('src/public'));

module.exports = app;