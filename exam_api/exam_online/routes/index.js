let express = require('express');
let router = express.Router();
let conn = require('./../db/db');
let svgCaptcha = require('svg-captcha');
let md5 = require('blueimp-md5');//加密

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/**
 * 插入选择题到数据库表中
 */
const choiceArr = require('./../data/exam_choice').message;
//想要插入则需要通过api来触发
router.get('/exam_choice/api', function (req, res, next) {
    //遍历数组，取出对应的字段放到小的数组中

    //1定义临时数组
    let temp_arr_all = [];
    //2.遍历
    for (let i = 0; i < choiceArr.length; i++) {
        //2.1取出单个数据对象
        let oldArr = choiceArr[i];
        console.log(oldArr);

        //2.2取出数据表中对应字段
        let temp_arr = [];
        temp_arr.push(oldArr.id);
        temp_arr.push(oldArr.question);
        temp_arr.push(oldArr.answer);
        temp_arr.push(oldArr.content);
        //2.3合并到大的数组
        temp_arr_all.push(temp_arr);
    }
    // console.log(temp_arr_all);
    //3.批量插入到数据库表中
    //3.1数据库查询的语句
    let sqlStr = "INSERT INTO exam_choice(`id`,`question`,`answer`,`content`) VALUES ?";

    //3.2执行语句
    conn.query(sqlStr, [temp_arr_all], function (error, results, fields) {
        if (error) {
            // res.json({err_code:0,message:'请求数据失败'});
            console.log("失败");
        } else {
            // res.json({success_code:200,message:results});
            console.log("成功");
        }
    });
});

/**
 * 插入填空题到数据库表中
 */
const fillArr = require('./../data/exam_fill').message.data;
//想要插入则需要通过api来触发
router.get('/exam_fill/api', function (req, res, next) {
    //遍历数组，取出对应的字段放到小的数组中

    //1定义临时数组
    let temp_arr_all = [];
    //2.遍历
    for (let i = 0; i < fillArr.length; i++) {
        //2.1取出单个数据对象
        let oldArr = fillArr[i];
        // console.log(oldArr);

        //2.2取出数据表中对应字段
        let temp_arr = [];
        temp_arr.push(oldArr.id);
        temp_arr.push(oldArr.question);
        temp_arr.push(oldArr.answer);
        //2.3合并到大的数组
        temp_arr_all.push(temp_arr);
    }
    // console.log(temp_arr_all);
    //3.批量插入到数据库表中
    //3.1数据库查询的语句
    let sqlStr = "INSERT INTO exam_fill(`id`,`question`,`answer`) VALUES ?";

    //3.2执行语句
    conn.query(sqlStr, [temp_arr_all], function (error, results, fields) {
        if (error) {
            // res.json({err_code:0,message:'请求数据失败'});
            console.log("失败");
        } else {
            // res.json({success_code:200,message:results});
            console.log("成功");
        }
    });
});

/**
 * 插入问答题到数据库表中
 */
const askArr = require('../data/exam_ask').message.data;
//想要插入则需要通过api来触发
router.get('/exam_ask/api', function (req, res, next) {
    //遍历数组，取出对应的字段放到小的数组中

    //1定义临时数组
    let temp_arr_all = [];
    //2.遍历
    for (let i = 0; i < askArr.length; i++) {
        //2.1取出单个数据对象
        let oldArr = askArr[i];
        // console.log(oldArr);

        //2.2取出数据表中对应字段
        let temp_arr = [];
        temp_arr.push(oldArr.id);
        temp_arr.push(oldArr.question);
        temp_arr.push(oldArr.answer);
        // console.log(temp_arr);
        //2.3合并到大的数组
        temp_arr_all.push(temp_arr);
    }
    // console.log(temp_arr_all);
    //3.批量插入到数据库表中
    //3.1数据库查询的语句
    let sqlStr = "INSERT INTO exam_ask(`id`,`question`,`answer`) VALUES ?";

    //3.2执行语句
    conn.query(sqlStr, [temp_arr_all], function (error, results, fields) {
        if (error) {
            // res.json({err_code:0,message:'请求数据失败'});
            console.log("失败");
        } else {
            // res.json({success_code:200,message:results});
            console.log("成功");
        }
    });
});

/**
 * 插入材料题到数据库表中
 */
const materialArr = require('../data/exam_material').message.data;
//想要插入则需要通过api来触发
router.get('/exam_material/api', function (req, res, next) {
    //遍历数组，取出对应的字段放到小的数组中

    //1定义临时数组
    let temp_arr_all = [];
    //2.遍历
    for (let i = 0; i < materialArr.length; i++) {
        //2.1取出单个数据对象
        let oldArr = materialArr[i];
        // console.log(oldArr);

        //2.2取出数据表中对应字段
        let temp_arr = [];
        temp_arr.push(oldArr.id);
        temp_arr.push(oldArr.question);
        temp_arr.push(oldArr.answer);
        // console.log(temp_arr);
        //2.3合并到大的数组
        temp_arr_all.push(temp_arr);
    }
    // console.log(temp_arr_all);
    //3.批量插入到数据库表中
    //3.1数据库查询的语句
    let sqlStr = "INSERT INTO exam_material(`id`,`question`,`answer`) VALUES ?";

    //3.2执行语句
    conn.query(sqlStr, [temp_arr_all], function (error, results, fields) {
        if (error) {
            // res.json({err_code:0,message:'请求数据失败'});
            console.log("失败");
        } else {
            // res.json({success_code:200,message:results});
            console.log("成功");
        }
    });
});

/**
 * 获取选择题题目
 */
router.get('/api/exam_choice', (req, res)=>{

   //1.1数据库查询的语句
   //  let sqlStr = 'SELECT * FROM exam_choice';
    let sqlStr = 'SELECT * FROM exam_choice  ORDER BY  RAND() LIMIT 10';//随机查询数据库10条数据
    //1.2执行语句
    conn.query(sqlStr, function (error, results, fields) {
        if (error){
          res.json({err_code:0,message:'请求数据失败'});
        }else{
            res.json({success_code:200,message:results});
        }
    });
});
/**
 * 获取填空题题目
 */
router.get('/api/exam_fill', (req, res)=>{

    //1.1数据库查询的语句
    // let sqlStr = 'SELECT * FROM exam_fill';
    let sqlStr = 'SELECT * FROM exam_fill  ORDER BY  RAND() LIMIT 10';
    //1.2执行语句
    conn.query(sqlStr, function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            res.json({success_code:200,message:results});
        }
    });
});

/**
 * 获取问答题题目
 */
router.get('/api/exam_ask', (req, res)=>{

    //1.1数据库查询的语句
    // let sqlStr = 'SELECT * FROM exam_ask';
    let sqlStr = 'SELECT * FROM exam_ask  ORDER BY  RAND() LIMIT 4';
    //1.2执行语句
    conn.query(sqlStr, function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            res.json({success_code:200,message:results});
        }
    });
});

