<template>
    <div class="container-fluid exam" >
      <div class="row">
        <div class="left-studentInfo col-md-3">
            <div class="student-show">
                <span>考生姓名：{{real_name}}</span><br>
                <span>考生学号：{{user_num}}</span><br>
                <span>考试时长：{{totalTime}}</span><br>
                <span>试卷总分：{{scroeTotal}}</span><br>
                <span>考试进度：{{examLastTime}}</span><br>
                <span class="show-help" data-toggle="modal" data-target="#myModal">帮助</span><br>
            </div>
          <div class="ad">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="/static/public/images/exam-ad1.jpg" class="img-responsive" style="width: 100%;height: 390px; border-radius: 7px" alt=""></div>
                <div class="swiper-slide"><img src="/static/public/images/exam-ad2.jpg" class="img-responsive" style="width: 100%;height: 390px; border-radius: 7px" alt=""></div>
                <div class="swiper-slide"><img src="/static/public/images/exam-ad3.jpg" class="img-responsive" style="width: 100%;height: 390px; border-radius: 7px" alt=""></div>
                <div class="swiper-slide"><img src="/static/public/images/exam-ad4.jpg" class="img-responsive" style="width: 100%;height: 390px; border-radius: 7px" alt=""></div>
                <div class="swiper-slide"><img src="/static/public/images/exam-ad5.jpg" class="img-responsive" style="width: 100%;height: 390px; border-radius: 7px" alt=""></div>
              </div>
              <!--分页-->
              <div class="swiper-pagination"></div>
            </div>

          </div>
        </div>
          <div class="right-examShow col-md-7" style="overflow-x: hidden">
            <h2 class="text-center">历史</h2>
            <!--<div class="tChoice" v-if="get_choice_select.length > 0">-->
              <!--<div class="el-card is-hover-shadow" style="width: 927px; margin: 0 auto; margin-bottom: 8px;" v-for="(casual,index) in get_choice_select" :key="index" @click="choiceDel(casual.choice_content)">-->
                <!--<div class="el-card__body" style="padding: 10px;">-->
                  <!--<div>-->
                    <!--<div class="subject_title_left">-->
                      <!--<label role="checkbox" class="el-checkbox">-->
                    <!--<span aria-checked="mixed" class="el-checkbox__input">-->
                      <!--<span class="el-checkbox__inner"></span>-->
                      <!--<input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="">-->
                    <!--</span>-->
                        <!--<span class="el-checkbox__label">-->
                      <!--<font size="4">{{ (index + 1)}}、[单选题]</font>-->
                    <!--</span>-->
                      <!--</label>-->
                    <!--</div>-->
                    <!--<div class="subject_title_right">-->
                      <!--<div class="el-button-group">-->

                        <!--<button type="button" class="el-button el-button&#45;&#45;default el-button&#45;&#45;medium" @click="choiceDel">&lt;!&ndash;&ndash;&gt;-->
                          <!--<i class="fa fa-trash"></i>-->
                          <!--<span >删除</span>-->
                        <!--</button>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="questionContent rich-text">-->
                    <!--<p>{{casual.choice_content}}</p>-->
                  <!--</div> &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;-->
                  <!--<div>-->
                    <!--<div class="questionOptions">-->
                      <!--<div>-->
                        <!--<div role="radiogroup" class="el-radio-group">-->
                          <!--<div>-->
                            <!--<label role="radio" aria-checked="true" aria-disabled="true" tabindex="-1" class="el-radio options auto-line is-disabled is-checked">-->
                          <!--<span class="el-radio__input is-disabled is-checked">-->
                            <!--<span class="el-radio__inner"></span>-->
                            <!--<input type="radio" aria-hidden="true" disabled="disabled" tabindex="-1" class="el-radio__original" value="0">-->
                          <!--</span>-->
                              <!--<span class="el-radio__label">-->
                            <!--A、<span class="rich-text">-->
                            <!--<p>{{casual.choice_A}}</p>-->
                              <!--</span>&lt;!&ndash;&ndash;&gt;-->
                          <!--</span>-->
                            <!--</label>-->
                          <!--</div>-->
                          <!--<div>-->
                            <!--<label role="radio" aria-disabled="true" tabindex="-1" class="el-radio options auto-line is-disabled">-->
                          <!--<span class="el-radio__input is-disabled">-->
                            <!--<span class="el-radio__inner"></span>-->
                            <!--<input type="radio" aria-hidden="true" disabled="disabled" tabindex="-1" class="el-radio__original" value="1">-->
                          <!--</span>-->
                              <!--<span class="el-radio__label">-->
                            <!--B、<span class="rich-text">-->
                            <!--<p>{{casual.choice_B}}</p>-->
                                <!--</span>&lt;!&ndash;&ndash;&gt;-->
                          <!--</span>-->
                            <!--</label>-->
                          <!--</div>-->
                          <!--<div>-->
                            <!--<label role="radio" aria-disabled="true" tabindex="-1" class="el-radio options auto-line is-disabled">-->
                          <!--<span class="el-radio__input is-disabled">-->
                            <!--<span class="el-radio__inner"></span>-->
                            <!--<input type="radio" aria-hidden="true" disabled="disabled" tabindex="-1" class="el-radio__original" value="2">-->
                          <!--</span>-->
                              <!--<span class="el-radio__label">-->
                            <!--C、<span class="rich-text"><p>{{casual.choice_C}}</p></span>&lt;!&ndash;&ndash;&gt;-->
                          <!--</span>-->
                            <!--</label>-->
                          <!--</div>-->
                          <!--<div>-->
                            <!--<label role="radio" aria-disabled="true" tabindex="-1" class="el-radio options auto-line is-disabled">-->
                          <!--<span class="el-radio__input is-disabled">-->
                            <!--<span class="el-radio__inner"></span>-->
                            <!--<input type="radio" aria-hidden="true" disabled="disabled" tabindex="-1" class="el-radio__original" value="3">-->
                          <!--</span>-->
                              <!--<span class="el-radio__label">-->
                            <!--D、<span class="rich-text"><p>{{casual.choice_D}}</p></span>&lt;!&ndash;&ndash;&gt;-->
                          <!--</span>-->
                            <!--</label>-->
                          <!--</div>-->
                        <!--</div>-->
                      <!--</div> &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt;-->
                    <!--</div> &lt;!&ndash;&ndash;&gt;-->
                    <!--<div class="questionContent text-muted">-->
                      <!--解析：<span class="rich-text"><p>{{casual.choice_analysis}}</p></span>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <div class="right-examShow-choice text-center" v-if="get_choice_select.length > 0" style="text-align: left">
              <h4>一.选择题</h4>
              <div class="choice-content"v-for="(casual,index) in get_choice_select" :key="index" >
                <p class="choice-choose">
                  <font size="3">{{ (index + 1)}}、</font>
                  {{casual.choice_content}}
                  <input type="text" class="text-center subChoice">
                </p>
                <div class="exam-answer">
                  <!--{{casual.content}}-->
                  <div>
                    <label role="radio" tabindex="0" class="el-radio options-box">
                      <!--<span class="el-radio__input">-->
                        <!--<input type="radio" aria-hidden="true" tabindex="-1" class="el-radio__original" value="true">-->
                      <!--</span>-->
                      <span class="el-radio__label">
                          A、{{casual.choice_A}}
                      </span>
                    </label>
                  </div>
                  <div>
                    <label role="radio" tabindex="0" class="el-radio options-box">
                      <span class="el-radio__label">
                          B、{{casual.choice_B}}
                      </span>
                    </label>
                  </div>
                  <div>
                    <label role="radio" tabindex="0" class="el-radio options-box">
                      <span class="el-radio__label">
                          C、{{casual.choice_C}}
                      </span>
                    </label>
                  </div>
                  <div>
                    <label role="radio" tabindex="0" class="el-radio options-box">
                      <span class="el-radio__label">
                          D、{{casual.choice_D}}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="right-examShow-fill-blanks  text-center" style="text-align: left" v-if="get_fill_select.length > 0" >
              <!--填空题-->
              <h4>二.填空题</h4>
              <div class="fill-content" v-for="(casual,index) in get_fill_select" :key="index">
                <div class="fill-blanks-title">
                  <p>
                    <font size="3">{{ (index + 1)}}、</font>
                    {{casual.fill_content}}
                  </p>
                </div>
                <div>
                  <div>
                    第1空：
                    <div class="input-width-edit mt-xs el-input el-input--medium">
                      <input type="text" autocomplete="off" class="el-input__inner"><!----><!----><!---->
                    </div>
                  </div>
                  <div>
                    第2空：
                    <div class="input-width-edit mt-xs el-input el-input--medium"><!---->
                      <input type="text" autocomplete="off" class="el-input__inner"><!----><!----><!---->
                    </div>
                  </div>
                  <div>
                    第3空：
                    <div class="input-width-edit mt-xs el-input el-input--medium"><!---->
                      <input type="text" autocomplete="off" class="el-input__inner"><!----><!----><!---->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="right-examShow-ask  text-center" style="text-align: left" v-if="get_ask_select.length > 0">
              <!--问答题-->
              <h4>三.问答题</h4>
              <div class="ask-content" v-for="(casual,index) in get_ask_select" :key="index">
                <div class="ask-title">
                  <p>
                    <font size="3">{{ (index + 1)}}、</font>
                    {{casual.ask_content}}
                  </p>
                </div>
                <textarea name=""  cols="50" rows="5" class="text-center ask-content"></textarea>
              </div>
            </div>
            <div class="right-examShow-compute  text-center" style="text-align: left" v-if="get_mix_select.length > 0">
              <!--计算题-->
              <h4>四.材料题</h4>
              <div class="material-content" v-for="(casual,index) in get_mix_select" :key="index">
                <div class="ask-title">
                  <p>
                    <font size="3">{{ (index + 1)}}、</font>
                    {{casual.mix_content}}
                  </p>
                </div>
                <textarea name=""  cols="50" rows="5" class="text-center material-content"></textarea>
              </div>
            </div>

            <button type="submit" class="btn btn-success exam-sub" @click="subExam">提交试卷</button>
          </div>

      </div>

      <!-- 模态框（Modal） -->
      <div class="modal fade" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header" style="background: #0AB4F7">
              <button type="button" class="close" data-dismiss="modal"
                      aria-hidden="true">×
              </button>
              <h4 class="modal-title" id="myModalLabel">
                考试相关内容
              </h4>
            </div>
            <div class="modal-body">
              <p class="text-center">第一部分：选择题（2分） 10个</p>
              <p class="text-center">第二部分：填空题（3分） 10个</p>
              <p class="text-center">第三部分：问答题 （5分）  4个</p>
              <p class="text-center">第四部分：计算题（10分）  3个</p>
              <h2 class="text-center" style="color: crimson;margin-top: 10px;">作弊可耻</h2>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default"
                      data-dismiss="modal">关闭
              </button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </div><!-- /.modal -->
    </div>
