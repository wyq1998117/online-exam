<template>
    <div class="container-fluid">
      <div class="app_top">
            <div class="app_logo">
              <img src="https://www.qingsuyun.com/site/static/images/logo2.png" alt="">
            </div>
            <div class="app_top_menu">
              <ul role="menubar" class="el-menu-demo el-menu--horizontal el-menu" style="background-color: rgb(55, 61, 65);">
                <!--导航栏-->
                <li role="menuitem"  class="el-menu-item is-active text-center" style="color: rgb(236, 102, 26); border-bottom-color: rgb(236, 102, 26); background-color: rgb(55, 61, 65);">考试</li>
                <li role="menuitem"  class="el-menu-item text-center" style="color: rgb(255, 255, 255); border-bottom-color: transparent; background-color: rgb(55, 61, 65);" @click="goBackHome">退出登录</li>
              </ul>
            </div>
            <span>
              <div class="app_logout el-popover__reference" tabindex="0" style="padding-left: 20px; padding-right: 20px;">
                <div>
                  <img src="https://www.qingsuyun.com/site/static/images/photo.png" class="photo-circle img-thumbnail">
                  <span>{{tea_name}}</span>
                  <span class="glyphicon glyphicon-triangle-bottom"></span>
                </div>
              </div>
            </span>
            <!--<div class="app_message">-->
              <!--<div class="el-badge">-->
                <!--<i  class="iconfont el-icon-bell" style="font-size: 26px;"></i>-->
                <!--<sup class="el-badge__content el-badge__content&#45;&#45;undefined is-fixed is-dot"></sup>-->
              <!--</div>-->
            <!--</div>-->
          </div>


      <div class="app_middle">
        <div class="exam_home">
          <div  class="exam_left_menu">
            <div class="collapse_button">
              <span  class="fa fa-bars" style="color:#ddd;"></span>
            </div>
            <ul  role="menubar" class="el-menu-vertical-demo el-menu" style="background-color: rgb(55, 61, 65);">
              <li  role="menuitem" @click="switchTo('/teacher/index')" tabindex="-1" class="el-menu-item " style="padding-left: 20px; color: rgb(255, 255, 255); background-color: rgb(55, 61, 65);">
                <i class="fa fa-home"  :class="{on:'/teacher/index' === $route.path}"> 首页</i>
              </li>
              <li  role="menuitem" aria-haspopup="true" class="el-submenu is-opened" aria-expanded="true">
                <div class="el-submenu__title "  @click="el_menuShow" style="padding-left: 20px; color: rgb(255, 255, 255); background-color: rgb(55, 61, 65);" >
                  <i class="fa fa-folder-open"> 考试资源</i>
                  <i class="fa fa-angle-down  glyphicon-chevron-down"  id="examSource"></i>
                </div>
                  <div v-if="show">
                    <ul role="menu"  class="el-menu el-menu--inline" style="background-color: rgb(55, 61, 65);">
                      <li role="menuitem" @click="switchTo('/teacher/myExam')" tabindex="-1" class="el-menu-item-li el-menu-item" style="padding-left: 40px; color: rgb(255, 255, 255); background-color: rgb(55, 61, 65);">
                        <span  :class="{on: '/teacher/myExam' === $route.path}">我的试卷</span>
                      </li>
                      <li  role="menuitem" @click="switchTo('/teacher/myTitle')" tabindex="-1" class="el-menu-item-li el-menu-item" style="padding-left: 40px; color: rgb(255, 255, 255); background-color: rgb(55, 61, 65);">

                        <span  :class="{on: '/teacher/myTitle' === $route.path}">我的题库</span>
                      </li>
                    </ul>
                  </div>

              </li>
              <li  role="menuitem" aria-haspopup="true" class="el-submenu">
                <div class="el-submenu__title" style="padding-left: 20px; color: rgb(255, 255, 255); background-color: rgb(55, 61, 65);" @click="el_menuShow2">
                  <i class="fa fa-list-ul"> 阅卷管理</i>
                  <i class="fa fa-angle-down  glyphicon-chevron-down" id="examSource2"></i>
                </div>
                <div v-if="show2">
                  <ul role="menu"  class="el-menu el-menu--inline" style="background-color: rgb(55, 61, 65);">
                    <li role="menuitem" @click="switchTo('/teacher/checking')" tabindex="-1" class="el-menu-item-li el-menu-item" style="padding-left: 40px; color: rgb(255, 255, 255); background-color: rgb(55, 61, 65);">
                      <span  :class="{on: '/teacher/checking' === $route.path}">学生试卷</span>
                    </li>
                  </ul>
                </div>

              </li>
              <li role="menuitem" aria-haspopup="true" class="el-submenu" >
                <div class="el-submenu__title" style="padding-left: 20px; color: rgb(255, 255, 255); background-color: rgb(55, 61, 65);" @click="el_menuShow3">
                  <i class="fa fa-line-chart" > 统计分析</i>
                  <i class="fa fa-angle-down  glyphicon-chevron-down" id="examSource3"></i>
                </div>
                <div v-if="show3">
                  <ul role="menu"  class="el-menu el-menu--inline" style="background-color: rgb(55, 61, 65);">
                    <li role="menuitem" @click="switchTo('/teacher/chart')" tabindex="-1" class="el-menu-item-li el-menu-item" style="padding-left: 40px; color: rgb(255, 255, 255); background-color: rgb(55, 61, 65);">
                      <span  :class="{on: '/teacher/chart' === $route.path}">成绩分析</span>
                    </li>
                  </ul>
                </div>
              </li>
              <li role="menuitem" aria-haspopup="true" class="el-submenu" >
                <div class="el-submenu__title" style="padding-left: 20px; color: rgb(255, 255, 255); background-color: rgb(55, 61, 65);" @click="el_menuShow4">
                  <i class="el el-icon-s-custom" > 个人信息</i>
                  <i class="fa fa-angle-down  glyphicon-chevron-down" id="examSource4"></i>
                </div>
                <div v-if="show4">
                  <ul role="menu"  class="el-menu el-menu--inline" style="background-color: rgb(55, 61, 65);">
                    <li role="menuitem" @click="switchTo('/teacher/userInfo')" tabindex="-1" class="el-menu-item-li el-menu-item" style="padding-left: 40px; color: rgb(255, 255, 255); background-color: rgb(55, 61, 65);">
                      <span  :class="{on: '/teacher/userInfo' === $route.path}">信息修改</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
  import axios from 'axios'
  import 'font-awesome/css/font-awesome.css'
    export default {
        name: "Teacher",
        data(){
          return{
            tea_name:'' ,
            sub_content:{},
            tea_num: '',
            user_name:'',
            user_pwd:'',
            show:false,
            show2:false,
            show3:false,
            show4:false,
            rotate:false,
            rotate2:false,
            rotate3:false,
            rotate4:false,
            ison:true,
          }
        },
      watch: {
        '$route': 'getParams'
      },
      methods: {
        getParams() {
          // 取到路由带过来的参数
          this.tea_name = this.$route.query.tea_name;
          this.tea_num = this.$route.query.tea_num;
          this.user_name = this.$route.query. user_name;
          this.user_pwd = this.$route.query. user_pwd;
        },
        goBackHome(){
          this.$router.push({path:'/home'});
        },
        switchTo(path){
          this.$router.replace({path, query:{tea_name:this.tea_name,tea_num:this.tea_num,user_name:this.user_name,user_pwd:this.user_pwd}});
        },
        el_menuShow: function () {
          this.show = !this.show;
          this.rotate = !this.rotate;
          if(this.rotate){
            $('#examSource').addClass('rotate');
          }else {
            $('#examSource').removeClass('rotate');
          }
        },
        el_menuShow2: function () {
          this.show2 = !this.show2;
          this.rotate2 = !this.rotate2;
          if(this.rotate2){
            $('#examSource2').addClass('rotate2');
          }else {
            $('#examSource2').removeClass('rotate2');
          }
        },
        el_menuShow3: function () {
          this.show3 = !this.show3;
          this.rotate3 = !this.rotate3;
          if(this.rotate3){
            $('#examSource3').addClass('rotate3');
          }else {
            $('#examSource3').removeClass('rotate3');
          }
        },
        el_menuShow4: function () {
          this.show4 = !this.show4;
          this.rotate4 = !this.rotate4;
          if(this.rotate4){
            $('#examSource4').addClass('rotate4');
          }else {
            $('#examSource4').removeClass('rotate4');
          }
        },

        create() {
          this.num++;
          let html = '<div class="el-tree-node__content" style="padding-left: 18px;">\n' +
            '    <span class="el-tree-node__expand-icon el-icon-caret-right is-leaf"></span><!----><!---->\n' +
            '    <span class="tree-expand">\n' +
            '      <span class="tree-label" style="display: none;">\n' +
            '        <div class="edit el-input el-input--mini"><!---->\n' +
            '          <input type="text" autocomplete="off" autofocus="autofocus" class="el-input__inner"><!----><!----><!---->\n' +
            '        </div>\n' +
            '      </span>\n' +
            '      <span class="tree-label">\n' +
            '        <span class="tree_ins" style="margin-left: 18px;" >{{msg}}</span>\n' +
            '        <input type="text" placeholder="新增分类" v-model="msg">\n' +
            '      </span>\n' +
            '    </span>\n' +
            '  </div>';
          $("#el-tree-node-main").append(html);
          console.log(this.msg);
          // console.log(this.tree_ins);
        }

      },
      mounted(){
        this.getParams();
      },
      created() {
        // this.getParams();
      },
      //
      // beforeCreate() {
      //   document.querySelector('body').setAttribute('style', 'background:#e8e8e8');
      // },
      // beforeDestroy() {
      //   document.querySelector('body').removeAttribute('style')
      // }
    }