/**
 * 获取材料题题目
 */
router.get('/api/exam_material', (req, res)=>{

    //1.1数据库查询的语句
    // let sqlStr = 'SELECT * FROM exam_material';
    let sqlStr = 'SELECT * FROM exam_material  ORDER BY  RAND() LIMIT 3';
    //1.2执行语句
    conn.query(sqlStr, function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            res.json({success_code:200,message:results});
        }
    });
});

/**
 * 接口
 * 一次性图形验证码
 */
router.get('/api/captcha', function (req, res, next) {
    //1.生成随机验证码
    let captcha = svgCaptcha.create({
        color: true,
        noise: 2,
        ignoreChars: '0o1i',
        size:4
    });


    //2.保存在服务器session中
    req.session.captcha = captcha.text.toLowerCase();
    // console.log(req.session);
    //3.返回客户端
    res.type('svg');
    res.send(captcha.data);
})


/**
 * 用户名密码登录
 */
router.post('/api/login_name', function (req, res, next) {
    //1.获取数据
    const user_name = req.body.user_name;
    const user_pwd = md5(req.body.user_pwd);
    const choose_radio = req.body.choose_radio;
    const captcha = req.body.captcha.toLowerCase();

    // console.log(captcha,req.session.captcha,req.session);
//
//     //2.校验验证码
    if(captcha !== req.session.captcha){//验证码错误
        res.json({err_code:404,message:'验证码不正确!'});
        return;
    }
    delete req.session.captcha;//清空验证码



    //3.查询
    if(choose_radio === 'true') {
        let sqlStr = "SELECT * FROM user_info WHERE user_name = '" + user_name + "' LIMIT 1";

        conn.query(sqlStr, function (error, results, fields) {
            if (error) {
                res.json({err_code: 0, message: '用户名错误！'});
            } else {
                // res.json({success_code:200,message:results});
                results = JSON.parse(JSON.stringify(results));
                // console.log(results);
                if (results[0]) {
                    //用户已经存在
                    //验证密码是否正确
                    if (results[0].user_pwd !== user_pwd) {
                        res.json({err_code: 0, message: '密码错误！'});
                    } else {
                        req.session.userId = results[0].id;//保存id
                        //返回数据给客户端
                        return res.json({
                            success_code: 200,
                            message: {
                                id: results[0].id,
                                user_name: results[0].user_name,
                                user_pwd: results[0].user_pwd,
                                real_name: results[0].real_name,
                                user_num: results[0].user_num,
                                choose_radio: results[0].choose_radio
                            },
                            info: '登录成功！'
                        });

                    }
                }
                else {
                    results = JSON.parse(JSON.stringify(results));
                    //返回数据数据给客户端
                    res.json({
                        err_code: 502,
                        // message: {id: results[0].id, user_name: results[0].user_name},
                        info: '用户未注册'
                    });
                }

            }
        });
    }
    else{
        let sqlStr = "SELECT * FROM user_teacher WHERE user_name = '"+ user_name +"' LIMIT 1";

        conn.query(sqlStr, function (error, results, fields) {
            if (error) {
                res.json({err_code:0,message:'用户名错误！'});
            } else {
                // res.json({success_code:200,message:results});
                results = JSON.parse(JSON.stringify(results));
                if(results[0]){
                    //用户已经存在
                    //验证密码是否正确
                    if(results[0].user_pwd !== user_pwd){
                        res.json({err_code:101,message:'密码错误！'});
                    }else{
                        req.session.userId = results[0].id;//保存id
                        //返回数据给客户端
                        return res.json({
                            success_code:202,
                            message:{id:results[0].id,tea_name:results[0].tea_name,tea_num:results[0].tea_num,user_name:results[0].user_name,user_pwd:results[0].user_pwd},
                            info:'登录成功！'
                        });

                    }
                }
                else{
                    results = JSON.parse(JSON.stringify(results));
                    //返回数据数据给客户端
                    res.json({
                        err_code: 505,
                        // message: {id: results[0].id, user_name: results[0].user_name},
                        info:'没有该用户'
                    });
                }

            }
        });
    }
});

/**
 * 用户名注册
 */
router.post('/api/reg_name', function (req, res, next) {
    //1.获取数据
    const user_name = req.body.user_name;
    const user_pwd = md5(req.body.user_pwd);
    const real_name = req.body.real_name;
    const user_num = req.body.user_num;


    //3.查询
    let sqlStr = "SELECT * FROM user_info WHERE user_name = '" + user_name + "' LIMIT 1";

    conn.query(sqlStr, function (error, results, fields){
        if (error) {
            res.json({err_code: 0, message: '用户名错误！'});
        } else {
            // res.json({success_code:200,message:results});
            results = JSON.parse(JSON.stringify(results));
            if (results[0]) {
                //用户已经存在
                //验证密码是否正确
                // if (results[0].user_pwd !== user_pwd) {
                //     res.json({err_code: 0, message: '密码错误！'});
                // } else {
                    req.session.userId = results[0].id;//保存id
                    //返回数据给客户端
                    return res.json({
                        error_code: 404,
                        message: {id: results[0].id, user_name: results[0].user_name, user_pwd: results[0].user_pwd},
                        info: '用户存在'
                    });
                //
                // }
                // res.write("用户已经存在");
                // return;
            }
            else {
                const addSql = "INSERT INTO user_info(user_name,user_pwd,real_name,user_num) VALUES (?,?,?,?)";
                const addSqlParams = [user_name, user_pwd,real_name,user_num];
                conn.query(addSql, addSqlParams, function (error, results, fields) {
                    console.log(addSqlParams);
                    results = JSON.parse(JSON.stringify(results));
                    console.log(results);
                    if (!error) {
                        // req.session.userId = results[0].results.insertId;
                        let sqlStr = "SELECT * FROM user_info WHERE id = '" + results.insertId + "' LIMIT 1";

                        conn.query(sqlStr, function (error, results, fields) {
                            if (error) {
                                res.json({err_code: 0, message: '请求数据失败'});
                            } else {
                                results = JSON.parse(JSON.stringify(results));
                                //返回数据数据给客户端
                                res.json({
                                    success_code: 200,
                                    message: {id: results[0].id, user_name: results[0].user_name}
                                });
                            }
                        });
                    }
                });
            }
        }

    });
});

/**
 *  考生提交试卷
 */
