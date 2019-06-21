<template>
    <div class="container-fluid">
      <div class="exam-preview">
        <video id="video" width="600" height="400" autoplay="autoplay" style="display: none;"></video>
        <div class="el-dialog__wrapper" style="z-index: 2002;">
          <div class="el-dialog" style="width: 500px; margin-top: 15vh;">
            <div class="el-dialog__header">
              <span class="el-dialog__title">{{user_num}}</span><!---->
            </div>
            <div class="el-dialog__body">
              <div class="content">
                <div>
                  <div class="exam-detail">
                    <div class="exam_preview_img">
                      <img src="https://www.qingsuyun.com/h5/p/static/images/logo.png" alt="">
                    </div> <!---->
                    <div class="exam-info" v-for="(i,index) in time_get">
                      <span class="exam-left" >考试时长</span>
                      <span class="exam-right">60分钟</span>
                    </div>
                    <div class="exam-info">
                      <span class="exam-left">试卷总分</span>
                      <span class="exam-right">100分</span></div>
                    <!--<div class="exam-info">-->
                      <!--<span class="exam-left">题目数量</span>-->
                      <!--<span class="exam-right">2题</span>-->
                    <!--</div> -->
                  </div>
                </div> <!---->
              </div>
            </div>
            <div class="el-dialog__footer">
              <div class="dialog-footer">
                <button type="button" class="el-button el-button--success el-button--medium" @click="goExam"><!----><!---->
                  <span>开始考试</span>
                </button> <!---->
              </div>
            </div>
          </div>
        </div>
        <div class="el-dialog__wrapper" style="display: none;">
          <div class="el-dialog" style="width: 600px; margin-top: 15vh;">
            <div class="el-dialog__header">
              <span class="el-dialog__title">提示</span><!---->
            </div><!---->
            <div class="el-dialog__footer">
              <span class="dialog-footer">
                <button type="button" class="el-button el-button--default el-button--medium"><!----><!---->
                  <span>取 消</span>
                </button>
                <button type="button" class="el-button el-button--success el-button--medium"><!----><!---->
                  <span>刷新</span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "ExamPage",
    computed: {
      ...mapState(['time_get']),
    },
    mounted(){
    this.$store.dispatch('reqExamTime');
    },
    data(){
      return{
        real_name:'',
        user_num:'',
      }
    },
    created() {
      this.getParams();
    },
    watch: {
      '$route': 'getParams'
    },
    methods:{
      getParams() {
        // 取到路由带过来的参数
        this.real_name = this.$route.query.real_name;
        this.user_num = this.$route.query.user_num;
        console.log(this.real_name,this.user_num);
      },
      //考试
      goExam(){
        let real_name = this.$route.query.real_name;
        let user_num = this.$route.query.user_num;
        this.$router.push({path:'/exam_real',query: {real_name,user_num}});
      }
    }
  }
</script>

<style scoped>
  .exam-preview{
    background-color: #f8f9fb!important;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .el-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
  }
  .el-dialog {
    position: relative;
    margin: 0 auto 50px;
    background: #fff;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 50%;
  }

  .el-dialog, .el-dialog__footer {
    -webkit-box-sizing: border-box;
  }
  /*头部*/
  .el-dialog__header {
    border-bottom: 1px solid #dcdcdc;
    padding: 20px 20px 10px;
  }
  .el-dialog__title {
    line-height: 24px;
    font-size: 18px;
    color: #303133;
  }

  /*主体*/
  .el-dialog__body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
  }
  .exam-detail{
    padding: 0 100px;
  }
  .exam_preview_img{
    height: 60px;
    text-align: center;
    margin-bottom: 20px;
    max-width: 240px;
    min-width: 200px;
    overflow: hidden;
  }
  .exam-info{
    line-height: 28px;
    display: table;
    width: 100%;
  }
  .exam-left{
    width: 70%;
    color: #b0b0b0;
    display: table-cell;
  }
  .exam-right{
    width: 30%;
    color: #b0b0b0;
    display: table-cell;
  }
  /*尾部*/
  .el-dialog__footer {
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
    border-top: 1px solid #dcdcdc;
  }
  .el-button--medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  .el-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }
  .el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #dcdfe6;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }

  .el-button{
    -ms-user-select: none;
    font-weight: 500;
  }

</style>