</template>

<script>
  //引入swiper轮播插件
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  import axios from 'axios'
  import swal from 'sweetalert';

  export default {
    name: "Exam",
    mounted() {
      //1.请求选择题数据
      this.$store.dispatch('reqChoice');
      //2.请求填空题数据
      this.$store.dispatch('reqFill');
      //3.请求问答题数据
      this.$store.dispatch('reqAsk');
      //4.请求材料题数据
      this.$store.dispatch('reqMaterial');
      this.$store.dispatch('reqChoiceSelect');
      this.$store.dispatch('reqFillSelect');
      this.$store.dispatch('reqAskSelect');
      this.$store.dispatch('reqMixSelect');
      this.getParams();
      this.StartCountDown();

      document.getElementsByTagName("body")[0].className="add_bg";

      //创建swiper实例
      new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        effect: 'cube',
        autoplay: true,//自动播放
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },

    data() {
      return {
        //考生信息
        totalTime: '120分钟',
        scroeTotal: '100分',
        real_name: '',
        user_num: '',
        sub_content: {},
        teacher:'',
        exam_title:{},

        //定时器内容
        limittime: 60,//考试时间60分钟
        settime: '',
        flag: false,
        examLastTime: '01:00:00',
        mallInfo: ''
      }
    },
    computed: {
      //获取题目数据
      ...mapState(['exam_choice']),
      ...mapState(['exam_fill']),
      ...mapState(['exam_ask']),
      ...mapState(['exam_material']),
      ...mapState(['get_choice_select']),
      ...mapState(['get_fill_select']),
      ...mapState(['get_ask_select']),
      ...mapState(['get_mix_select']),
    },
    created() {
      this.getParams();
    },
    watch: {
      '$route': 'getParams'
    },
    methods: {
      getParams() {
        // 取到路由带过来的参数
        this.real_name = this.$route.query.real_name;
        this.user_num = this.$route.query.user_num;
      },

      StartCountDown() {
        let mydate = new Date();
        mydate.setMinutes(mydate.getMinutes() + this.limittime);
        this.settime = mydate;

        let time = setInterval(() => {
          if (this.flag == true) {
            clearInterval(time);
            this.flag = false
          }
          this.timeDown();
        }, 100)
      },
      timeDown() {
        const endTime = new Date(this.settime);
        const nowTime = new Date();
        let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
        // let d = parseInt(leftTime / (24 * 60 * 60));
        let h = this.formate(parseInt(leftTime / (60 * 60) % 24));
        let m = this.formate(parseInt(leftTime / 60 % 60));
        let s = this.formate(parseInt(leftTime % 60));
        if (leftTime < 0) {
          this.flag = true;
          swal("时间到，停止作答");
          this.limittime = 0;
          this.$router.push({path: '/teacher'});
        }
        this.examLastTime = `${h}:${m}:${s}`;
      },
      formate(time) {
        if (time >= 10) {
          return time;
        } else {
          return `0${time}`;
        }
      },

      //提交试卷
      subExam() {

        // let msg = confirm("确定提交试卷？");
        swal({
          title: "Are you sure?",
          text: "确定要提交试卷?",
          icon: "warning",
          dangerMode: true,
        }).then(willDelete => {
          if (willDelete) {
            let temp_arr_choice = [];
            let temp_arr_fill = [];
            let temp_arr_ask = [];
            let temp_arr_material = [];
            let temp_arr_all = [];
            for (var i = 0; i < 10; i++) {
              let temp_arr = [];
              temp_arr.push($('.subChoice')[i].value);
              temp_arr_choice.push(temp_arr);
            }
            for (var j = 0; j < 10; j++) {
              let temp_arr = [];
              temp_arr.push($('.fill-blanks-content')[j].value);
              temp_arr_fill.push(temp_arr);
            }
            for (var k = 0; k < 4; k++) {
              let temp_arr = [];
              temp_arr.push($('.ask-content')[k].value);
              temp_arr_ask.push(temp_arr);
            }
            for (var l = 0; l < 3; l++) {
              let temp_arr = [];
              temp_arr.push($('.material-content')[l].value);
              temp_arr_material.push(temp_arr);
            }
            temp_arr_all.push(temp_arr_choice, temp_arr_fill, temp_arr_ask, temp_arr_material);
            this.sub_content = temp_arr_all;
            this.exam_title = document.querySelector('.right-examShow').innerHTML;
            console.log(this.sub_content);

            let param = new URLSearchParams();
            param.append("real_name", this.real_name);
            param.append("user_num", this.user_num);
            param.append("sub_content", this.sub_content);

            axios.post('http://localhost:3000/api/sub', param).then((response)=>{
              let res = response.data;
              console.log(res);
            });
            swal("Deleted!", "提交成功!", "success");
            // this.$router.push({path:'/home'});
          }
        });





      }
    }
  }