</script>

<style scoped>

.on{
  color: rgb(236, 102, 26);
}
.app_top {
  position: absolute;
  left: 0;
  top: 0;
  height: 60px;
  width: 100%;
  overflow: hidden;
  background-color: #373d41;
}
.app_logo {
    overflow: hidden;
    float: left;
}
  .app_top_menu {
    float: left;
  }
.exam_left_menu{
  cursor: pointer;
}
.el-menu.el-menu--horizontal {
  border-bottom: 1px solid #e6e6e6;
}
.el-menu--horizontal {
  border-right: none;
}
.el-menu {
  border-right: 1px solid #e6e6e6;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  outline: 0;
  color: #303133;
}
.el-menu--horizontal>.el-menu-item {
  float: left;
  height: 60px;
  line-height: 60px;
  margin: 0;
  border-bottom: 2px solid transparent;
  color: #909399;
}
.el-menu-item {
  font-size: 14px;
  color: #303133;
  padding: 0 20px;
  cursor: pointer;
  transition: border-color .3s,background-color .3s,color .3s;
  box-sizing: border-box;
}
.el-menu-item:hover,.el-submenu__title:hover{
  background-color: rgb(44, 49, 52)!important;
}

.photo-circle {
  border-radius: 50%;
  height: 40px;
  width: 40px;
  vertical-align: middle;
}
.app_logout {
  float: right;
  max-width: 200px;
  text-align: center;
  color: #fff;
  line-height: 60px;
  cursor: pointer;
}

