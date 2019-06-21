<template>
  <div class="exam_main">
    <div class="exam_main" style="margin-left: 30px;margin-top: 30px;">
      <div class="container">
        <ul v-if="stu_data.length > 0">
          <li class="out"  v-for="(item,index) in stu_data" :key="index">
            <h2>{{item.real_name}}</h2>
            <h3>{{item.user_num}}</h3>
            <p>

              15 active clients <br/>
              Unlimited invoices per month <br/>
              Unlimited staff logins <br/>
              Free upgrades <br/>
              RapidSSL Certificate <br/>

              Unlimited telephone & email support
            </p>
            <!--@click="switchTo('/teacher/score')"-->
            <p  @click="switchTo('/teacher/score')">
              <el-button>
                <span>{{item.id}}</span>
              </el-button>
            </p>
          </li>
        </ul>
      </div>
      <!-- 改题模态框（Modal） -->
      <div class="modal fade" id="mySort">
        <div role="dialog"  class="el-dialog" style="margin-top: 15vh; width: 800px;">
          <div class="el-dialog__header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×
            </button>
            <span class="el-dialog__title">阅卷</span>
          </div>
          <div class="el-dialog__body">
            <!--显示已选中的题目-->
            <div class="sublist"  >
              <div class="do-question-content">
                <ul class="question-box" v-if="choice_data.length > 0">

                  <div  style="border-top: 1px solid #ebeef5;height: 48px;">
                    <h3  style="padding-top: 10px;">一、[选择题]</h3>
                  </div>
                  <li v-for="(item,index) in choice_data" :key="index">
                    <div class="question" style="font-size: 30px;margin-bottom: 10px;">
                      {{ index + 1}}、{{item.choice_content}}
                    </div>
                    <div  class="client_type_1">
                      <!--{{ (item.choice_answer || '').split(',')}}-->
                      <el-radio-group >
                        <!--v-model="itemRadio[index]"-->
                        <div class="radio-choice el-radio options auto-line is-checked">
                              <span class="el-radio__input " >
                                <el-radio-button  @click.native.prevent="getRadioVal" :label="'A、'+ item.choice_A" :value="'A、' +item.choice_A" ref="ref">{{'A、' +item.choice_A}}</el-radio-button>
                                <!--<input type="radio"  class="el-radio__original"  :value="'A、' +item.choice_A" :name="radio1">-->
                              </span>
                        </div>
                        <div class="radio-choice el-radio options auto-line is-checked">
                              <span class="el-radio__input " >
                                <el-radio-button  @click.native.prevent="getRadioVal" :label="'B、'+ item.choice_B" :value="'B、' +item.choice_B" ref="ref">{{'B、' +item.choice_B}}</el-radio-button>
                                <!--<input type="radio"  class="el-radio__original"  :value="'A、' +item.choice_A" :name="radio1">-->
                              </span>
                        </div>
                        <div class="radio-choice el-radio options auto-line is-checked">
                              <span class="el-radio__input " >
                                <el-radio-button  @click.native.prevent="getRadioVal" :label="'C、'+ item.choice_C" :value="'C、' +item.choice_C" ref="ref">{{'C、' +item.choice_C}}</el-radio-button>
                                <!--<input type="radio"  class="el-radio__original"  :value="'A、' +item.choice_A" :name="radio1">-->
                              </span>
                        </div>
                        <div class="radio-choice el-radio options auto-line is-checked">
                              <span class="el-radio__input " >
                                <el-radio-button  :label="'D、'+ item.choice_D" :value="'D、' +item.choice_D" ref="ref">{{'D、' +item.choice_D}}</el-radio-button>
                                <!--<input type="radio"  class="el-radio__original"  :value="'A、' +item.choice_A" :name="radio1">-->
                              </span>
                        </div>
                      </el-radio-group>
                      评分:
                      <div  class="input-width-edit mt-xs el-input el-input--medium">
                        <input type="text" class="form-control scoreStu" placeholder="请输入分数">
                      </div>
                    </div>
                  </li>
                </ul>
                <ul class="question-box" v-if="fill_data.length > 0">
                  <div  style="border-top: 1px solid #ebeef5;height: 48px;">
                    <h3  style="padding-top: 10px;">二、[填空题]</h3>
                  </div>
                  <li v-for="(item,index) in fill_data" :key="index">
                    <div class="question" style="font-size: 30px;margin-bottom: 10px;">
                      {{ index + 1}}、{{item.fill_content}}
                    </div>
                    <div>
                      <div ref="liId">
                        <div style="margin-bottom: 10px;">
                          第1空：
                          <div class="input-width-edit mt-xs el-input el-input--medium" style="display: inline">
                            <!--<input type="text"  ref="fillSub1" v-model="fill1[index]" autocomplete="off" style="width: 500px;"  class="fill-ans1 el-input__inner">-->
                          </div>
                        </div>
                        <div style="margin-bottom: 10px;">
                          第2空：
                          <div class="input-width-edit mt-xs el-input el-input--medium" style="display: inline">
                            <!--<input type="text" ref="fillSub2" v-model="fill2[index]" autocomplete="off" style="width: 500px;" class="fill-ans2 el-input__inner">-->
                          </div>

                        </div>
                        评分:
                        <div  class="input-width-edit mt-xs el-input el-input--medium">
                          <input type="text" class="form-control scoreStu"  placeholder="请输入分数">
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul class="question-box" v-if="ask_data.length > 0">
                <div  style="border-top: 1px solid #ebeef5;height: 48px;">
                <h3  style="padding-top: 10px;">三、[问答题]</h3>
                </div>
                <li v-for="(item,index) in ask_data" :key="index">
                <div class="question" style="font-size: 30px;margin-bottom: 10px;">
                {{ index + 1}}、{{item.ask_content}}
                </div>
                <div class="client_type_3">
                <div>
                <div>
                答案：
                <div class="input-width-edit mt-xs el-input el-input--medium">
                <textarea name="" ref="askSub" style="height: 180px;" disabled cols="50" rows="20" class="el-input__inner text-center ask-content"></textarea>
                </div>
                  评分:
                  <div  class="input-width-edit mt-xs el-input el-input--medium">
                    <input type="text" class="form-control scoreStu" placeholder="请输入分数">
                  </div>
                </div>
                </div>
                </div>
                </li>
                </ul>
                <ul class="question-box" v-if="mix_data.length > 0">
                <div  style="border-top: 1px solid #ebeef5;height: 48px;">
                <h3  style="padding-top: 10px;">四、[综合题]</h3>
                </div>
                <li v-for="(item,index) in mix_data" :key="index">
                <div class="question" style="font-size: 30px;margin-bottom: 10px;">
                {{ index + 1}}、{{item.mix_content}}
                </div>
                <div class="client_type_3">
                <div>
                <div>
                答案：
                <div class="input-width-edit mt-xs el-input el-input--medium">
                <textarea name="" ref="askSub"  style="height: 180px;" cols="50" disabled rows="20" class="el-input__inner text-center mix-content">{{item.mix_content}}</textarea>
                </div>
                  评分:
                  <div  class="input-width-edit mt-xs el-input el-input--medium">
                    <input type="text" class="form-control scoreStu" placeholder="请输入分数">
                  </div>
                </div>
                </div>
                </div>
                </li>
                </ul>

              </div>
            </div>
          </div>
          <div class="el-dialog__footer">
            <div  class="dialog-footer">
              <button  data-dismiss="modal" type="button" class="el-button el-button--default el-button--medium"><!----><!---->
                <span>取 消</span>
              </button>
              <button type="button" class="el-button el-button--primary el-button--medium el-button-sub" @click="scoreSub"><!----><!---->
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
  import axios from 'axios'
    export default {
      name: "Checking",
      data(){
        return{
          tea_name:'' ,
          tea_num: '',
          user_name:'',
          user_pwd:'',
          //存放后台数据
          choice_data:[],
          fill_data:[],
          ask_data:[],
          mix_data:[],
          stu_data:[],
          amount:'',
          stuStr:'',
        }
      },
      mounted(){
        this.getParams();
        this.getAxios();
      },
      created(){
        this.getPaper();
      },
      methods:{
        //获取选择的题目
        getAxios(){
          let _this = this;
          axios.all([
            axios.get('http://localhost:3000/api/get_choice_stu', {
              params: {
                choice_else: this.$route.query.id
              }
            }),
            axios.get('http://localhost:3000/api/get_fill_stu', {
              params: {
                choice_else: this.$route.query.id
              }
            }),
            axios.get('http://localhost:3000/api/get_ask_stu', {
              params: {
                choice_else: this.$route.query.id
              }
            }),
            axios.get('http://localhost:3000/api/get_mix_stu', {
              params: {
                choice_else: this.$route.query.id
              }
            })
          ])
            .then(axios.spread(function (choice, fill,ask,mix) {
              // 上面两个请求都完成后，才执行这个回调方法
              _this.choice_data = choice.data.message;
              _this.fill_data = fill.data.message;
              _this.ask_data = ask.data.message;
              _this.mix_data = mix.data.message;
            }));
        },
        getParams() {
          // 取到路由带过来的参数
          this.tea_name = this.$route.query.tea_name;
          this.tea_num = this.$route.query.tea_num;
          this.user_name = this.$route.query. user_name;
          this.user_pwd = this.$route.query. user_pwd;
          console.log(this.tea_name);
        },
        switchTo(path){
          this.getRadioVal(event);
          this.$router.replace({path, query:{tea_name:this.$route.query.tea_name,stu_id:this.stuStr}});
        },
        getRadioVal(event) {
          let radioVal = event.currentTarget.innerText;
          this.stuStr = radioVal;

          // this.arr.push((this.choiceStr).replace('提交', ''));
        },
        getPaper(){
          let _this = this;
          axios.get('http://localhost:3000/api/get_paper_content', {
            params: {
              choice_else: this.$route.query.id
            }
          })
            .then(function (stu) {
              _this.stu_data = stu.data.message;
                console.log(_this.stu_data);
            })
            .catch(function (error) {
              console.log(error);
            });

        },
        async scoreSub(){
          let content = $('.scoreStu');
          let str = '';
          let arr =[];
          let num = 0;
          for(let i = 0; i < content.length;i++){
            str = content[i].value;
            arr.push(parseInt(str));
          }
          for (let i = 0; i < arr.length; i++) {
            num += arr[i]
          }
          const result = await scoreSub(this.test_name,this.type);
          console.log(result);
        }
      }
    }
