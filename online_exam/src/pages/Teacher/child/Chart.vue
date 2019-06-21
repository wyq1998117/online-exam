<template>
  <div class="exam_main">
    <div class="exam_main" style="margin-left: 130px;margin-top: 50px;">
      <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart"></div>
    </div>

  </div>

</template>

<script>
  import echarts from 'echarts'
  import axios from 'axios'
    export default {
      name: "Chart",
      props: {
        className: {
          type: String,
          default: 'yourClassName'
        },
        id: {
          type: String,
          default: 'yourID'
        },
        width: {
          type: String,
          default: '500px'
        },
        height: {
          type: String,
          default: '500px'
        }
      },
      data() {
        return {
          chart: null
        }
      },
      mounted() {
        this.initChart();
      },
      beforeDestroy() {
        if (!this.chart) {
          return
        }
        this.chart.dispose();
        this.chart = null;
      },
      methods: {
        initChart() {
          this.chart = echarts.init(this.$refs.myEchart);
          let _this = this;
          axios.get('http://localhost:3000/api/get_paper_content', {
            params: {
              choice_else: this.$route.query.id
            }
          })
            .then(function (stu) {
              _this.stu_data = stu.data.message;
              let chartData = stu.data.message;
              let seriesData = [];
              let xAxisData = [];
              chartData.forEach(function(item){
                let outObj = {};
                let valueKey = Object.keys(item);
                outObj.score = item[valueKey[9]];
                outObj.name = item[valueKey[2]];
                seriesData.push(outObj.score);
                xAxisData.push(outObj.name);
              });
              // 把配置和数据放这里
              _this.chart.setOption({
                color: ['#3398DB'],
                tooltip: {
                  trigger: 'axis',
                  axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                  }
                },
                grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
                },
                xAxis: [{
                  type: 'category',
                  data: xAxisData,
                  axisTick: {
                    alignWithLabel: true
                  }
                }],
                yAxis: [{
                  type: 'value'
                }],
                series: [{
                  name: '分数',
                  type: 'bar',
                  barWidth: '60%',
                  data: seriesData
                    // [10, 52, 70, 82, 90, 55, 61]
                }]
              })
            })
            .catch(function (error) {
              console.log(error);
            });

        }
      }
    }
</script>

<style scoped>

</style>
