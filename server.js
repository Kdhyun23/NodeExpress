const express = require('express');
const app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '5888',
    database: 'dbtest'
});

app.use(express.static('public'));

app.listen(8080, function(){
    console.log('Server is running on port 8080');
});

app.get('/index', function(req, res){
    //res.send('npm run nodemon');
    res.sendFile(__dirname + '/src/index.html');
});

app.get('/select', function(req, res){
    connection.connect();
    connection.query('SELECT * FROM userinfo', (error, results) => {
        if (error) throw error;
        res.send(results);
    });
    connection.end();
});

connection.connect();
connection.query('SELECT * FROM userinfo', (error, results) => {
    if (error) throw error;

    console.log('userinfo table: ', results);
});

connection.end();