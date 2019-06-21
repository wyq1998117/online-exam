// 1. 引入对应模块
import Vue from 'vue'
import VueRouter  from 'vue-router'

import Home from '../pages/Home/Home'
import examReal from '../pages/May/examReal'
import Reg from './../pages/Reg/Reg'
import Exam from './../pages/Exam/Exam'
import ExamStu from './../pages/Exam/ExamStu'
import Teacher from './../pages/Teacher/Teacher'
import ExamPage from './../pages/Exam/ExamPage'
//二级路由引入
import MyExam from './../pages/Teacher/child/MyExam'
import Index from './../pages/Teacher/child/Index'
import MyTitle from './../pages/Teacher/child/MyTitle'
import AddTitle from './../pages/Teacher/child/AddTitle'
import AddExam from './../pages/Teacher/child/AddExam'
import Checking from './../pages/Teacher/child/Checking'
import setScore from './../pages/Teacher/child/setScore'
import Chart from './../pages/Teacher/child/Chart'
import UserInfo from './../pages/Teacher/child/UserInfo'
import CreateSort from './../pages/Teacher/child/CreateSort'


// 2. 声明使用
Vue.use(VueRouter);

// 3. 输出路由对象
export default  new VueRouter({
  // 3.1 配置一级路由
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/reg',
      component: Reg
    },
    {
      path: '/exam',
      component: Exam
    },
    ,
    {
      path: '/exam_real',
      component:examReal
    },
    {
      path: '/exam_page',
      component: ExamPage
    },
    {
      path: '/exam_real',
      component: ExamPage
    },
    {
      path: '/exam_stu',
      component: ExamStu
    },
    {
      path: '/teacher',
      component: Teacher,
      children:[
        { path: 'myExam',component: MyExam},
        { path: 'myTitle',component: MyTitle},
        { path: 'addTitle',component: AddTitle},
        { path: 'addExam',component: AddExam},
        { path: 'checking',component: Checking},
        { path: 'score',component: setScore},
        { path: 'chart',component: Chart},
        { path: 'userInfo',component: UserInfo},
        //2.教师首页板块
        { path: 'index',component: Index},
        {path: '/teacher',redirect: '/teacher/index'}
      ]
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
});
