<template>
  <div class="home">
    <div class="sign-top">
      <div class="container">
        <div class="link">
          <ul>
            <li class="on"><a href="/login">登录</a><span class="slider"></span></li>
            <li @click="switchTo('/reg')"><a href="/reg" @click.prevent="prevent()">注册</a></li>
          </ul>
        </div>
        <div class="logo">
          <a href="/">
            <!--<img src="./src/assets/public/images/lk_logo_sm.png" alt="" width="200">-->
            <h2 style="color: burlywood" >在线考试与成绩分析系统</h2>
          </a>
        </div>
      </div>
    </div>
    <div class="sign-body">
      <div class="container clearfix" style="height: 475px;overflow:visible;">
        <div class="ad">
          <a href="#"
             style="background: url(/static/public/images/header-ad.jpg); center: no-repeat; background-size: cover;"></a>
        </div>
        <div class="formBox log-form">
          <h2>用户登录</h2>
          <form id="login-form" action="/login" method="post">
            <ul class="login-ul">
              <img class="log-img log-user" src="/static/public/images/success.png"/>
              <li class="pa-msg">
                <input type="text" class="input-box" name="userName" id="user_name" placeholder="请输入您的用户名" v-model="user_name">
              </li>
              <li>
                <input type="password" class="input-box" id="pwd" name="loginPwd" placeholder="密码" v-model="user_pwd">
              </li>
                <li class="box">
                  <input type="text" class="input-box" id="testingCode" name="testingCode" placeholder="验证码" maxlength="8" v-model="captcha">
                  <img
                    src="http://localhost:3000/api/captcha"
                    class="get-verification" alt="captcha"
                    style="height: 38px;"
                    ref="captcha"
                    @click.prevent="getCaptcha()"
                  >
                </li>

              <li class="option">
                <div class="radio"  style="width: 110px;">
                  <label class="radio-inline">
                    <input type="radio" name="radio" id="stu" value="true" checked > 学生
                  </label>
                  <label class="radio-inline">
                    <input type="radio" name="radio" id="teacher" value="false" > 教师
                  </label>
                </div>
              </li>
              <li>
                <input type="submit" class="btn-large" id="login" value="登录" @click.prevent="login()">
              </li>
              <li class="option">
                还没有账号?<a href="http://localhost:8080/login#/reg">立即注册</a>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div class="footer navbar-fixed-bottom">
        Copyright&copy;2019-2028 桂电信科  王一桥
      </div>
    </div>

  </div>
</template>

<script>
  // import { Toast } from 'mint-ui'
  import {pwdLogin} from './../../api/index'
  import {mapActions} from 'vuex'
  import swal from 'sweetalert';
  import axios from 'axios'

  export default {
    //然后在需要当前页面刷新的页面中注入App.vue组件提供（provide）的 reload 依赖，然后直接用this.reload来调用
    inject:['reload'],
    name: "Home",
    data(){
      return{
        user_pwd:'',//密码
        user_name:'',//用户名
        captcha:'',//验证码
        userInfo:{},//用户信息
        real_name:'',
        user_num:'',
        tea_name:'',
        tea_num:'',
        choose_radio:''
      }
    },
    computed:{
      //验证用户名,4到16位（字母，数字，下划线，减号）
      nameRight(){
        return /^[a-zA-Z0-9_-]{4,16}$/.test(this.user_name);
      }
    },
    methods:{
      ...mapActions(['syncUserInfo']),
      //1.一级路由间的切换
      switchTo(path){
        this.$router.replace(path);
      },

      //2.点击获取图形验证码
      getCaptcha(){
        this.$refs.captcha.src='http://localhost:3000/api/captcha?time=' + new Date();
      },

      //3.登录及校验
      async login(real_name,user_num){
        //账号密码登录
        //3.1前端校验

        this.choose_radio  = $('input[type^=radio]:checked').val();
        if(!this.user_name){
          swal("请输入用户名");
          return;
        }else if(!this.user_pwd){
          swal("请输入密码");
          return;
        }else if(!this.captcha){
          swal("请输入验证码");
          return;
        }
        //3.2用户名和密码登录
        const result = await pwdLogin(this.user_name,this.user_pwd,this.captcha,this.choose_radio);
        console.log(result);
        //后续处理
        if(result.success_code === 200){
          this.userInfo = result.message;
          this.$router.push({path:'/exam_page',query: {real_name: result.message.real_name,user_num: result.message.user_num }});
        }else if(result.err_code === 404){
          swal('验证码错误');
          this.captcha = '';
          this.reload();
        }else if(result.err_code === 502){
          swal("用户未注册");
          this.$router.push({path:'/reg'});
        }else if(result.success_code === 202){
          this.userInfo = result.message;
          // console.log(this.userInfo);
          this.$router.push({path:'/teacher',query: {tea_name: result.message.tea_name ,tea_num: result.message.tea_num,user_name: result.message.user_name,user_pwd: result.message.user_pwd}});
        }else if(result.err_code === 505){
          swal("没有该用户");
        }
      }

    }
  }
</script>


<style scoped >

  /*验证码的css*/
  .box {
    position:relative;
    margin-bottom: 25px;
  }
  .box input {
    position: absolute;
    left:0;
    top:0;
  }
  .box img{
    position: absolute;
    right: 0;
  }

</style>


