<template>
  <div class="container-fluid">
    <div class="strat-exam-body">
      <div class="lyt-box">
        <div class="lyt-contents">
          <div class="center-parent">
            <div class="left-box">
              <!--头部-->
              <div class="title-box">
                <span class="exam-name">cccc</span>
                <span class="time-box">24:38</span>
              </div>
              <!--内容-->
              <div class="content-box">
                <div class="do-question-content">
                  <div class="ui-star-box"></div>
                  <div>1、填空题</div>
                  <div class="question-box">
                    <div class="question-content auto-line">
                      <p>江雪 作者：<b style="color: orange;">___第1空___</b>千山鸟飞绝，<b style="color: orange;">___第2空___</b>。孤舟蓑笠翁，<b style="color: orange;">___第3空___</b>。</p>
                    </div>
                    <div>
                      <div>
                        第1空：
                        <div class="input-width-edit mt-xs el-input el-input--medium" style="display: inline-block"><!---->
                          <input type="text" autocomplete="off" class="el-input__inner"><!----><!----><!---->
                        </div>
                      </div>
                      <div>
                        第2空：
                        <div class="input-width-edit mt-xs el-input el-input--medium" style="display: inline-block"><!---->
                          <input type="text" autocomplete="off" class="el-input__inner"><!----><!----><!---->
                        </div>
                      </div>
                      <div>
                        第3空：
                        <div class="input-width-edit mt-xs el-input el-input--medium" style="display: inline-block"><!---->
                          <input type="text" autocomplete="off" class="el-input__inner"><!----><!----><!---->
                        </div>
                      </div>
                    </div> <!---->
                  </div>
                </div>
                <div class="do-question-content">
                  <div class="ui-star-box"></div>
                  <div>1、填空题</div>
                  <div class="question-box">
                    <div class="question-content auto-line">
                      <p>静夜思 作者：<b style="color: orange;">___第1空___</b>疑是地上霜，<b style="color: orange;">___第2空___</b>。低头思故乡，<b style="color: orange;">___第3空___</b>。</p>
                    </div>
                    <div>
                      <div>
                        第1空：
                        <div class="input-width-edit mt-xs el-input el-input--medium" style="display: inline-block"><!---->
                          <input type="text" autocomplete="off" class="el-input__inner"><!----><!----><!---->
                        </div>
                      </div>
                      <div>
                        第2空：
                        <div class="input-width-edit mt-xs el-input el-input--medium" style="display: inline-block"><!---->
                          <input type="text" autocomplete="off" class="el-input__inner"><!----><!----><!---->
                        </div>
                      </div>
                      <div>
                        第3空：
                        <div class="input-width-edit mt-xs el-input el-input--medium" style="display: inline-block"><!---->
                          <input type="text" autocomplete="off" class="el-input__inner"><!----><!----><!---->
                        </div>
                      </div>
                    </div> <!---->
                  </div>
                </div>
                <div class="btn-box">
                  <button type="button" class="btn btn-default el-button el-button--success el-button--medium is-disabled" style="float: left;" disabled="disabled"><!----><!---->
                    <span>上一题</span>
                  </button>
                  <button type="button" class="btn btn-default el-button el-button--success el-button--medium"><!----><!---->
                    <span>交卷</span>
                  </button>
                  <button type="button" class="btn btn-default el-button el-button--success el-button--medium" style="float: right;"><!----><!---->
                    <span>下一题</span>
                  </button>
                </div>
              </div>
            </div>

            <div class="right-box">
              <div class="datike-box">
                <div class="exam-info-box">全部题目（0/3）</div>
                <div class="datike-info">
                  <div class="datika-item-box do-question-list">
                      <span>
                        <span class="datika-item">
                          <i class="el-icon-location ui-marked" style="display: none;"></i>
                          <span class="question-card do-question-index selected">1</span>
                        </span>
                      </span>
                    <span>
                        <span class="datika-item">
                          <i class="el-icon-location ui-marked" style="display: none;"></i>
                          <span class="question-card do-question-index">2</span>
                        </span>
                      </span>
                    <span>
                        <span class="datika-item">
                          <i class="el-icon-location ui-marked" style="display: none;"></i>
                          <span class="question-card do-question-index">3</span>
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
  export default {
    name: "ExamStu1",
    beforeCreate () {

      document.querySelector('body').setAttribute('style', 'background-color:#f8f9fb!important')

    },

    beforeDestroy () {

      document.querySelector('body').removeAttribute('style')

    }
  }
</script>

<style scoped>
  <!---->
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
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .question-content{
    padding: 10px;
    background: #f8f9fb;
    margin-bottom: 20px;
  }
  .mt-xs{
    margin-top: 10px;
  }

  .input-width-edit{
    width: 500px;
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
  /*尾部*/
  .btn-box{
    width: 100%;
    text-align: center;
    padding: 10px;
  }
  .el-button--success.is-disabled{
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
    cursor: not-allowed;
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
  .el-button, .el-checkbox {
    -ms-user-select: none;
    font-weight: 500;
  }
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
</style>
