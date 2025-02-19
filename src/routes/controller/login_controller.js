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
        
        const query = "SELECT * FROM userinfo WHERE email = ? AND password = ?";
        connection.query(query, [email, password], (err, results) => {
            if (err) {
                console.error("쿼리 실행 오류:", err);
                res.status(500).json({ success: false, message: "서버 오류" });
                return;
            }
            if (results.length > 0) {
                res.json({ success: true, message: "로그인 성공", user: results[0] });
            } else {
                res.status(401).json({ success: false, message: "이메일 또는 비밀번호가 잘못되었습니다." });
            }
        });
    }
}

// connection.query('SELECT * from userinfo', (error, results) => {
//     if (error) throw error;
//     return results;
// });
//connection.end();

module.exports = {
    output,
    process
};  