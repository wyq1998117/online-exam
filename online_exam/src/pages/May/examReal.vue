<template>
  <div class="container-fluid">
    <div class="strat-exam-body">
      <div class="lyt-box">
        <div class="lyt-contents">
          <div class="center-parent">
            <div class="left-box">
              <!--头部-->
              <div class="title-box">
                <!--<span class="exam-name">{{choice_data[0].choice_else}}</span>-->
                <span class="time-box">{{examLastTime}}</span>
              </div>
              <div class="content-box">
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
                          <el-radio-group v-model="itemRadio[index]">
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
                                <el-radio-button  @click.native.prevent="getRadioVal" :label="'D、'+ item.choice_D" :value="'D、' +item.choice_D" ref="ref">{{'D、' +item.choice_D}}</el-radio-button>
                                <!--<input type="radio"  class="el-radio__original"  :value="'A、' +item.choice_A" :name="radio1">-->
                              </span>
                            </div>
                          </el-radio-group>
                          <!--<div>-->
                            <!--<label role="radio" class="radio-choice el-radio options auto-line is-checked" @click="getRadioVal">-->
                              <!--<span class="el-radio__input ">-->
                                <!--&lt;!&ndash;is-checked&ndash;&gt;-->
                                <!--<span class="el-radio__inner"></span>-->
                                <!--&lt;!&ndash;<el-radio-button :label="'A、'+ item.choice_A"></el-radio-button>&ndash;&gt;-->
                                <!--<input type="radio" class="el-radio__original"  :value="'D、' +item.choice_D">-->
                              <!--</span>-->
                              <!--<span class="el-radio__label">-->
                                <!--D、<span class="rich-text">-->
                                <!--<p>{{item.choice_D}}</p>-->
                                <!--</span>&lt;!&ndash;&ndash;&gt;-->
                                <!--</span>-->
                            <!--</label>-->
                          <!--</div>-->
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
                                <input type="text"  ref="fillSub1" v-model="fill1[index]" autocomplete="off" style="width: 500px;"  class="fill-ans1 el-input__inner">
                              </div>
                            </div>
                            <div style="margin-bottom: 10px;">
                              第2空：
                              <div class="input-width-edit mt-xs el-input el-input--medium" style="display: inline">
                                <input type="text" ref="fillSub2" v-model="fill2[index]" autocomplete="off" style="width: 500px;" class="fill-ans2 el-input__inner">
                              </div>
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
                                <textarea name="" ref="askSub" v-model="ask[index]" style="height: 180px;" cols="50" rows="20" class="el-input__inner text-center ask-content"></textarea>
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
                                <textarea name="" ref="askSub" v-model="mix[index]" style="height: 180px;" cols="50" rows="20" class="el-input__inner text-center mix-content"></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>

                  <div>
                    <!--<button id="previous" >前一题</button>-->
                    <!--<button id="next" >下一题</button>-->
                    <button id="submit" @click="submitAnswer">提交</button>
                  </div>
                </div>

            　</div>
            </div>

            <div class="right-box">
              <div class="datike-box">
                <div class="exam-info-box">学生个人信息</div>
                <div class="datike-info">
                  <div class="datika-item-box do-question-list">
                      <span>
                        <span class="datika-item">
                          {{this.$route.query.real_name}}
                          <!--<i class="el-icon-location ui-marked" style="display: none;"></i>-->
                          <!--<span class="question-card do-question-index selected">1</span>-->
                        </span>
                      </span>
                      <span>
                          <span class="datika-item">
                            {{this.$route.query.user_num}}
                            <!--<i class="el-icon-location ui-marked" style="display: none;"></i>-->
                            <!--<span class="question-card do-question-index selected">1</span>-->
                          </span>
                        </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapState} from "vuex";
  import {subStu} from "../../api";
  import axios from 'axios'
  export default {
    name: "examReal",
    data(){
      return {
        real_name:'',
        user_num:'',
        sub_content:'11',
        activeClass: 0,
        currentSlide:0,
        chooseNum:0,
        fillNum:0,
        checkList: '',
        fill_length:0,
        fill_sub:null,
        chooseNumStr:'',
        fill1:{},
        fill2:{},
        ask:{},
        mix:{},
        ipaddr: "192,168,100,110",
        danNewArr:{},
        danarr:[],//所有题目的名称组装成一个对象数组，组装的数据格式会放在下面展示
        danoptions:[], //所有题目的对应的选项，组装成一个对象数组
        radioArray:[],
        //存放后台数据
        choice_data:[],
        fill_data:[],
        ask_data:[],
        mix_data:[],
        itemRadio: ['radio0','radio1','radio2','radio3','radio4','radio5','radio6'],
        choiceStr:'',
        arr:[],
        choice_else:'',
        //定时器内容
        limittime: 60,//考试时间60分钟
        settime: '',
        flag: false,
        examLastTime: '01:00:00',
        mallInfo: ''
      }
    },
    mounted(){
      this.getAxios();
      this.getParams();
      this.StartCountDown();
      // this.showSlide(0)
      this.$store.dispatch('reqChoiceSelect');
      this.$store.dispatch('reqFillSelect');

    },
    computed: {
      ...mapState(['get_choice_select']),
      ...mapState(['get_fill_select']),
  },
    created(){
    },
    methods: {
      getParams() {
        // 取到路由带过来的参数
        this.real_name = this.$route.query.real_name;
        this.user_num = this.$route.query.user_num;
        console.log(this.real_name,this.user_num);
      },
      // getItem(index) {
      //   this.activeClass = index;  // 把当前点击元素的index，赋值给activeClass
      // },
      // showSlide(index) {
      //   // const slides = document.getElementById('question-box');
      //   // const slides = document.querySelectorAll("li");//slide
      //   const runnerList = document.getElementById("question-box");
      //   const slides = Array.prototype.slice.call(runnerList.querySelectorAll("li"));
      //   const previousButton = document.getElementById("previous");
      //   const nextButton = document.getElementById("next");
      //   const submitButton = document.getElementById("submit");
      //   this.currentSlide = index;
      //   if (this.currentSlide === 0) {
      //     previousButton.style.display = "none";
      //   } else {
      //     previousButton.style.display = "inline-block";
      //   }
      //
      //   if (this.currentSlide === slides.length - 1) {
      //     nextButton.style.display = "none";
      //     submitButton.style.display = "inline-block";
      //   } else {
      //     nextButton.style.display = "inline-block";
      //     submitButton.style.display = "none";
      //   }
      // },
      // showNextSlide(e) {
      //   this.showSlide(this.currentSlide + 1);
      //   const runnerList = document.getElementById("question-box");
      //   const slides = Array.prototype.slice.call(runnerList.querySelectorAll("li"));
      //   for (let i = 0; i < slides.length; i++) {
      //     slides[this.currentSlide].classList.add("active");
      //     slides[this.currentSlide - 1].classList.remove("active");
      //   }
      // },
      // //上一题
      // showPreviousSlide() {
      //   this.showSlide(this.currentSlide - 1);
      //   const slides = document.querySelectorAll("li");//slide
      //   if (this.currentSlide && this.currentSlide > 0) {
      //     slides[this.currentSlide].classList.add("active");
      //     slides[this.currentSlide + 1].classList.remove("active");
      //   } else {
      //     slides[this.currentSlide].classList.add("active");
      //     slides[this.currentSlide + 1].classList.remove("active");
      //   }
      //
      // },
      //提交答案
      submitAnswer() {
        this.getRadioVal(event);
        console.log(this.arr);

        swal({
          title: "Are you sure?",
          text: "确定要提交试卷?",
          icon: "warning",
          dangerMode: true,
        }).then(willDelete => {
          if (willDelete) {
            let temp_all = [];
            let choiceArr = [];
            let fillSub1 = [];
            let fillSub2 = [];
            let askSub = [];
            let mixSub = [];
            let fillArr1 = [];
            let fillArr2 = [];
            let askArr = [];
            let mixArr = [];
            choiceArr.push(this.arr);
            console.log(choiceArr);
            for (var j = 0; j < this.fill_data.length; j++) {
              let temp_arr1 = [];
              let temp_arr2 = [];
              temp_arr1.push($('.fill-ans1')[j].value);
              temp_arr2.push($('.fill-ans2')[j].value);
              fillArr1.push(temp_arr1);
              fillArr2.push(temp_arr2);
            }
            for (var k = 0; k < this.ask_data.length; k++) {
              let temp_arr = [];
              temp_arr.push($('.ask-content')[k].value);
              askArr.push(temp_arr);
          }
            console.log(askArr);
            for (var l = 0; l < this.mix_data.length; l++) {
              let temp_arr = [];
              temp_arr.push($('.mix-content')[l].value);
              mixSub.push(temp_arr);
            }
            this.real_name = this.$route.query.real_name;
            this.user_num = this.$route.query.user_num;
            this.choice_else = this.choice_data[0].choice_else;
            const result = subStu(choiceArr,fillArr1,fillArr2,askArr,mixSub,this.real_name,this.user_num,this.choice_else);
            console.log(result);
            swal("Deleted!", "提交成功!", "success");
          }
        });

      },
      getRadioVal(event) {
        let radioVal = event.currentTarget.innerText;
        this.choiceStr = radioVal;
        this.arr.push((this.choiceStr).replace('提交', ''));
      },
      getAxios(){
        let _this = this;
        axios.all([
          axios.get('http://localhost:3000/api/get_choice_send', {
            params: {
              choice_else: this.$route.query.id
            }
          }),
          axios.get('http://localhost:3000/api/get_fill_send', {
            params: {
              choice_else: this.$route.query.id
            }
          }),
          axios.get('http://localhost:3000/api/get_ask_send', {
            params: {
              choice_else: this.$route.query.id
            }
          }),
          axios.get('http://localhost:3000/api/get_mix_send', {
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
          this.$router.push({path: '/home'});
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

      beforeCreate() {

        document.querySelector('body').setAttribute('style', 'background-color:#f8f9fb!important')

      },

      beforeDestroy() {

        document.querySelector('body').removeAttribute('style')
      }
    }
  }
</script>

<style scoped>
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
