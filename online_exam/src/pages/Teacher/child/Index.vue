<template>
  <div  class="exam_main">
    <div  class="home_page">
      <div  class="home_page_content">
        <div class="home_page_top title">
          总览
        </div>

        <div style="margin-top: 50px;">
          <table border="0" cellspacing="0" cellpadding="0">
            <tr data-v-10dc747d="">
              <td style="width: 240px; height: 300px;">
                <div style="border: 1px solid gainsboro; width: 240px;">
                  <div class="sub_title">成员入口</div>
                  <div class="jqrcode-box">
                    <div class="jqrcode">
                      <div id="mycanvas">
                        <canvas height="220" width="220"></canvas>
                      </div>
                    </div>
                  </div>
                  <div class="padding text-center">
                    <div class="el-input el-input--medium" style="display: none;"><!---->
                      <input type="text" autocomplete="off" id="input" class="el-input__inner">

                    </div>
                    <button type="button" class="el-button el-button--default el-button--small">
                      <span>考试入口</span>
                    </button>
                  </div>
                </div>
              </td>
              <td  style="height: 300px; width: 400px;">
                <div class="quick_access" style="border: 1px solid gainsboro; height: 100%; margin: 0px 10px; width: 400px;">
                  <div  class="sub_title">快速入口</div>
                  <div  style="margin-top: 30px;">
                    <div  class="el-row">
                      <div  class="el-col el-col-8">
                        <div  class="create_button">
                          <div  class="overview_bottom">
                            <i  class="icon_size"></i>
                          </div>
                          <div class="overview_bottom">创建试卷</div>
                        </div>
                      </div>
                      <div class="el-col el-col-8">
                        <div class="create_button">
                          <div class="overview_bottom">
                            <i class="icon_size iconfont icon-plus-itembank"></i>
                          </div>
                          <div class="overview_bottom">创建题库</div>
                        </div>
                      </div>
                      <div class="el-col el-col-8">
                        <div class="create_button">
                          <div class="overview_bottom">
                            <i class="icon_size iconfont icon-kejianguanli"></i>
                          </div>
                          <div class="overview_bottom">学生试卷</div>
                        </div>
                      </div>
                    </div>
                    <div class="el-row">
                      <div class="el-col el-col-8">
                        <div class="create_button">
                          <div class="overview_bottom">
                            <i class="icon_size iconfont icon-icon"></i>
                          </div>
                          <div class="overview_bottom">成绩分析</div>
                        </div>
                      </div>
                      <div class="el-col el-col-8">
                        <div class="create_button">
                          <div class="overview_bottom">
                            <i class="icon_size iconfont icon-yuangongguanli"></i>
                          </div>
                          <div class="overview_bottom">阅卷管理</div>
                        </div>
                      </div>
                      <div class="el-col el-col-8">
                        <div class="create_button">
                          <div class="overview_bottom">
                            <i class="icon_size iconfont icon-lianxi"></i>
                          </div>
                          <div class="overview_bottom">修改信息</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td style="height: 300px; width: 100%;">
                <div class="message" style="border: 1px solid gainsboro; height: 100%; width: 100%;">
                  <div class="sub_title">系统消息
                    <span class="more">更多</span>
                  </div>
                  <div data-v-10dc747d=""><div class="message_list">
                    <div class="message_list_left">v5.2.0版本更新内容</div>
                    <div class="message_list_right">03-31 17:16</div>
                  </div>
                    <div class="message_list">
                      <div class="message_list_left">v5.1.0版本更新内容</div>
                      <div class="message_list_right">01-22 21:45</div>
                    </div>
                    <div class="message_list">
                      <div class="message_list_left">v5.0.0版本更新内容</div>
                      <div class="message_list_right">12-19 16:11</div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div class="clear_both"></div>
        <!--<div class="analysis" style="margin-top: 10px;">-->
          <!--<div class="home_page_top title">考试统计</div>-->
          <!--<div data-v-10dc747d="">-->
            <!--<div class="el-row">-->
              <!--<div class="score_analysis el-col el-col-4">-->
                <!--<div class="list_summary_paper">-->
                  <!--<div class="score_analysis_title">总考试人次</div>-->
                  <!--<div class="score_analysis_number score_analysis_margin_bottom">0</div>-->
                  <!--<div class="score_analysis_title">本月考试人次</div>-->
                  <!--<div class="score_analysis_margin_bottom">-->
                    <!--<div class="score_analysis_number">0</div>-->
                    <!--<div class="score_analysis_info">-->
                      <!--<span data-v-10dc747d="">0.00%</span>-->
                      <!--<span class="grayCol">环比上月</span>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="score_analysis_title">本周考试人次</div>-->
                  <!--<div data-v-10dc747d="">-->
                    <!--<div class="score_analysis_number">0</div>-->
                    <!--<div class="score_analysis_info">-->
                      <!--<span data-v-10dc747d="">0.00%</span>-->
                      <!--<span class="grayCol">环比上周</span>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="score_analysis el-col el-col-20" style="border-left: 1px solid gainsboro;">-->
                <!--<div class="list_summary_answer">-->
                  <!--<div class="text-right">-->
                    <!--<form class="el-form">-->
                      <!--<div class="el-date-editor radius-right input-width-medium el-input el-input&#45;&#45;medium el-input&#45;&#45;prefix el-input&#45;&#45;suffix el-date-editor&#45;&#45;date">-->
                        <!--<input type="text" autocomplete="off" name="" placeholder="开始时间" class="el-input__inner">-->
                        <!--<span class="el-input__prefix">-->
                                  <!--<i class="el-input__icon el-icon-date"></i>-->
                                <!--</span>-->
                        <!--<span class="el-input__suffix">-->
                                  <!--<span class="el-input__suffix-inner">-->
                                    <!--<i class="el-input__icon"></i>-->
                                  <!--</span>-->
                                <!--</span>-->
                      <!--</div>-->
                      <!--<div class="range-separator border-radius el-input el-input&#45;&#45;medium">-->
                        <!--<input type="text" readonly="readonly" autocomplete="off" class="el-input__inner">-->
                      <!--</div>-->
                      <!--<div class="el-date-editor radius-left margin-left-narrow input-width-medium el-input el-input&#45;&#45;medium el-input&#45;&#45;prefix el-input&#45;&#45;suffix el-date-editor&#45;&#45;date">-->
                        <!--<input type="text" autocomplete="off" name="" placeholder="结束时间" class="el-input__inner">-->
                        <!--<span class="el-input__prefix">-->
                                  <!--<i class="el-input__icon el-icon-date"></i>&lt;!&ndash;&ndash;&gt;-->
                                <!--</span>-->
                        <!--<span class="el-input__suffix">-->
                                  <!--<span class="el-input__suffix-inner">-->
                                    <!--<i class="el-input__icon"></i>&lt;!&ndash;&ndash;&gt;-->
                                  <!--</span>&lt;!&ndash;&ndash;&gt;-->
                                <!--</span>&lt;!&ndash;&ndash;&gt;-->
                      <!--</div>-->
                      <!--<button type="button" class="el-button el-button&#45;&#45;primary el-button&#45;&#45;medium">&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
                        <!--<span>查询</span>-->
                      <!--</button>-->
                    <!--</form>-->
                  <!--</div>-->
                  <!--<div class="clear-both"></div>-->
                  <!--<div class="score_analysis">-->
                    <!--<div class="ve-chart" style="width: auto; height: 400px; position: relative;">-->
                      <!--<div class="" _echarts_instance_="ec_1555553572113" style="width: auto; height: 400px; position: relative; -webkit-tap-highlight-color: transparent; user-select: none;">-->
                        <!--<div style="position: relative; overflow: hidden; width: 759px; height: 400px; padding: 0px; margin: 0px; border-width: 0px;">-->
                          <!--<canvas data-zr-dom-id="zr_0" width="948" height="500" style="position: absolute; left: 0px; top: 0px; width: 759px; height: 400px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>-->
                        <!--</div>-->
                        <!--<div></div>-->
                      <!--</div>-->
                      <!--<div class="v-charts-data-empty" style="display: none;"> 暂无数据 </div>-->
                      <!--<div class="v-charts-component-loading" style="display: none;">-->
                        <!--<div class="loader">-->
                          <!--<div class="loading-spinner">-->
                            <!--<svg viewBox="25 25 50 50" class="circular">-->
                              <!--<circle cx="50" cy="50" r="20" fill="none" class="path"></circle>-->
                            <!--</svg>-->
                          <!--</div>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      </div>
    </div>
  </div>