router.post('/api/sub', function (req, res, next) {
    //1.获取数据
    const real_name = req.body.real_name;
    const sub_content = req.body.sub_content;
    const user_num = req.body.user_num;

    const addSql = "INSERT INTO exam_sub(sub_content,user_num,real_name) VALUES (?,?,?)";
    const addSqlParams = [sub_content, user_num,real_name];
    console.log(addSqlParams);
    conn.query(addSql, addSqlParams, function (error, results, fields) {
        results = JSON.parse(JSON.stringify(results));
        if (!error) {
            // req.session.userId = results[0].results.insertId;
            let sqlStr = "SELECT * FROM exam_sub WHERE id = '" + results.insertId + "' LIMIT 1";

            conn.query(sqlStr, function (error, results, fields) {
                if (error) {
                    res.json({err_code: 0, message: '请求数据失败'});
                } else {
                    results = JSON.parse(JSON.stringify(results));
                    //返回数据数据给客户端
                    res.json({
                        success_code: 200,
                        message: {id: results[0].id, real_name: results[0].real_name,sub_content:results[0].sub_content, user_num: results[0].user_num}
                    });
                }
            });
        }
    });


});

/**
 *  增加试卷
 */
router.post('/api/test_bank', function (req, res, next) {
    //1.获取数据
    const test_name = req.body.test_name;
    const test_des = req.body.test_des;
    const real_name = req.body.real_name;
    const item_type = req.body.item_type;
    const item_date = req.body.item_date;
    const choice_else = req.body.choice_else;
    const build = req.body.build;


    //3.查询
    let sqlStr = "SELECT * FROM test_bank WHERE test_name = '" + test_name + "' LIMIT 1";

    conn.query(sqlStr, function (error, results, fields){
        if (error) {
            res.json({err_code: 0, message: '错误！'});
        } else {
            // res.json({success_code:200,message:results});
            results = JSON.parse(JSON.stringify(results));
            if (results[0]) {
                //用户已经存在
                req.session.userId = results[0].id;//保存id
                //返回数据给客户端
                return res.json({
                    error_code: 404,
                    message: {id: results[0].id, test_name: results[0].test_name, item_date: results[0].item_date,choice_else: results[0].choice_else},
                    info: '题库名已存在'
                });

            }
            else {
                const addSql = "INSERT INTO test_bank(test_name,test_des,item_type,item_date,choice_else,build) VALUES (?,?,?,?,?,?)";
                const addSqlParams = [test_name, test_des,item_type,item_date,choice_else,build];
                conn.query(addSql, addSqlParams, function (error, results, fields) {
                    console.log(addSqlParams);
                    results = JSON.parse(JSON.stringify(results));
                    console.log(results);
                    if (!error) {
                        // req.session.userId = results[0].results.insertId;
                        let sqlStr = "SELECT * FROM test_bank WHERE id = '" + results.insertId + "' LIMIT 1";

                        conn.query(sqlStr, function (error, results, fields) {
                            if (error) {
                                res.json({err_code: 0, message: '请求数据失败'});
                            } else {
                                results = JSON.parse(JSON.stringify(results));
                                //返回数据数据给客户端
                                res.json({
                                    success_code: 200,
                                    message: {id: results[0].id,test_name: results[0].test_name,test_des:results[0].test_des,item_type:results[0].item_type,item_date:results[0].item_date,choice_else: results[0].choice_else}
                                });
                            }
                        });
                    }
                });
            }
        }

    });
});
/**
 *  获取试卷内容
 */
router.get('/api/get_test', (req, res)=>{

    //1.1数据库查询的语句
    let sqlStr = 'SELECT * FROM test_bank';
    //1.2执行语句
    conn.query(sqlStr, function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            res.json({success_code:200,message:results});
        }
    });
});


/**
 *  增加题库
 */
router.post('/api/item_bank', function (req, res, next) {
    //1.获取数据
    const item_name = req.body.item_name;
    const item_des = req.body.item_des;
    const real_name = req.body.real_name;
    const item_type = req.body.item_type;
    const item_date = req.body.item_date;
    const choice_else = req.body.choice_else;
    const build = req.body.build;
    console.log(build);

    //3.查询
    let sqlStr = "SELECT * FROM item_bank WHERE item_name = '" + item_name + "' LIMIT 1";

    conn.query(sqlStr, function (error, results, fields){
        if (error) {
            res.json({err_code: 0, message: '错误！'});
        } else {
            // res.json({success_code:200,message:results});
            results = JSON.parse(JSON.stringify(results));
            if (results[0]) {
                //用户已经存在
                req.session.userId = results[0].id;//保存id
                //返回数据给客户端
                return res.json({
                    error_code: 404,
                    message: {id: results[0].id, item_name: results[0].user_name, item_date: results[0].item_date,choice_else: results[0].choice_else},
                    info: '题库名已存在'
                });

            }
            else {
                const addSql = "INSERT INTO item_bank(item_name,item_des,item_type,item_date,choice_else,build) VALUES (?,?,?,?,?,?)";
                const addSqlParams = [item_name, item_des,item_type,item_date,choice_else,build];
                conn.query(addSql, addSqlParams, function (error, results, fields) {
                    console.log(addSqlParams);
                    results = JSON.parse(JSON.stringify(results));
                    console.log(results);
                    if (!error) {
                        // req.session.userId = results[0].results.insertId;
                        let sqlStr = "SELECT * FROM item_bank WHERE id = '" + results.insertId + "' LIMIT 1";

                        conn.query(sqlStr, function (error, results, fields) {
                            if (error) {
                                res.json({err_code: 0, message: '请求数据失败'});
                            } else {
                                results = JSON.parse(JSON.stringify(results));
                                //返回数据数据给客户端
                                res.json({
                                    success_code: 200,
                                    message: {id: results[0].id,item_name: results[0].item_name,item_des:results[0].item_des,item_type:results[0].item_type,item_date:results[0].item_date,choice_else: results[0].choice_else}
                                });
                            }
                        });
                    }
                });
            }
        }

    });
});
/**
 *  获取题库内容
 */
router.get('/api/get_item', (req, res)=>{

    //1.1数据库查询的语句
    let sqlStr = 'SELECT * FROM item_bank';
    //1.2执行语句
    conn.query(sqlStr, function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            res.json({success_code:200,message:results});
        }
    });
});
/**
 *  删除题库内容
 */
router.post('/api/del_item', (req, res)=>{

    const item_name = req.body.item_name;
    console.log(item_name);
    //1.1数据库查询的语句
    let sqlStr = "delete from item_bank where item_name = \'"+item_name+"\'";
    //1.2执行语句
    conn.query(sqlStr, function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            res.json({success_code:200,message:results});
        }
    });
});
/**
 *  增加选择题内容
 */
