<template>
  <div class="exam_main">
      <div>
        <div class="personal_main">
          <div class="subtitle">
            <h2><i class="iconfont  menu_iconcolor el el-icon-lollipop"></i>个人资料</h2>
          </div>
          <div class="personal_content">
            <div class="padding">
              <div class="control-label">姓名：</div>
              <div class="el-input el-input--medium el-input-group el-input-group--append" style="display: table;">
                <input type="text" autocomplete="off" readonly="readonly" class="el-input__inner" :value="this.$route.query.tea_name">
                <div class="el-input-group__append">
                  <button type="button" class="el-button el-button--default el-button--medium" data-toggle="modal" data-target="#name">
                    <i class="el-icon-edit-outline"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="padding">
              <div class="control-label">账号名：</div>
              <div class="el-input el-input--medium el-input-group el-input-group--append" style="display: table;">
                <input type="text" autocomplete="off" readonly="readonly" class="el-input__inner" :value="this.$route.query.user_name">
                <div class="el-input-group__append">
                  <button type="button" class="el-button el-button--default el-button--medium" data-toggle="modal" data-target="#user_name">
                    <i class="el-icon-edit-outline"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="padding">
              <div class="control-label">密码：</div>
              <div class="el-input el-input--medium el-input-group el-input-group--append" style="display: table;">
                <input type="password" autocomplete="off" readonly="readonly" class="el-input__inner" :value="this.$route.query.user_pwd">
                <div class="el-input-group__append">
                  <button type="button" class="el-button el-button--default el-button--medium" data-toggle="modal" data-target="#pwd">
                    <i class="el-icon-edit-outline"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 姓名模态框（Modal） -->
        <div class="modal fade" id="name">
          <div role="dialog" aria-modal="true" aria-label="修改姓名" class="el-dialog" style="margin-top: 15vh; width: 800px;">
            <div class="el-dialog__header" style=" border-bottom: 1px solid #dcdcdc;">
              <button type="button" class="close" data-dismiss="modal"
                      aria-hidden="true">×
              </button>
              <span class="el-dialog__title">修改姓名</span>
            </div>
            <div class="el-dialog__body">
              <form class="el-form">
                <div class="el-form-item is-required el-form-item--medium">
                  <label class="el-form-item__label" style="width: 300px;">姓名</label>
                  <div class="el-form-item__content" style="margin-left: 300px;">
                    <div class="input-width-edit el-input el-input--medium">
                      <input type="text" autocomplete="off" placeholder="请输入姓名" class="el-input__inner" ref="tea_name_up">
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="el-dialog__footer">
              <div  class="dialog-footer">
                <button  data-dismiss="modal" type="button" class="el-button el-button--default el-button--medium"><!----><!---->
                  <span>取 消</span>
                </button>
                <button type="button" class="el-button el-button--primary el-button--medium el-button-sub" @click="updateName"><!----><!---->
                  <span >提交</span>
                </button>
              </div>
            </div>
          </div>

        </div><!-- /.modal -->
        <!-- 账号模态框（Modal） -->
        <div class="modal fade" id="user_name">
          <div role="dialog" aria-modal="true" aria-label="修改用户名" class="el-dialog" style="margin-top: 15vh; width: 800px;">
            <div class="el-dialog__header" style=" border-bottom: 1px solid #dcdcdc;">
              <button type="button" class="close" data-dismiss="modal"
                      aria-hidden="true">×
              </button>
              <span class="el-dialog__title">修改用户名</span>
            </div>
            <div class="el-dialog__body">
              <form class="el-form">
                <div class="el-form-item is-required el-form-item--medium">
                  <label class="el-form-item__label" style="width: 300px;">用户名</label>
                  <div class="el-form-item__content" style="margin-left: 300px;">
                    <div class="input-width-edit el-input el-input--medium">
                      <input type="text" autocomplete="off" placeholder="请输入用户名" class="el-input__inner" ref="user_name_up">
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="el-dialog__footer">
              <div  class="dialog-footer">
                <button  data-dismiss="modal" type="button" class="el-button el-button--default el-button--medium"><!----><!---->
                  <span>取 消</span>
                </button>
                <button type="button" class="el-button el-button--primary el-button--medium el-button-sub" @click="updateLogin"><!----><!---->
                  <span >提交</span>
                </button>
              </div>
            </div>
          </div>

        </div><!-- /.modal -->
        <!-- 密码模态框（Modal） -->
        <div class="modal fade" id="pwd">
          <div role="dialog" aria-modal="true" aria-label="修改密码" class="el-dialog" style="margin-top: 15vh; width: 800px;">
            <div class="el-dialog__header" style=" border-bottom: 1px solid #dcdcdc;">
              <button type="button" class="close" data-dismiss="modal"
                      aria-hidden="true">×
              </button>
              <span class="el-dialog__title">修改密码</span>
            </div>
            <div class="el-dialog__body">
              <form class="el-form">
                <div class="el-form-item is-required el-form-item--medium">
                  <label  class="el-form-item__label" style="width: 300px;">原密码</label>
                  <div class="el-form-item__content" style="margin-left: 300px;">
                    <div class="input-width-edit el-input el-input--medium">
                      <input type="password" autocomplete="off" placeholder="请输入原密码" class="el-input__inner" ref="oldPwd">
                    </div>
                  </div>
                </div>
                <div class="el-form-item is-required el-form-item--medium">
                  <label class="el-form-item__label" style="width: 300px;">新密码</label>
                  <div class="el-form-item__content" style="margin-left: 300px;">
                    <div class="input-width-edit el-input el-input--medium">
                      <input type="password" autocomplete="off" placeholder="请输入新密码" class="el-input__inner" ref="newPwd">
                    </div>
                  </div>
                </div>
                <div class="el-form-item is-required el-form-item--medium">
                  <label  class="el-form-item__label" style="width: 300px;">确认密码</label>
                  <div class="el-form-item__content" style="margin-left: 300px;">
                    <div class="input-width-edit el-input el-input--medium">
                      <input type="password" autocomplete="off" placeholder="请输入确认密码" class="el-input__inner"  ref="repeatPwd">
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="el-dialog__footer">
              <div  class="dialog-footer">
                <button  data-dismiss="modal" type="button" class="el-button el-button--default el-button--medium"><!----><!---->
                  <span>取 消</span>
                </button>
                <button type="button" class="el-button el-button--primary el-button--medium el-button-sub" @click="updatePwd"><!----><!---->
                  <span >提交</span>
                </button>
              </div>
            </div>
          </div>
        </div><!-- /.modal -->
      </div>

  </div>
