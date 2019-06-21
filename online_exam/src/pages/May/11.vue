<template>
  <!--<ul class="list">-->
  <!--<li v-for="(item,index) in items" v-on:click="addClass(index)" :key="index" :class="{active:index==current}">{{item.purpose}}</li>-->

  <!--</ul>-->
  <div>
    <div class="left-box">
      <!--头部-->
      <div class="title-box">
        <span class="exam-name">cccc</span>
        <span class="time-box">24:38</span>
      </div>

      <!--<div class="quiz-container">-->
      <!--<div id="quiz" style="height: 196px;overflow: hidden" ></div>-->
      <!--</div>-->
      <!--<form action="" class="question">-->
      <!--<div>-->
      <!--&lt;!&ndash;<h3 class="qus-title" :data-id="items.id">{{items.id}}</h3>&ndash;&gt;-->
      <!--<ul class="qus-list">-->
      <!--<li v-for="(item,index) in items" >-->
      <!--&lt;!&ndash;v-bind:class="{'li-focus' : chooseNum==index}" ref="liId"&ndash;&gt;-->
      <!--&lt;!&ndash;{{item.Code}}、{{item.Description}}&ndash;&gt;-->
      <!--<div class="question">-->
      <!--{{item.question}}-->
      <!--</div>-->
      <!--<div class="answers">-->
      <!--{{item.answers}}-->
      <!--</div>-->
      <!--</li>-->
      <!--</ul>-->
      <!--</div>-->
      <!--</form>-->
      <ul class="list">
        <li v-for="(item,index) in myQuestions" v-on:click="addClass(index)" :key="index" :class="{active_slide:index==current}">{{item.question}}</li>

      </ul>
      <!--<button class="public-btn">下一题</button>-->
      <!--<button class="public-btn">提交</button>-->
    </div>
    <!--<div style="margin-top: 140px;" >-->
    <!--<button id="previous" @click="showPreviousSlide">前一题</button>-->
    <!--<button id="next" @click="showNextSlide">下一题</button>-->
    <!--<button id="submit">提交</button>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: "may",
    data(){
      return{
        chooseNum:null,
        myQuestions:[
          {
            question: "“大煮干丝”是哪个菜系的代表菜之一( )。",
            answers: {
              A: "四川菜系",
              B: "山东菜系",
              C: "广东菜系",
              D: "淮扬菜系"
            },
            correctAnswer: "D"
          },
          {
            question: "红茶属于( )茶。",
            answers: {
              A: "半发酵",
              B: "发酵",
              C: "不发酵",
              D: "微发酵"
            },
            correctAnswer: "A"
          },
          {
            question: "满汉全席起兴于（ ）。",
            answers: {
              A: "清代",
              B: "唐代",
              C: "宋代",
              D: "两汉"
            },
            correctAnswer: "A"
          }
        ],
        currentSlide:0,
        active_slide:'active_slide',
        current:0,
        items:[
          {purpose:'洗车'},
          {purpose:'美容'},
          {purpose:'养护'},
          {purpose:'换件'}
        ],
      }
    },
    mounted(){
      // this.buildQuiz();
      // this.showSlide(0);
    },
    methods:{
      addClass:function(index){
        this.current=index;
      },
      // buildQuiz() {
      //   // we'll need a place to store the HTML output
      //   const output = [];
      //
      //   // for each question...
      //   this.myQuestions.forEach((currentQuestion, questionNumber) => {
      //     // we'll want to store the list of answer choices
      //     const answers = [];
      //
      //     // and for each available answer...
      //     for (let letter in currentQuestion.answers) {
      //       // ...add an HTML radio button
      //       answers.push(
      //         `<label style="display: block;margin-bottom: 10px;">
      //                <input type="radio" name="question${questionNumber}" value="${letter}">
      //                 ${letter} :
      //                 ${currentQuestion.answers[letter]}
      //              </label>`
      //       );
      //     }
      //
      //     // add this question and its answers to the output
      //     output.push(
      //       `<div class="slide" style="display: none">
      //              <div class="question" style="font-size: 30px;margin-bottom: 10px;"> ${currentQuestion.question} </div>
      //              <div class="answers" style="margin-bottom: 20px;text-align: left;display: inline-block;"> ${answers.join("")} </div>
      //            </div>`
      //     );
      //   });
      //
      //   // finally combine our output list into one string of HTML and put it on the page
      //   document.getElementById("quiz").innerHTML = output.join("");
      // },
      // //点击切换后的隐藏和显示
      // showSlide(n) {
      //   const slides = document.querySelectorAll(".slide");
      //   const previousButton = document.getElementById("previous");
      //   const nextButton = document.getElementById("next");
      //   const submitButton = document.getElementById("submit");
      //   this.current=n;
      //   slides[this.currentSlide].classList.remove("active-slide");
      //   slides[n].classList.add("active-slide");
      //   this.currentSlide = n;
      //
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
      // showNextSlide() {
      //   alert(1);
      //   this.showSlide(this.currentSlide + 1);
      // },
      // //下一题
      // showPreviousSlide() {
      //   this.showSlide(this.currentSlide - 1);
      // },

    },
    beforeCreate () {

      document.querySelector('body').setAttribute('style', 'background-color:#f8f9fb!important')

    },

    beforeDestroy () {

      document.querySelector('body').removeAttribute('style')

    }
  }
</script>

<style scoped>
  .active{
    color: red;
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
    background: #f8f9fb;
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
  .slide{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.5s;
  }
  .active_slide{
    display:block;
    /*z-index: 99!important;*/
    background-color: red;
  }
  .quiz-container{
    position: relative;
    height: 200px;
    margin-top: 40px;
  }
</style>