router.post('/api/choice', function (req, res, next) {
    //1.获取数据
    const choice_content = req.body.choice_content;
    const choice_analysis = req.body.choice_analysis;
    const choice_A = req.body.choice_A;
    const choice_B = req.body.choice_B;
    const choice_C = req.body.choice_C;
    const choice_D = req.body.choice_D;
    const choice_else = req.body.choice_else;
    const answer = req.body.answer;


    //3.查询
    let sqlStr = "SELECT * FROM choice WHERE choice_content = '" + choice_content + "' LIMIT 1";

    conn.query(sqlStr, function (error, results, fields){
        if (error) {
            res.json({err_code: 0, message: '错误！'});
        } else {
            // res.json({success_code:200,message:results});
            results = JSON.parse(JSON.stringify(results));
            if (results[0]) {
                //用户已经存在
                req.session.userId = results[0].id;//保存id
                //返回数据给客户端
                return res.json({
                    error_code: 404,
                    message: {
                        id: results[0].id,
                        choice_content: results[0].choice_content,
                        choice_analysis: results[0].choice_analysis,
                        choice_A: results[0].choice_A,
                        choice_B: results[0].choice_B,
                        choice_C: results[0].choice_C,
                        choice_D: results[0].choice_D,
                        choice_else: results[0].choice_else,
                    },
                    info:'该题目已存在',


                });

            }
            else {
                const addSql = "INSERT INTO choice(choice_content,choice_analysis,choice_A,choice_B,choice_C,choice_D,choice_else,answer) VALUES (?,?,?,?,?,?,?,?)";
                const addSqlParams = [choice_content,choice_analysis,choice_A,choice_B,choice_C,choice_D,choice_else,answer];
                conn.query(addSql, addSqlParams, function (error, results, fields) {
                    results = JSON.parse(JSON.stringify(results));
                    console.log(results);
                    if (!error) {
                        // req.session.userId = results[0].results.insertId;
                        let sqlStr = "SELECT * FROM choice WHERE id = '" + results.insertId + "' LIMIT 1";

                        conn.query(sqlStr, function (error, results, fields) {
                            if (error) {
                                res.json({err_code: 0, message: '请求数据失败'});
                            } else {
                                results = JSON.parse(JSON.stringify(results));
                                //返回数据数据给客户端
                                res.json({
                                    success_code: 200,
                                    message: {id: results[0].id,item_name: results[0].item_name,item_des:results[0].item_des,item_type:results[0].item_type,item_date:results[0].item_date}
                                });
                            }
                        });
                    }
                });
            }
        }

    });
});

/**
 *  获取选择题内容
 */
router.get('/api/get_choice', (req, res)=>{
    const choice_else = req.query.choice_else;

    let sqlStr =  "SELECT * FROM choice WHERE choice_else = '"+ choice_else +"' ";//"+ choice_else +"
    // let sqlStr =   'SELECT * FROM choice'
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});

// router.post('/', (req, res)=>{
//     const choice_else = req.body.data;
//     // console.log(choice_else);
//     let sqlStr =  "SELECT * FROM choice WHERE choice_else = '"+ choice_else +"' ";//"+ choice_else +"
//     // let sqlStr =   'SELECT * FROM choice'
//     //1.2执行语句
//     conn.query(sqlStr,function (error, results, fields) {
//         if (error){
//             res.json({err_code:0,message:'请求数据失败'});
//         }else{
//             results = JSON.parse(JSON.stringify(results));
//             res.json({success_code:203,message:{choice_content:results[0].choice_content}});
//         }
//     });
//     //1.1数据库查询的语句
// });
/**
 *  删除选择题内容
 */
router.post('/api/del_choice', (req, res)=>{

    const choice_content = req.body.choice_content;
    //1.1数据库查询的语句
    let sqlStr = "delete from choice where choice_content = \'"+choice_content+"\'";
    //1.2执行语句
    conn.query(sqlStr, function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            res.json({success_code:200,message:results});
        }
    });
});
/**
 *  增加填空题内容
 */
router.post('/api/fill_save', function (req, res, next) {
    //1.获取数据
    const fill_content = req.body.fill_content;
    const fill_analysis = req.body.fill_analysis;
    const fill_one = req.body.fill_one;
    const fill_two = req.body.fill_two;
    const fill_three = req.body.fill_three;
    const choice_else = req.body.choice_else;

    //3.查询
    let sqlStr = "SELECT * FROM fill WHERE fill_content = '" + fill_content + "' LIMIT 1";

    conn.query(sqlStr, function (error, results, fields){
        if (error) {
            res.json({err_code: 0, message: '错误！'});
        } else {
            // res.json({success_code:200,message:results});
            results = JSON.parse(JSON.stringify(results));
            if (results[0]) {
                //用户已经存在
                req.session.userId = results[0].id;//保存id
                //返回数据给客户端
                return res.json({
                    error_code: 403,
                    message: {id: results[0].id,fill_content: results[0].fill_content,fill_analysis: results[0].fill_analysis},
                    info:'该题目已存在',
                });

            }
            else {
                const addSql = "INSERT INTO fill(fill_content,fill_analysis,fill_one,fill_two,fill_three,choice_else) VALUES (?,?,?,?,?,?)";
                const addSqlParams = [fill_content,fill_analysis,fill_one,fill_two,fill_three,choice_else];
                conn.query(addSql, addSqlParams, function (error, results, fields) {
                    results = JSON.parse(JSON.stringify(results));
                    console.log(results);
                    if (!error) {
                        // req.session.userId = results[0].results.insertId;
                        let sqlStr = "SELECT * FROM fill WHERE id = '" + results.insertId + "' LIMIT 1";

                        conn.query(sqlStr, function (error, results, fields) {
                            if (error) {
                                res.json({err_code: 0, message: '请求数据失败'});
                            } else {
                                results = JSON.parse(JSON.stringify(results));
                                //返回数据数据给客户端
                                res.json({
                                    success_code: 203,
                                    message: {id: results[0].id,fill_content: results[0].fill_content}
                                });
                            }
                        });
                    }
                });
            }
        }

    });
});
/**
 *  获取填空题内容
 */

router.get('/api/get_fill', (req, res)=>{
    const choice_else = req.query.choice_else;
    // console.log(choice_else);
    let sqlStr =  "SELECT * FROM fill WHERE choice_else = '"+ choice_else +"' ";//"+ choice_else +"
    // let sqlStr =   'SELECT * FROM fill';
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});
/**
 *  删除填空题内容
 */
router.post('/api/del_fill', (req, res)=>{

    const fill_content = req.body.fill_content;
    //1.1数据库查询的语句
    let sqlStr = "delete from fill where fill_content = \'"+fill_content+"\'";
    //1.2执行语句
    conn.query(sqlStr, function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            res.json({success_code:200,message:results});
        }
    });
});

/**
 *  增加问答题内容
 */