</template>

<script>
  import {updateLogin, updateName, updatePwd} from "../../../api";
  import axios from 'axios'
  import md5 from 'js-md5';
    export default {
      name: "UserInfo",
      data(){
        return{
          tea_name:'' ,
          tea_num: '',
          user_name:'',
          user_pwd:'',
          tea_data:[],
        }
      },
      methods:{
        getParams() {
          // 取到路由带过来的参数
          this.tea_name = this.$route.query.tea_name;
          this.tea_num = this.$route.query.tea_num;
          this.user_name = this.$route.query. user_name;
          this.user_pwd = this.$route.query. user_pwd;
          console.log(this.tea_name);
        },
        updateName(){
          this.tea_name = this.$refs['tea_name_up'].value;
          let real_name = this.$route.query.tea_name;
          const result = updateName(this.tea_name,real_name);
          console.log(result);
        },
        updateLogin(){
          this.user_name = this.$refs['user_name_up'].value;
          let real_name = this.$route.query.tea_name;
          const result = updateLogin(this.user_name,real_name);
          console.log(result);
        },
        updatePwd(){
          this.oldPwd = md5(this.$refs['oldPwd'].value);
          this.newPwd = this.$refs['newPwd'].value;
          this.repeatPwd = this.$refs['repeatPwd'].value;
          let real_name = this.$route.query.tea_name;
          let realOld = null;
          this.tea_data.forEach(function(item){
            realOld =  item.user_pwd;
        });
          if(this.oldPwd === realOld){
            if(this.repeatPwd === this.newPwd){
              const result = updatePwd(md5(this.repeatPwd),real_name);
              console.log(result);
            }else{
              alert('两次密码不一致!')
            }
          }else {
            alert('原始密码错误!')
          }

        },
        getPwd(){
          let _this = this;
          axios.get('http://localhost:3000/api/get_tea_pwd', {
            params: {
              real_name: this.$route.query.tea_name
            }
          })
            .then(function (tea) {
              _this.tea_data = tea.data.message;
            })
            .catch(function (error) {
              console.log(error);
            });

        },
      },
      mounted(){
        this.getParams();
        this.getPwd();
      },
    }
</script>

<style scoped>
  .personal_main{
    min-width: 800px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
  .subtitle{
    text-align: left;
  }
  .padding{
    margin: 15px 0;
    line-height: 40px;
  }
  .control-label{
    width: 120px;
    text-align: right;
    height: 40px;
    float: left;
    line-height: 40px;
  }
  .personal_content .el-input{
    width: 500px;
  }
</style>
