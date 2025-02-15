const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '5888',
    database: 'dbtest'
});

connection.connect();

connection.query('SELECT * FROM userinfo', (error, results) => {
    if (error) throw error;

    console.log('userinfo table: ', results);
});

connection.end();