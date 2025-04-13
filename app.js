// 모듈
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const session = require('express-session');
app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // HTTPS 사용 시 true로 설정
}));

// 포트
const port = 8080;

// 라우팅
const home = require('./src/routes');

// 앱 세팅
app.use(express.static('src/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', home);
app.set('views', __dirname + '/src/public/main');
app.set('view engine', 'ejs');

module.exports = app;