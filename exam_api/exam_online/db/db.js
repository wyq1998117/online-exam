
let mysql = require('mysql');


//建立数据库连接
const conn = mysql.createConnection({
    host:'127.0.0.1',//数据库地址
    user:'root',//账号
    password:'root',//密码
    database:'exam_content'//数据库名
});

conn.connect();
module.exports = conn;