</script>

<style scoped>
  .container {
    width: 60%;
    margin: 30px auto;
    margin-top: 50px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    border: 1px solid #eee;
  }

  ul:after {
    content: '';
    clear: both;
    display: block;
    /*width: 100%;*/
  }

  ul .out {
    float: left;
    transition: all .2s;
    /*transition-delay: 1s*/
    width: 25%;
    height: 360px;
    border-right: 1px solid #ccc;
    box-sizing: border-box;
    padding: 10px;
  }

  ul .out h2 {
    font-size: 20px;
    text-align: center;
  }

  ul .out h3 {
    font-size: 18px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }

  ul .out button {
    display: block;
    width: 90%;
    margin: 10px auto;
    /*height: 60px;*/
    /*line-height: 60px;*/
    text-align: center;
    background: #DA6D0E;
    border-radius: 10px;
    transition: all .5s;
    position: relative;
    padding: 20px 0;
    text-decoration: none;
    color: #fff;
  }

  ul .out button span {
    display: block;
  }


  ul .out button:hover {
    box-shadow: 0px 1px 10px rgba(0,0,0,.8);
  }

  ul .out p {
    text-align: center;
    color: #111;
  }

  ul .out:nth-child(4) {
    border-right: none;
  }

  ul .out:hover{
    /*background: #efefef;*/
    box-shadow: 0px 4px 20px rgba(0,0,0,.3);
    border-radius: 10px;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    border: none;
    /*border: 1px solid #ccc;*/
    background: #fff;
  }
  .exam_main{
    position: absolute;
    left: 100px;
    top: 30px;
    right: 0;
    bottom: 0;
    overflow-x: auto;
    overflow-y: auto;
    transition: left .42s;
  }
  .stu_paper{
    width: 300px;
    height: 200px;
    background-color: #e8e8e8;
    box-shadow: 5px 5px 3px #8888;
    border-radius: 5px;
  }
  .stu_paper:hover{
    background-color: rgb(44, 49, 52);
  }
  /*学生*/
  .active {
    display: block!important;
  }

  .quiz-container{
    position: relative;
    height: 200px;
    margin-top: 40px;
  }
  .strat-exam-body{
    /*background-color: #f8f9fb!important;*/
    overflow-x: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    transition: left .42s;
    position: absolute;
  }
  .lyt-box{
    width: 1005px;
    margin: 0 auto;
    text-align: left;
    position: relative;
    box-sizing: border-box;
  }
  .lyt-contents{
    padding-bottom: 30px;
    /*background: #f8f9fb;*/
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    box-sizing: border-box;
  }
  .center-parent{
    width: 100%;
    height: 350px;
    display: table;
    padding-top: 20px;
  }
  .left-box{
    display: table-cell;
    vertical-align: top;
    width: 705px;
  }
  /*头部*/
  .title-box{
    background: #fff;
    min-height: 60px;
    color: #333;
    font-size: 1.2em;
    padding: 0 30px;
    display: table;
    width: 100%;
  }
  .exam-name{
    display: table-cell;
    vertical-align: middle;
    font-size: 1.4em;
  }
  .time-box{
    font-size: 1.4em;
    display: table-cell;
    vertical-align: middle;
    width: 150px;
    text-align: right;
    position: relative;
    color: orange;
  }
  /*body*/
  .content-box{
    position: relative;
    padding: 30px;
    background: #fff;
    margin-top: 10px;
  }
  .ui-star-box{
    text-align: right;
  }
  /*题目内容*/
  .question-box{
    padding: 10px 10px 30px;
    width: 645px;
  }
  .auto-line{
    white-space: normal;
    width: 100%;
    height: auto;
    word-wrap: break-word;
    overflow: hidden;
  }
  /*p {*/
  /*display: block;*/
  /*margin-block-start: 1em;*/
  /*margin-block-end: 1em;*/
  /*margin-inline-start: 0px;*/
  /*margin-inline-end: 0px;*/
  /*}*/

  .el-input--medium .el-input__inner {
    height: 36px;
    line-height: 36px;
  }
  /*尾部*/
  .el-button+.el-button {
    margin-left: 10px;
  }

  /*右侧内容*/
  .right-box{
    display: table-cell;
    width: 300px;
    vertical-align: top;
  }
  .datike-box{
    width: 100%;
    height: 100%;
    padding-left: 10px;
    background: #f8f9fb;
  }
  .exam-info-box {
    background: #fff;
    padding: 20px;
    font-size: 1.2em;
  }
  .datike-info{
    margin-top: 10px;
    background: #fff;
    padding: 20px;
  }
  .datika-item-box{
    padding: 5px;
  }
  .datika-item{
    padding: 5px 2px;
    display: inline-block;
    position: relative;
  }
  .datika-item>.question-card{
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #eee;
    border-radius: 6px;
    cursor: pointer;
  }
  /*选中*/
  .selected{
    border-color: blue!important;
  }

  .question{
    font-size: 30px;
    margin-bottom: 10px;
  }
  .answers {
    margin-bottom: 20px;
    text-align: left;
    display: inline-block;
  }
  .answers label{
    display: block;
    margin-bottom: 10px;
  }
  button{
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    background-color: #279;
    color: #fff;
    border: 0px;
    border-radius: 3px;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  button:hover{
    background-color: #38a;
  }
  /*选择题label*/
  .options{
    padding: 10px 25px;
    width: 100%;
    word-wrap: break-word;
    background-color: #f8f9fb;
    margin-bottom: 10px;
  }

  .el-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    width: 625px;
    cursor: pointer;
    white-space: nowrap;
    outline: 0;
    font-size: 14px;
    position: relative;
    display: inline-block;
  }
  .el-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
  .rich-text>:first-child {
    display: inherit;
  }
  textarea{
    resize: none;
  }
</style>
