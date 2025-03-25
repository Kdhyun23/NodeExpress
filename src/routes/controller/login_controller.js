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
    },
    winmain: (req, res) => {
        res.render('winmain');
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
    },
    member: (req, res) => {
        const email = req.body.email;
        const name = req.body.name;
        const password = req.body.password;
        
        const quertCheck = "SELECT * FROM userinfo WHERE email = ?";
        const query = "INSERT INTO userinfo (email, name, password) VALUES (?, ?, ?)";
        connection.query(quertCheck, [email], (err, results) => {
            if (err) {
                console.error("중복 검사 오류:", err);
                res.status(500).json({ success: false, message: "서버 오류" });
                return;
            }
            if (results.length > 0) {
                res.status(409).json({ success: false, message: "중복된 이메일입니다." });
                return;
            }else{
                // 중복이 없으면 회원가입 진행
                connection.query(query, [email, name, password], (err, results) => {
                    if (err) {
                        console.error("쿼리 실행 오류:", err);
                        res.status(500).json({ success: false, message: "서버 오류" });
                        return;
                    }
                    if (results.affectedRows > 0) {
                        res.json({ success: true, message: "회원가입 성공" });
                    } else {
                        res.status(500).json({ success: false, message: "회원가입 실패" });
                    }
                });
            }
        });
    }
}

module.exports = {
    output,
    process
};  