router.post('/api/ask_save', function (req, res, next) {
    //1.获取数据
    const ask_content = req.body.ask_content;
    const ask_analysis = req.body.ask_analysis;
    const choice_else = req.body.choice_else;

    //3.查询
    let sqlStr = "SELECT * FROM ask WHERE ask_content = '" + ask_content + "' LIMIT 1";

    conn.query(sqlStr, function (error, results, fields){
        if (error) {
            res.json({err_code: 0, message: '错误！'});
        } else {
            // res.json({success_code:200,message:results});
            results = JSON.parse(JSON.stringify(results));
            if (results[0]) {
                //用户已经存在
                req.session.userId = results[0].id;//保存id
                //返回数据给客户端
                return res.json({
                    error_code: 403,
                    message: {id: results[0].id,ask_content: results[0].ask_content,ask_analysis: results[0].ask_analysis},
                    info:'该题目已存在',
                });

            }
            else {
                const addSql = "INSERT INTO ask(ask_content,ask_analysis,choice_else) VALUES (?,?,?)";
                const addSqlParams = [ask_content,ask_analysis,choice_else];
                conn.query(addSql, addSqlParams, function (error, results, fields) {
                    results = JSON.parse(JSON.stringify(results));
                    console.log(results);
                    if (!error) {
                        // req.session.userId = results[0].results.insertId;
                        let sqlStr = "SELECT * FROM ask WHERE id = '" + results.insertId + "' LIMIT 1";

                        conn.query(sqlStr, function (error, results, fields) {
                            if (error) {
                                res.json({err_code: 0, message: '请求数据失败'});
                            } else {
                                results = JSON.parse(JSON.stringify(results));
                                //返回数据数据给客户端
                                res.json({
                                    success_code: 203,
                                    message: {id: results[0].id,ask_content: results[0].ask_content}
                                });
                            }
                        });
                    }
                });
            }
        }

    });
});
/**
 *  获取问答题内容
 */
router.get('/api/get_ask', (req, res)=>{
    const choice_else = req.query.choice_else;
    // console.log(choice_else);
    let sqlStr =  "SELECT * FROM ask WHERE choice_else = '"+ choice_else +"' ";//"+ choice_else +"
    // let sqlStr =   'SELECT * FROM ask';
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});
/**
 *  删除问答题内容
 */
router.post('/api/del_ask', (req, res)=>{

    const ask_content = req.body.ask_content;
    //1.1数据库查询的语句
    let sqlStr = "delete from ask where ask_content = \'"+ask_content+"\'";
    //1.2执行语句
    conn.query(sqlStr, function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            res.json({success_code:200,message:results});
        }
    });
});

/**
 *  增加组合题内容
 */
router.post('/api/mix_save', function (req, res, next) {
    //1.获取数据
    const mix_content = req.body.mix_content;
    const mix_analysis = req.body.mix_analysis;
    const choice_else = req.body.choice_else;

    //3.查询
    let sqlStr = "SELECT * FROM mix WHERE mix_content = '" + mix_content + "' LIMIT 1";

    conn.query(sqlStr, function (error, results, fields){
        if (error) {
            res.json({err_code: 0, message: '错误！'});
        } else {
            // res.json({success_code:200,message:results});
            results = JSON.parse(JSON.stringify(results));
            if (results[0]) {
                //用户已经存在
                req.session.userId = results[0].id;//保存id
                //返回数据给客户端
                return res.json({
                    error_code: 403,
                    message: {id: results[0].id,mix_content: results[0].mix_content,mix_analysis: results[0].mix_analysis},
                    info:'该题目已存在',
                });

            }
            else {
                const addSql = "INSERT INTO mix(mix_content,mix_analysis,choice_else) VALUES (?,?,?)";
                const addSqlParams = [mix_content,mix_analysis,choice_else];
                conn.query(addSql, addSqlParams, function (error, results, fields) {
                    results = JSON.parse(JSON.stringify(results));
                    console.log(results);
                    if (!error) {
                        // req.session.userId = results[0].results.insertId;
                        let sqlStr = "SELECT * FROM mix WHERE id = '" + results.insertId + "' LIMIT 1";

                        conn.query(sqlStr, function (error, results, fields) {
                            if (error) {
                                res.json({err_code: 0, message: '请求数据失败'});
                            } else {
                                results = JSON.parse(JSON.stringify(results));
                                //返回数据数据给客户端
                                res.json({
                                    success_code: 203,
                                    message: {id: results[0].id,mix_content: results[0].mix_content}
                                });
                            }
                        });
                    }
                });
            }
        }

    });
});
/**
 *  获取组合题内容
 */
router.get('/api/get_mix', (req, res)=>{
    const choice_else = req.query.choice_else;
    let sqlStr =  "SELECT * FROM mix WHERE choice_else = '"+ choice_else +"' ";//"+ choice_else +"
    // let sqlStr =   'SELECT * FROM mix';
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});
/**
 *  删除组合题内容
 */
router.post('/api/del_mix', (req, res)=>{

    const mix_content = req.body.mix_content;
    //1.1数据库查询的语句
    let sqlStr = "delete from mix where mix_content = \'"+mix_content+"\'";
    //1.2执行语句
    conn.query(sqlStr, function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            res.json({success_code:200,message:results});
        }
    });
});

/**
 *  获取分类内容
 */
router.get('/api/get_sort', (req, res)=>{

    //1.1数据库查询的语句
    let sqlStr = 'SELECT * FROM list_sort';
    //1.2执行语句
    conn.query(sqlStr, function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            res.json({success_code:200,message:results});
        }
    });
});

/**
 *  增加选中的选择题
 */
router.post('/api/choice_select', function (req, res, next) {
    //1.获取数据
    const choice_content = req.body.choice_content;
    const choice_analysis = req.body.choice_analysis;
    const choice_A = req.body.choice_A;
    const choice_B = req.body.choice_B;
    const choice_C = req.body.choice_C;
    const choice_D = req.body.choice_D;
    const choice_else = req.body.choice_else;
    // console.log(fill_analysis,fill_one);


    //3.查询
    let sqlStr = "SELECT * FROM choiceselect WHERE choice_content = '" + choice_content + "' LIMIT 1";

    conn.query(sqlStr, function (error, results, fields){
        if (error) {
            res.json({err_code: 0, message: '错误！'});
        } else {
            // res.json({success_code:200,message:results});
            results = JSON.parse(JSON.stringify(results));
            if (results[0]) {
                //用户已经存在
                req.session.userId = results[0].id;//保存id
                //返回数据给客户端
                return res.json({
                    error_code: 404,
                    message: {
                        id: results[0].id,
                        choice_content: results[0].choice_content,
                        choice_analysis: results[0].choice_analysis,
                        choice_A: results[0].choice_A,
                        choice_B: results[0].choice_B,
                        choice_C: results[0].choice_C,
                        choice_D: results[0].choice_D,
                        choice_else: results[0].choice_else,
                    },
                    info:'该题目已存在',

                });

            }
            else {
                const addSql = "INSERT INTO choiceselect(choice_content,choice_analysis,choice_A,choice_B,choice_C,choice_D,choice_else) VALUES (?,?,?,?,?,?,?)";
                const addSqlParams = [choice_content,choice_analysis,choice_A,choice_B,choice_C,choice_D,choice_else];
                conn.query(addSql, addSqlParams, function (error, results, fields) {
                    results = JSON.parse(JSON.stringify(results));
                    console.log(results);
                    if (!error) {
                        // req.session.userId = results[0].results.insertId;
                        let sqlStr = "SELECT * FROM choiceselect WHERE id = '" + results.insertId + "' LIMIT 1";

                        conn.query(sqlStr, function (error, results, fields) {
                            if (error) {
                                res.json({err_code: 0, message: '请求数据失败'});
                            } else {
                                results = JSON.parse(JSON.stringify(results));
                                //返回数据数据给客户端
                                res.json({
                                    success_code: 200,
                                    message: {id: results[0].id,choice_content: results[0].choice_content}
                                });
                            }
                        });
                    }
                });
            }
        }

    });
});
/**
 *  获取选中的选择题内容
 */
