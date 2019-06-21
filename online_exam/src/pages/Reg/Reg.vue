<template>
    <div>
      <div class="sign-top">
        <div class="container">
          <div class="link">
            <ul>
              <li ><a href="/login">登录</a></li>
              <li class="on"><a href="/reg" @click.prevent="prevent()">注册</a><span class="slider"></span></li>
            </ul>
          </div>
          <div class="logo">
            <a href="/">
              <img src="/static/public/images/header-logo.jpg" alt="" width="200" height="110px">
            </a>
          </div>
        </div>
      </div>
      <div class="sign-body register" style="padding-top: 60px;">
        <div class="container clearfix" style="height: 400px;">
          <div class="ad">
            <a href="#" style="background: url(/static/public/images/ad.jpg) center no-repeat;background-size: cover;"></a>
          </div>
          <div class="formBox">
            <h2>注册用户</h2>
            <form action="/reg" id="register" method="post">
              <ul>
                <li>
                  <input type="text" class="input-box" name="userName" id="user_name" placeholder="请输入用户名" v-model="user_name">
                  <p class="error-msg"></p>
                </li>
                <li>
                  <input type="password" class="input-box" name="loginPwd" placeholder="密码" v-model="user_pwd">
                  <p class="error-msg"></p>
                </li>
                <li>
                  <input type="text" class="input-box"  id="real_name" placeholder="请输入真实姓名" v-model="real_name">
                  <p class="error-msg"></p>
                </li>
                <li>
                  <input type="text" class="input-box"  placeholder="学号" v-model="user_num">
                  <p class="error-msg"></p>
                </li>


                <li>
                  <input type="submit" class="btn-large" id="regist_btn" value="注册" @click.prevent="reg()">
                </li>
                <li class="option">
                  已有账号?<a href="/login" class="sublink">立即登录</a>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div class="footer navbar-fixed-bottom">
          Copyright&copy;2019-2028    桂电信科 王一桥
        </div>
      </div>
    </div>
</template>

<script>
  import {pwdReg} from './../../api/index'
  import swal from 'sweetalert';
    export default {
        name: "Reg",
        data(){
          return{
                user_pwd:'',//密码
                user_name:'',//用户名
                userInfo:{},//用户信息
                real_name:'',//真实姓名
                user_num:''//学号
          }
        },
        methods:{
          //注册流程
          async reg(){
            //3.1前端校验
            if(!this.user_name){
              swal("请输入用户名");
              return;
            }else if(!this.user_pwd){
              swal("请输入密码");
              return;
            }else if(!this.real_name){
              swal("请输入真实姓名");
              return;
            }else if(!this.user_num){
              swal("请输入学号");
              return;
            }
            // console.log(this.user_name);

            //3.2用户名和密码登录
            const result = await pwdReg(this.user_name,this.user_pwd,this.real_name,this.user_num);
            console.log(result);
            //后续处理
            if(result.success_code === 200){
              this.userInfo = result.message;
              swal('注册成功');
              this.$router.push({path:'/home'});
            }
            else{
              swal("用户已经存在");
              this.user_name='';
              this.user_pwd='';
              this.real_name='';
              this.user_num='';
            }

          }
        }
    }
</script>

<style scoped>

</style>
