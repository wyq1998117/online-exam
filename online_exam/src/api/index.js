import ajax from './ajax'
//55课时

//1.基础路径
const  Base_URL = '/api';

//2.请求选择题
export const getChoice = ()=>ajax(Base_URL + '/api/exam_choice');

//3.请求填空题
export const getFill = ()=>ajax(Base_URL + '/api/exam_fill');

//4.请求问答题
export const getAsk = ()=>ajax(Base_URL + '/api/exam_ask');

//5.请求问答题
export const getMaterial = ()=>ajax(Base_URL + '/api/exam_material');

//6.验证用户名登录
export const pwdLogin = (user_name,user_pwd,captcha,choose_radio)=>ajax(Base_URL + '/api/login_name',{user_name,user_pwd,captcha,choose_radio},'POST');

//7.注册
export const pwdReg = (user_name,user_pwd,real_name,user_num)=>ajax(Base_URL + '/api/reg_name',{user_name,user_pwd,real_name,user_num},'POST');

export const subContent = (sub_content,user_num,real_name)=>ajax(Base_URL + '/api/sub',{sub_content,user_num,real_name},'POST');

//插入试卷
export const testBank = (test_name,test_des,item_type,item_date,choice_else,build)=>ajax(Base_URL + '/api/test_bank',{test_name,test_des,item_type,item_date,choice_else,build},'POST');
//插入题库
export const itemBank = (item_name,item_des,item_type,item_date,choice_else,build)=>ajax(Base_URL + '/api/item_bank',{item_name,item_des,item_type,item_date,choice_else,build},'POST');

//获取试卷
export const getTest = ()=>ajax(Base_URL + '/api/get_test');
//获取题库
export const getItem = ()=>ajax(Base_URL + '/api/get_item');
//删除题库
export const delItem = (item_name)=>ajax(Base_URL + '/api/del_item',{item_name},'POST');
//插入选择题
export const titleSub = (choice_content,choice_analysis,choice_A,choice_B,choice_C,choice_D,choice_else,answer)=>ajax(Base_URL + '/api/choice',{choice_content,choice_analysis,choice_A,choice_B,choice_C,choice_D,choice_else,answer},'POST');
//获取选择题
export const gotChoice = ()=>ajax(Base_URL + '/api/get_choice',{});

export const gotChoice1 = (data)=>ajax(Base_URL + '/',{data},'POST');
//删除选择题
export const delChoice = (choice_content)=>ajax(Base_URL + '/api/del_choice',{choice_content},'POST');

//添加填空题
export const fillSave = (fill_content,fill_analysis,fill_one,fill_two,fill_three,choice_else)=>ajax(Base_URL + '/api/fill_save',{fill_content,fill_analysis,fill_one,fill_two,fill_three,choice_else},'POST');
//获取填空题
export const gotFill= ()=>ajax(Base_URL + '/api/get_fill',{});
//删除填空题
export const delFill = (fill_content)=>ajax(Base_URL + '/api/del_fill',{fill_content},'POST');

//添加问答题
export const askSave = (ask_content,ask_analysis,choice_else)=>ajax(Base_URL + '/api/ask_save',{ask_content,ask_analysis,choice_else},'POST');
//获取问答题
export const gotAsk= ()=>ajax(Base_URL + '/api/get_ask',{});
//删除问答题
export const delAsk = (ask_content)=>ajax(Base_URL + '/api/del_ask',{ask_content},'POST');

//添加组合题
export const mixSave = (mix_content,mix_analysis,choice_else)=>ajax(Base_URL + '/api/mix_save',{mix_content,mix_analysis,choice_else},'POST');
//获取组合题
export const gotMix= ()=>ajax(Base_URL + '/api/get_mix',{});
//删除组合题
export const delMix = (mix_content)=>ajax(Base_URL + '/api/del_mix',{mix_content},'POST');

//获取分类数据
export const getSort = ()=>ajax(Base_URL + '/api/get_sort');

//插入选中的选择题
export const choiceSelect = (choice_content,choice_analysis,choice_A,choice_B,choice_C,choice_D,choice_else)=>ajax(Base_URL + '/api/choice_select',{choice_content,choice_analysis,choice_A,choice_B,choice_C,choice_D,choice_else},'POST');
//获取选中的选择题
export const getChoiceSelect = ()=>ajax(Base_URL + '/api/get_choice_select');

//插入选中的填空题
export const fillSelect = (fill_content,fill_analysis,fill_one,fill_two,fill_three,choice_else)=>ajax(Base_URL + '/api/fill_select',{fill_content,fill_analysis,fill_one,fill_two,fill_three,choice_else},'POST');
//获取选中的填空题
export const getFillSelect = ()=>ajax(Base_URL + '/api/get_fill_select');

//插入选中的问答题
export const askSelect = (ask_content,ask_analysis,choice_else)=>ajax(Base_URL + '/api/ask_select',{ask_content,ask_analysis,choice_else},'POST');
//获取选中的问答题
export const getAskSelect = ()=>ajax(Base_URL + '/api/get_ask_select');

//插入选中的混合题
export const mixSelect = (mix_content,mix_analysis,choice_else)=>ajax(Base_URL + '/api/mix_select',{mix_content,mix_analysis,choice_else},'POST');
//获取选中的混合题
export const getMixSelect = ()=>ajax(Base_URL + '/api/get_mix_select');

//插入考试时间
export const timeSet = (time_start,time_end)=>ajax(Base_URL + '/api/time_set',{time_start,time_end},'POST');
//获取考试时间
export const timeGet = ()=>ajax(Base_URL + '/api/time_get',{});

//插入发布
export const examSend = (test_name,type)=>ajax(Base_URL + '/api/exam_send',{test_name,type},'POST');

//取消发布
export const examQuit = (test_name,type)=>ajax(Base_URL + '/api/exam_quit',{test_name,type},'POST');

//提交成绩
export const subStu = (choiceArr,fillSub1, fillSub2, askSub, mixSub,real_name,user_num,choice_else)=>ajax(Base_URL + '/api/sub_stu',{choiceArr,fillSub1, fillSub2, askSub, mixSub,real_name,user_num,choice_else},'POST');

//保存学生成绩
export const scoreSub = (score,stu_id)=>ajax(Base_URL + '/api/stu_score_sub',{score,stu_id},'POST');

//更改教师姓名
export const updateName = (tea_name,real_name)=>ajax(Base_URL + '/api/tea_name_up',{tea_name,real_name},'POST');
//更改教师用户名
export const updateLogin = (user_name,real_name)=>ajax(Base_URL + '/api/user_name_up',{user_name,real_name},'POST');
//更改教师密码
export const updatePwd = (pwd,real_name)=>ajax(Base_URL + '/api/pwd_up',{pwd,real_name},'POST');