router.get('/api/get_choice_select', (req, res)=>{
    const choice_else = req.query.choice_else;
    console.log(choice_else);
    let sqlStr =  "SELECT * FROM choiceselect WHERE choice_else = '"+ choice_else +"' ";//"+ choice_else +"
    // let sqlStr =   'SELECT * FROM choiceselect'
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});

/**
 *  增加选中的填空题
 */
router.post('/api/fill_select', function (req, res, next) {
    //1.获取数据
    const fill_content = req.body.fill_content;
    const fill_analysis = req.body.fill_analysis;
    const fill_one = req.body.fill_one;
    const fill_two = req.body.fill_two;
    const fill_three = req.body.fill_three;
    const choice_else = req.body.choice_else;
    // console.log(fill_content, fill_analysis, fill_one, fill_two, fill_three, choice_else);

    //3.查询
    let sqlStr = "SELECT * FROM fillselect WHERE fill_content = '" + fill_content + "' LIMIT 1";

    conn.query(sqlStr, function (error, results, fields){
        if (error) {
            res.json({err_code: 0, message: '错误！'});
        } else {
            // res.json({success_code:200,message:results});
            results = JSON.parse(JSON.stringify(results));
            if (results[0]) {
                //用户已经存在
                req.session.userId = results[0].id;//保存id
                //返回数据给客户端
                return res.json({
                    error_code: 404,
                    message: {
                        id: results[0].id,
                        fill_content: results[0].fill_content,
                        fill_analysis: results[0].fill_analysis,
                        fill_one: results[0].fill_one,
                        fill_two: results[0].fill_two,
                        fill_three: results[0].fill_three,
                    },
                    info:'该题目已存在',
                });

            }
            else {
                const addSql = "INSERT INTO fillselect(fill_content,fill_analysis,fill_one,fill_two,fill_three,choice_else) VALUES (?,?,?,?,?,?)";
                const addSqlParams = [fill_content,fill_analysis,fill_one,fill_two,fill_three,choice_else];
                conn.query(addSql, addSqlParams, function (error, results, fields) {
                    results = JSON.parse(JSON.stringify(results));
                    console.log(results);
                    if (!error) {
                        // req.session.userId = results[0].results.insertId;
                        let sqlStr = "SELECT * FROM fillselect WHERE id = '" + results.insertId + "' LIMIT 1";

                        conn.query(sqlStr, function (error, results, fields) {
                            if (error) {
                                res.json({err_code: 0, message: '请求数据失败'});
                            } else {
                                results = JSON.parse(JSON.stringify(results));
                                //返回数据数据给客户端
                                res.json({
                                    success_code: 200,
                                    message: {id: results[0].id,fill_content: results[0].fill_content,fill_one: results[0].fill_one,}
                                });
                            }
                        });
                    }
                });
            }
        }

    });
});
/**
 *  获取选中的填空题内容
 // */
router.get('/api/get_fill_select', (req, res)=>{
    const choice_else = req.query.choice_else;
    // console.log(choice_else);
    let sqlStr =  "SELECT * FROM fillselect WHERE choice_else = '"+ choice_else +"' ";//"+ choice_else +"
    // let sqlStr =   'SELECT * FROM fillSelect';
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});

/**
 *  增加选中的问答题
 */
router.post('/api/ask_select', function (req, res, next) {
    //1.获取数据
    const ask_content = req.body.ask_content;
    const ask_analysis = req.body.ask_analysis;
    const choice_else = req.body.choice_else;


    //3.查询
    let sqlStr = "SELECT * FROM selectAsk WHERE ask_content = '" + ask_content + "' LIMIT 1";

    conn.query(sqlStr, function (error, results, fields){
        if (error) {
            res.json({err_code: 0, message: '错误！'});
        } else {
            // res.json({success_code:200,message:results});
            results = JSON.parse(JSON.stringify(results));
            if (results[0]) {
                //用户已经存在
                req.session.userId = results[0].id;//保存id
                //返回数据给客户端
                return res.json({
                    error_code: 404,
                    message: {
                        id: results[0].id,
                        ask_content: results[0].ask_content,
                        ask_analysis: results[0].ask_analysis
                    },
                    info:'该题目已存在',


                });

            }
            else {
                const addSql = "INSERT INTO selectAsk(ask_content,ask_analysis,choice_else) VALUES (?,?,?)";
                const addSqlParams = [ask_content,ask_analysis,choice_else];
                conn.query(addSql, addSqlParams, function (error, results, fields) {
                    results = JSON.parse(JSON.stringify(results));
                    console.log(results);
                    if (!error) {
                        // req.session.userId = results[0].results.insertId;
                        let sqlStr = "SELECT * FROM selectAsk WHERE id = '" + results.insertId + "' LIMIT 1";

                        conn.query(sqlStr, function (error, results, fields) {
                            if (error) {
                                res.json({err_code: 0, message: '请求数据失败'});
                            } else {
                                results = JSON.parse(JSON.stringify(results));
                                //返回数据数据给客户端
                                res.json({
                                    success_code: 200,
                                    message: {id: results[0].id,ask_content: results[0].ask_content}
                                });
                            }
                        });
                    }
                });
            }
        }

    });
});
/**
 *  获取选中的问答题内容
 */
router.get('/api/get_ask_select', (req, res)=>{
    const choice_else = req.query.choice_else;
    // console.log(choice_else);
    let sqlStr =  "SELECT * FROM selectAsk WHERE choice_else = '"+ choice_else +"' ";//"+ choice_else +"
    // let sqlStr =   'SELECT * FROM selectAsk'
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});

/**
 *  增加选中的混合题
 */