</template>

<script>
    export default {
      name: "Index",
      created() {
        this.getParams();
      },
      data(){
        return{
          tea_name:'' ,
          sub_content:{},
          tea_num: '',
          show:false,
          rotate:false,
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
          console.log(this.$route.query.tea_name);
        },
      }
    }
</script>

<style scoped>
  .home_page_content{
    margin: 0 auto;
    padding: 20px 10px;
    width: 80%;
    min-width: 1030px;
  }
  .overview{
    border: 1px solid #dcdcdc;
    height: 170px;
  }
  .title{
    font-size: 20px;
  }
  .overview_col{
    width: 14.28%;
    float: left;
    height: 120px;
    padding: 20px 5px;
    text-align: center;
  }

  .home_page_top{
    padding: 10px;
    padding-left: 15px;
    background-color: #f3f7fd;
    border-bottom: 1px solid #ebeef5;
  }
  /*总览li*/
  .overview_top{
    font-size: 26px;
    color: #ec661a;
    line-height: 50px;
  }
  .overview_bottom {
    font-size: 16px;
    line-height: 30px;
  }
  .overview_col_one {
    width: 14.28%;
    float: left;
    height: 120px;
    padding: 20px 5px;
    text-align: center;
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
  .sub_title{
    line-height: 40px;
    font-size: 18px;
    text-align: center;
    background-color: #f3f7fd;
    border-bottom: 1px solid #dcdcdc;
  }
  .jqrcode-box{
    padding: 8px 10px;
  }
  .text-center[data-v-10dc747d] {
    text-align: center;
  }
  button--small {
    font-size: 12px;
    border-radius: 3px;
  }
  .el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  .el-col-8 {
    width: 33.33333%;
  }
  [class*=el-col-] {
    float: left;
    box-sizing: border-box;
  }
  .quick_access .create_button {
    text-align: center;
    margin: 10px;
    padding: 10px;
  }
  /*更多*/
  .more {
    float: right;
    font-size: 14px;
    display: block;
    padding-right: 10px;
    cursor: pointer;
    color: #409eff;
  }
  .message_list{
    border-bottom: 1px solid #dcdcdc;
  }
  .message_list_left{
    width: 73%;
  }
  .message_list_left, .message_list_right{
    display: inline-block;
    padding-left: 10px;
    line-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
