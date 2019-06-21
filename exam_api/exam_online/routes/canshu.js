let express = require('express');
let router = express.Router();
let conn = require('./../db/db');


router.post('/api/get_choice1', (req, res)=>{
    const choice_else = req.body.data;
    console.log(choice_else);
    let sqlStr =  "SELECT * FROM choice WHERE choice_else = '"+ choice_else +"' ";//"+ choice_else +"
    // let sqlStr =   'SELECT * FROM choice'
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:203,message:{choice_content:results[0].choice_content}});
        }
    });
    //1.1数据库查询的语句


});

module.exports = router;