router.post('/api/mix_select', function (req, res, next) {
    //1.获取数据
    const mix_content = req.body.mix_content;
    const mix_analysis = req.body.mix_analysis;
    const choice_else = req.body.choice_else;


    //3.查询
    let sqlStr = "SELECT * FROM selectMix WHERE mix_content = '" + mix_content + "' LIMIT 1";

    conn.query(sqlStr, function (error, results, fields){
        if (error) {
            res.json({err_code: 0, message: '错误！'});
        } else {
            // res.json({success_code:200,message:results});
            results = JSON.parse(JSON.stringify(results));
            if (results[0]) {
                //用户已经存在
                req.session.userId = results[0].id;//保存id
                //返回数据给客户端
                return res.json({
                    error_code: 404,
                    message: {
                        id: results[0].id,
                        ask_content: results[0].ask_content,
                        ask_analysis: results[0].ask_analysis
                    },
                    info:'该题目已存在',


                });

            }
            else {
                const addSql = "INSERT INTO selectMix(mix_content,mix_analysis,choice_else) VALUES (?,?,?)";
                const addSqlParams = [mix_content,mix_analysis,choice_else];
                conn.query(addSql, addSqlParams, function (error, results, fields) {
                    results = JSON.parse(JSON.stringify(results));
                    console.log(results);
                    if (!error) {
                        // req.session.userId = results[0].results.insertId;
                        let sqlStr = "SELECT * FROM selectMix WHERE id = '" + results.insertId + "' LIMIT 1";

                        conn.query(sqlStr, function (error, results, fields) {
                            if (error) {
                                res.json({err_code: 0, message: '请求数据失败'});
                            } else {
                                results = JSON.parse(JSON.stringify(results));
                                //返回数据数据给客户端
                                res.json({
                                    success_code: 200,
                                    message: {id: results[0].id,mix_content: results[0].mix_content}
                                });
                            }
                        });
                    }
                });
            }
        }

    });
});
/**
 *  获取选中的混合题内容
 */
router.get('/api/get_mix_select', (req, res)=>{
    const choice_else = req.query.choice_else;
    let sqlStr =  "SELECT * FROM selectMix WHERE choice_else = '"+ choice_else +"' ";//"+ choice_else +"
    // let sqlStr =   'SELECT * FROM selectMix'
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});

/**
 *  获取发布的选择题
 */
router.get('/api/get_choice_send', (req, res)=>{
    let sqlStr =  "select * from test_bank a,choiceselect b where a.type='1' and a.test_name=b.choice_else";//"+ choice_else +"
    // let sqlStr =   'SELECT * FROM selectMix'
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});
/**
 *  获取发布的填空题
 */
router.get('/api/get_fill_send', (req, res)=>{
    let sqlStr =  "select * from test_bank a,fillselect b where a.type='1' and a.test_name=b.choice_else";//"+ choice_else +"
    // let sqlStr =   'SELECT * FROM selectMix'
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});
/**
 *  获取发布的问答题
 */
router.get('/api/get_ask_send', (req, res)=>{
    let sqlStr =  "select * from test_bank a,selectAsk b where a.type='1' and a.test_name=b.choice_else";//"+ choice_else +"
    // let sqlStr =   'SELECT * FROM selectMix'
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});
/**
 *  获取发布的综合题
 */
router.get('/api/get_mix_send', (req, res)=>{
    let sqlStr =  "select * from test_bank a,selectMix b where a.type='1' and a.test_name=b.choice_else";//"+ choice_else +"
    // let sqlStr =   'SELECT * FROM selectMix'
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});

/**
 *  增加考试时间
 */
router.post('/api/time_set', function (req, res, next) {
    //1.获取数据
    const time_start = req.body.time_start;
    const time_end = req.body.time_end;

    //3.查询
    let sqlStr = "SELECT * FROM set_time WHERE time_start = '" + time_start + "' LIMIT 1";

    conn.query(sqlStr, function (error, results, fields){
        if (error) {
            res.json({err_code: 0, message: '错误！'});
        } else {
            // res.json({success_code:200,message:results});
            results = JSON.parse(JSON.stringify(results));
            if (results[0]) {
                //用户已经存在
                req.session.userId = results[0].id;//保存id
                //返回数据给客户端
                return res.json({
                    error_code: 404,
                    message: {
                        id: results[0].id,
                        time_start: results[0].time_start
                    },
                    info:'该题目已存在',


                });

            }
            else {
                const addSql = "UPDATE set_time SET time_start = '"+ time_start +"', time_end = '"+ time_end +"'";
                conn.query(addSql, function (error, results, fields) {
                    results = JSON.parse(JSON.stringify(results));
                    console.log(results);
                    if (!error) {
                        // req.session.userId = results[0].results.insertId;
                        // let sqlStr = "SELECT * FROM set_time WHERE id = '" + results.insertId + "' LIMIT 1";

                        conn.query(sqlStr, function (error, results, fields) {
                            if (error) {
                                res.json({err_code: 0, message: '请求数据失败'});
                            } else {
                                results = JSON.parse(JSON.stringify(results));
                                //返回数据数据给客户端
                                res.json({
                                    success_code: 200,
                                    message: {id: results[0].id,time_start: results[0].time_start,time_end: results[0].time_end}
                                });
                            }
                        });
                    }
                });
            }
        }

    });


});
/**
 *  获取考试时间
 */
router.get('/api/time_get', (req, res)=>{
    // let sqlStr =  "SELECT * FROM choice WHERE choice_else = '"+ choice_else +"' ";//"+ choice_else +"
    let sqlStr =   'SELECT * FROM set_time'
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});
/**
 *  更改发布
 */
router.post('/api/exam_send', (req, res)=>{

    const test_name = req.body.test_name;
    const type = req.body.type;
    //1.1数据库查询的语句
    let sqlStr = "UPDATE test_bank SET type = '"+ type +"' WHERE test_name = '"+ test_name +"'";
    // 1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            res.json({success_code:200,message:results});
        }
    });
});
/**
 *  取消发布
 */
router.post('/api/exam_quit', (req, res)=>{

    const test_name = req.body.test_name;
    const type = req.body.type;
    console.log(test_name,type);
    //1.1数据库查询的语句
    let sqlStr = "UPDATE test_bank SET type = '"+ type +"' WHERE test_name = '"+ test_name +"'";
    // 1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            res.json({success_code:200,message:results});
        }
    });
});
/**
 *  获取发布
 */
router.get('/api/exam_send_type', (req, res)=>{
    // let sqlStr =  "SELECT * FROM choice WHERE choice_else = '"+ choice_else +"' ";//"+ choice_else +"
    let sqlStr =   'SELECT * FROM test_bank';
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});

/**
 *  考生提交试卷
 */