.exam_left_menu{
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  left: 0;
  top: 90px;
  bottom: 0;
  width: 200px;
  transition: width .42s;
  background-color: #373d41;
}
.el-menu-item i {
  /*color: #e8e8e8;*/
}
.collapse_button{
  width: 200px;
  height: 30px;
  background-color: #4a5064;
  text-align: center;
  transition: width .42s;
  cursor: pointer;
  line-height: 30px;
  position: fixed;
  left: 0;
  top: 60px;
}
.el-menu {
  border-right: 1px solid #e6e6e6;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
}
.el-menu-item, .el-submenu__title {
  height: 56px;
  width: 200px;
  line-height: 56px;
  position: relative;
  -webkit-box-sizing: border-box;
  white-space: nowrap;
  list-style: none;
}
.el-submenu__title i {
  color: #e8e8e8;
}

  /*图标*/
  .glyphicon{
    width: 16px;
    height: 16.8em;
  }

  .rotate::before{
     display: block;
     -webkit-transform:rotate(180deg);
     transform:rotate(180deg);
     -webkit-transition:-webkit-transform 1s linear;
     transition:transform 0.35s linear;
   }
.rotate2::before{
  display: block;
  -webkit-transform:rotate(180deg);
  transform:rotate(180deg);
  -webkit-transition:-webkit-transform 1s linear;
  transition:transform 0.35s linear;
}
.rotate3::before{
  display: block;
  -webkit-transform:rotate(180deg);
  transform:rotate(180deg);
  -webkit-transition:-webkit-transform 1s linear;
  transition:transform 0.35s linear;
}
.rotate4::before{
  display: block;
  -webkit-transform:rotate(180deg);
  transform:rotate(180deg);
  -webkit-transition:-webkit-transform 1s linear;
  transition:transform 0.35s linear;
}

  /*右侧内容*/
.exam_main {
  position: absolute;
  left: 200px;
  top: 60px;
  right: 0;
  bottom: 0;
  overflow-x: auto;
  overflow-y: auto;
  transition: left .42s;
}

  /*table*/
table {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: grey;
}
table > tr {
  vertical-align: middle;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
td, th {
  display: table-cell;
  vertical-align: inherit;
}

button--small {
  font-size: 12px;
  border-radius: 3px;
}

.quick_access .create_button {
  text-align: center;
  margin: 10px;
  padding: 10px;
}

</style>
