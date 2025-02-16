const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '5888',
    database: 'dbtest'
});
connection.connect();

const output = {
    login: (req, res) => {
        res.render('login');
    }
}

const process = {
    login: (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        console.log(email, password);
    }
}

connection.query('SELECT * from userinfo', (error, results) => {
    if (error) throw error;
    console.log('userinfo table: ', results);
});
connection.end();
module.exports = {
    output,
    process
};  