router.post('/api/sub_stu', function (req, res, next) {
    //1.获取数据choiceArr,
    const choiceSub = (req.body.choiceArr).join(',');
    const fillSub1 = (req.body.fillSub1).join(',');
    const fillSub2 = (req.body.fillSub2).join(',');
    const askSub = (req.body.askSub).join(',');
    const mixSub = (req.body.mixSub).join(',');
    const real_name = req.body.real_name;
    const user_num = req.body.user_num;
    const choice_else = req.body.choice_else;
    // console.log(JSON.stringify((mixSub).join(',')));


    const addSql = "INSERT INTO exam_sub(choiceSub,fillSub1,fillSub2,askSub,mixSub,real_name,user_num,choice_else) VALUES (?,?,?,?,?,?,?,?)";
    // fillSub1,fillSub2,askSub,?,?,?,
    const addSqlParams = [choiceSub,fillSub1,fillSub2,askSub,mixSub,real_name,user_num,choice_else];
    conn.query(addSql, addSqlParams, function (error, results, fields) {
        results = JSON.parse(JSON.stringify(results));
        // JSON.parse(
        if (!error) {
            // req.session.userId = results[0].results.insertId;
            let sqlStr = "SELECT * FROM exam_sub WHERE id = '" + results.insertId + "' LIMIT 1";

            conn.query(sqlStr, function (error, results, fields) {
                if (error) {
                    res.json({err_code: 0, message: '请求数据失败'});
                } else {
                    results = JSON.parse(JSON.stringify(results));
                    //返回数据数据给客户端
                    res.json({
                        success_code: 200,
                        message: {id: results[0].id, fillSub1: results[0].fillSub1,fillSub2:results[0].fillSub2, askSub: results[0].askSub, mixSub: results[0].mixSub}
                    });
                }
            });
        }
    });

});
/**
 *  教师保存成绩
 */
router.post('/api/stu_score_sub', function (req, res, next) {
    //1.获取数据choiceArr,
    const score = req.body.score;
    const stu_id = req.body.stu_id;
    console.log(score,stu_id);

    const sqlStr = "UPDATE exam_sub SET score = '" + score + "'  WHERE id = "+ stu_id +" ";
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            res.json({success_code:200,message:results});
        }
    });

});
/**
 *  修改教师姓名
 */
router.post('/api/update_name', function (req, res, next) {
    //1.获取数据choiceArr,
    const score = req.body.score;
    const stu_id = req.body.stu_id;
    console.log(score,stu_id);

    const sqlStr = "UPDATE exam_sub SET score = '" + score + "'  WHERE id = "+ stu_id +" ";
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            res.json({success_code:200,message:results});
        }
    });

});
/**
 *  获取学生试卷
 */
router.get('/api/get_paper_content', (req, res)=>{
    // let sqlStr =  "SELECT * FROM choice WHERE choice_else = '"+ choice_else +"' ";//"+ choice_else +"
    const stu_id = req.query.stu_id;
    let sqlStr =   'SELECT * FROM exam_sub';
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});
/**
 *  获取指定学生的答案
 */
router.get('/api/get_paper_id', (req, res)=>{
    // let sqlStr =  "SELECT * FROM choice WHERE choice_else = '"+ choice_else +"' ";//"+ choice_else +"
    const stu_id = req.query.stu_id;
    console.log(stu_id);
    let sqlStr =   'SELECT * FROM exam_sub WHERE id='+ stu_id +'';
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});
/**
 *  获取学生选择显示到教师端
 */
router.get('/api/get_choice_stu', (req, res)=>{
    const choice_else = req.query.choice_else;
    // let sqlStr =  "SELECT * FROM choiceselect WHERE choice_else = '"+ choice_else +"' ";//"+ choice_else +"
    let sqlStr =   'select * from test_bank,choiceselect where test_bank.choice_else = choiceselect.choice_else and test_bank.type = "1";'
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});

/**
 *  获取学生填空显示到教师端
 */
router.get('/api/get_fill_stu', (req, res)=>{
    const choice_else = req.query.choice_else;
    // let sqlStr =  "SELECT * FROM choiceselect WHERE choice_else = '"+ choice_else +"' ";//"+ choice_else +"
    let sqlStr =   'select * from test_bank,fillselect where test_bank.choice_else = fillselect.choice_else and test_bank.type = "1"';
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});
/**
 *  获取学生问答显示到教师端
 */
router.get('/api/get_ask_stu', (req, res)=>{
    const choice_else = req.query.choice_else;
    // let sqlStr =  "SELECT * FROM choiceselect WHERE choice_else = '"+ choice_else +"' ";//"+ choice_else +"
    let sqlStr =   'select * from test_bank,selectAsk where test_bank.choice_else = selectAsk.choice_else and test_bank.type = "1";'
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});
/**
 *  获取学生综合显示到教师端
 */
router.get('/api/get_mix_stu', (req, res)=>{
    const choice_else = req.query.choice_else;
    // let sqlStr =  "SELECT * FROM choiceselect WHERE choice_else = '"+ choice_else +"' ";//"+ choice_else +"
    let sqlStr =   'select * from test_bank,selectMix where test_bank.choice_else = selectMix.choice_else and test_bank.type = "1";'
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});
/**
 *  教师姓名更改
 */
router.post('/api/tea_name_up', (req, res)=>{
    const tea_name= req.body.tea_name;
    const real_name= req.body.real_name;
    //1.1数据库查询的语句
    let sqlStr = "UPDATE user_teacher SET tea_name = '"+ tea_name +"' WHERE tea_name = '"+ real_name +"'";
    // 1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            res.json({success_code:200,message:results});
        }
    });
});
/**
 *  教师账户名更改
 */
router.post('/api/user_name_up', (req, res)=>{
    const user_name= req.body.user_name;
    const real_name= req.body.real_name;
    console.log(real_name);
    //1.1数据库查询的语句
    let sqlStr = "UPDATE user_teacher SET user_name = '"+ user_name +"' WHERE tea_name = '"+ real_name +"'";
    // 1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            res.json({success_code:200,message:results});
        }
    });
});
/**
 *  教师密码更改
 */
router.post('/api/pwd_up', (req, res)=>{
    const pwd= req.body.pwd;
    const real_name= req.body.real_name;
    console.log(pwd);
    //1.1数据库查询的语句
    let sqlStr = "UPDATE user_teacher SET user_pwd = '"+ pwd +"' WHERE tea_name = '"+ real_name +"'";
    // 1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            res.json({success_code:200,message:results});
        }
    });
});
/**
 *  获取学教师密码
 */
router.get('/api/get_tea_pwd', (req, res)=>{
    const real_name = req.query.real_name;
    let sqlStr =   'SELECT * FROM user_teacher WHERE tea_name = "'+ real_name +'"'
    //1.2执行语句
    conn.query(sqlStr,function (error, results, fields) {
        if (error){
            res.json({err_code:0,message:'请求数据失败'});
        }else{
            results = JSON.parse(JSON.stringify(results));
            res.json({success_code:200,message:results});
        }
    });


});

module.exports = router;