</script>


<style scoped>
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .exam{
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  }
  .left-studentInfo{
    background-color: #e8e8e8;
    height: 100%;
    margin: 5px;
    border-radius: 5px;
    position: fixed;
  }
  .left-studentInfo .student-show {
    /*background-color: orange;*/
    margin-top: 50px;
    width: 100%;
    font-size: 15px;
    line-height: 35px;
  }
  .ad{
    margin-top: 120px;
  }



  /*右侧试题框*/
  .right-examShow{
    float: right;
    background-color: #e8e8e8;
    margin: 5px;
    border-radius: 5px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

  }
  .right-examShow-choice{
    margin: 50px auto;
    margin-left: 50px;
    /*background-color: #b9def0;*/
    line-height: 40px;
  }
  .choice-choose input{
    width: 25px;
    height: 25px;
    border-radius: 6px;
  }
  /*填空题*/
  .right-examShow-fill-blanks {
    margin-left: 50px;
    /*background-color: #b9def0;*/
    line-height: 40px;
    /*height: 500px;*/
    margin-bottom: 50px;
  }
  textarea{
    outline: none;
    resize: none;
    border-radius: 5px;
  }
  /*问答题*/
  .right-examShow-ask{
    margin-left: 50px;
    /*background-color: #b9def0;*/
    line-height: 40px;
    /*height: 500px;*/
    margin-bottom: 50px;
  }
  /*计算题*/
  .right-examShow-compute{
    margin-left: 50px;
    /*background-color: #b9def0;*/
    line-height: 40px;
    /*height: 500px;*/
  }

  /*提交答案*/
  .exam-sub{
    margin-left:46%;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  /*模态框*/
  #myModal{
    line-height: 40px;
  }
  .show-help{
    cursor: pointer;
  }

  /*答题*/
  .el-radio, .el-radio__input{
    position: relative;
    display: inline-block;
  }
  .el-radio__label {
    font-size: 14px;
    padding-left: 20px;
  }
  .el-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: 0;
    line-height: 1;
    vertical-align: middle;
  }
  /*填空*/
  .mt-xs{
    margin-top: 10px;
  }

  .input-width-edit{
    width: 500px;
    display: inline-block
  }
  .el-input--medium {
    font-size: 14px;
  }


  .el-input--medium .el-input__inner {
    height: 36px;
    line-height: 36px;
  }
  .el-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }
</style>
