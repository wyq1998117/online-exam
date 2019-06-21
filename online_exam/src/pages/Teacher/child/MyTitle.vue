<template>
  <div class="exam_main">
    <div class="exam_main">
      <div class="exam">
        <div class="exam_main_top">
          <div  class="exam_main_top_left">
            <button  type="button" class="el-button el-button--success el-button--medium" data-toggle="modal" data-target="#myModal"><!---->
              <i class=" fa fa-plus"></i>
              <span>创建题库</span>
            </button>
            <button  type="button" class="el-button el-button--primary el-button--medium" data-toggle="modal" data-target="#mySort"><!---->
              <i class="fa fa-pencil"></i>
              <span>维护分类</span>
            </button>
          </div>
          <!--<div class="exam_main_top_right query-tools">-->
            <!--<form  class="el-form">-->
              <!--<div  class="el-input el-input&#45;&#45;medium" style="display: none;">&lt;!&ndash;&ndash;&gt;-->
                <!--<input type="text" autocomplete="off" class="el-input__inner">&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
              <!--</div>-->
              <!--<div class="el-dropdown">-->
                <!--<div class="el-input el-input&#45;&#45;medium el-input&#45;&#45;suffix el-dropdown-selfdefine" aria-haspopup="list" aria-controls="dropdown-menu-3552" role="button" tabindex="0" style="border-top-right-radius: 0px; border-bottom-right-radius: 0px;">&lt;!&ndash;&ndash;&gt;-->
                  <!--<input type="text" readonly="readonly" autocomplete="off" placeholder="选择分类" class="el-input__inner">&lt;!&ndash;&ndash;&gt;-->
                  <!--<span class="el-input__suffix">-->
                      <!--<span class="el-input__suffix-inner">-->
                        <!--&lt;!&ndash;<i class="fa fa-sort-desc"></i>&ndash;&gt;-->
                      <!--</span>&lt;!&ndash;&ndash;&gt;-->
                    <!--</span>&lt;!&ndash;&ndash;&gt;-->
                <!--</div>-->
                <!--<ul class="el-dropdown-menu el-popper tree-dropdown-menu el-dropdown-menu&#45;&#45;medium" id="dropdown-menu-3552" style="display: none;">-->
                  <!--<div class="tree-data">&lt;!&ndash;&ndash;&gt;-->
                    <!--&lt;!&ndash;<div role="tree" class="el-tree el-tree&#45;&#45;highlight-current">&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="el-tree__empty-block">&ndash;&gt;-->
                    <!--&lt;!&ndash;<span class="el-tree__empty-text">暂无数据</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="el-tree__drop-indicator" style="display: none;"></div>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                  <!--</div>-->
                <!--</ul>-->
              <!--</div>-->
              <!--<div class="query_name el-input el-input&#45;&#45;medium el-input-group el-input-group&#45;&#45;append" style="width: 240px; border-top-left-radius: 0px; border-bottom-left-radius: 0px; margin-left: -5px;">&lt;!&ndash;&ndash;&gt;-->
              <!--<input type="text" autocomplete="off" placeholder="搜索试卷" class="el-input__inner">&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
              <!--<div class="el-input-group__append">-->
                <!--<button type="button" class="el-button btn-right-border el-button&#45;&#45;default el-button&#45;&#45;medium">&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
                  <!--<span>搜索</span>-->
                <!--</button>-->
                <!--<button type="button" class="el-button el-button&#45;&#45;default el-button&#45;&#45;medium">&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
                  <!--<span>重置</span>-->
                <!--</button>-->
              <!--</div>-->
            <!--</div>-->
            <!--</form>-->
          <!--</div>-->
          <div  class="clear_both"></div>
        </div>
        <div >
          <div  class="el-table el-table--fit el-table--scrollable-x el-table--medium" style="width: 100%;">
            <div class="hidden-columns">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="el-table__header-wrapper">
              <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 1390px;">
                <colgroup>
                  <col name="el-table_4_column_34" width="40">
                  <col name="el-table_4_column_35" width="30">
                  <col name="el-table_4_column_36" width="230">
                  <col name="el-table_4_column_37" width="230">
                  <col name="el-table_4_column_38" width="205">
                  <col name="el-table_4_column_39" width="200">
                  <col name="el-table_4_column_40" width="205">
                  <col name="el-table_4_column_41" width="220">
                  <col name="el-table_4_column_42" width="160">
                  <col name="el-table_4_column_43" width="100">
                  <col name="el-table_4_column_44" width="230">
                  <col name="gutter" width="0">
                </colgroup>
                <thead class="has-gutter">
                <tr class="has-gutter-tr">
                  <th colspan="1" rowspan="1" class="el-table_4_column_34  is-center   is-leaf">
                    <div class="cell">#</div>
                  </th>
                  <th colspan="1" rowspan="1" class="el-table_4_column_35   el-table-column--selection  is-leaf">
                    <div class="cell">
                      <!--<label role="checkbox" aria-disabled="true" class="el-checkbox is-disabled">-->
                          <!--<span aria-checked="mixed" class="el-checkbox__input is-disabled">-->
                            <!--<span class="el-checkbox__inner" style="margin-top: 12px;"></span>-->
                            <!--&lt;!&ndash;<input type="checkbox" aria-hidden="true" disabled="disabled" class="el-checkbox__original" value="">&ndash;&gt;-->
                          <!--</span>&lt;!&ndash;&ndash;&gt;-->
                      <!--</label>-->
                    </div>
                  </th>
                  <th colspan="1" rowspan="1" class="el-table_4_column_36     is-leaf">
                    <div class="cell">题库名称</div>
                  </th>
                  <th colspan="1" rowspan="1" class="el-table_4_column_37     is-leaf">
                    <div class="cell">描述</div>
                  </th>
                  <th colspan="1" rowspan="1" class="el-table_4_column_38     is-leaf">
                    <div class="cell">分类</div>
                  </th>
                  <!--<th colspan="1" rowspan="1" class="el-table_4_column_39     is-leaf">-->
                    <!--<div class="cell">题目数量</div>-->
                  <!--</th>-->
                  <th colspan="1" rowspan="1" class="el-table_4_column_42     is-leaf">
                    <div class="cell">创建时间</div>
                  </th>
                  <th colspan="1" rowspan="1" class="el-table_4_column_43     is-leaf">
                  <div class="cell">创建人</div>
                </th>
                  <th colspan="1" rowspan="1" class="el-table_4_column_44      is-leaf">
                    <div class="cell">操作</div>
                  </th>
                  <th class="gutter" style="width: 0px; display: none;"></th>
                </tr>
                </thead>
              </table>
            </div>
            <div class="el-table__body-wrapper is-scrolling-left">
                 <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 1170px;">
                   <colgroup>
                     <col name="el-table_6_column_50" width="40">
                     <col name="el-table_6_column_51" width="30">
                     <col name="el-table_6_column_52" width="230">
                     <col name="el-table_6_column_53" width="230">
                     <col name="el-table_6_column_54" width="205">
                     <col name="el-table_6_column_55" width="200">
                     <col name="el-table_6_column_56" width="200">
                     <col name="el-table_6_column_57" width="200">
                   </colgroup>
                   <tbody v-if="get_item.length > 0">
                    <tr class="el-table__row" v-for="(casual,index) in get_item" :key="index" @click="itemDel(casual.item_name)">
                      <td rowspan="1" colspan="1" class="el-table_6_column_50 is-center " @click.stop>
                        <div class="cell">
                          <div>{{ (index + 1)}}</div>
                        </div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_6_column_51  el-table-column--selection" @click.stop>
                        <div class="cell">
                          <!--<label role="checkbox" class="el-checkbox">-->
                            <!--<span aria-checked="mixed" class="el-checkbox__input">-->
                              <!--<span class="el-checkbox__inner" ></span>-->
                              <!--&lt;!&ndash;<input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="">&ndash;&gt;-->
                            <!--</span>&lt;!&ndash;&ndash;&gt;-->
                          <!--</label>-->
                        </div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_6_column_52  " @click.stop>
                        <div class="cell">
                          <a  href="#" id="del_name" >{{casual.item_name}}</a>
                        </div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_6_column_53  " @click.stop>
                        <div class="cell">{{casual.item_des}}</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_6_column_54  " @click.stop>
                        <div class="cell">{{casual.item_type}}</div>
                      </td>
                      <!--<td rowspan="1" colspan="1" class="el-table_6_column_55 is-center " @click.stop>-->
                        <!--<div class="cell">0</div>-->
                      <!--</td>-->
                      <td rowspan="1" colspan="1" class="el-table_6_column_56  " @click.stop>
                        <div class="cell">{{casual.item_date}}</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_6_column_57  " @click.stop>
                        <div class="cell" >{{casual.build}}</div>
                      </td>
                      <td rowspan="1" colspan="1" class="el-table_6_column_58   ">
                        <div class="cell">
                          <div class="el-button-group" >
                            <button  type="button" class="el-button el-button--primary el-button--mini" @click.stop  @click="switchTo(casual.item_name,'/teacher/AddTitle')">
                              <span>维护题目</span>
                            </button>
                            <button  type="button" class="el-button el-button--danger el-button--mini el-button-del" @click="itemDel"><!----><!---->
                              <span>删除</span>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr><!---->
                   </tbody>
                   <div class="el-table__empty-block" style="width: 1390px;" v-else><span class="el-table__empty-text">暂无数据</span></div>
                 </table><!----><!---->
            </div>

            <div class="el-table__column-resize-proxy" style="display: none;"></div>
            <div class="el-loading-mask" style="display: none;">
              <div class="el-loading-spinner">
                <svg viewBox="25 25 50 50" class="circular">
                  <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
                </svg><!---->
              </div>
            </div>
          </div>

        </div>
        <!-- 模态框（Modal） -->
        <div class="modal fade" id="myModal">
          <div role="dialog" aria-modal="true" aria-label="创建题库" class="el-dialog" style="margin-top: 15vh; width: 800px;">
            <div class="el-dialog__header">
              <button type="button" class="close" data-dismiss="modal"
                      aria-hidden="true">×
              </button>
              <span class="el-dialog__title">创建题库</span>
            </div>
            <div class="el-dialog__body">
              <form class="el-form">
                <div  class="el-form-item el-form-item--medium">
                  <label for="classifyPath" class="el-form-item__label" style="width: 120px;">分类</label>
                  <div class="el-form-item__content" style="margin-left: 120px;">
                    <div  class="el-input el-input--medium" style="display: none;"><!---->
                      <input type="text" autocomplete="off" class="el-input__inner"><!----><!----><!---->
                    </div>
                    <div  class="el-dropdown">
                      <div  class="el-input el-input--medium el-input--suffix el-dropdown-selfdefine"role="button" tabindex="0" data-toggle="dropdown"><!---->
                        <input type="text"id="item_type" placeholder="选择分类" class="el-input__inner" v-model="searchpro"><!---->
                        <span class="el-input__suffix">
                          <span class="el-input__suffix-inner fa fa-sort-desc"></span><!---->
                        </span><!---->
                      </div>

                      <ul class="dropdown-menu input_list" style="margin:10px 0  0 30px;" v-if="get_sort.length > 0">
                        <div class="el-tree-node__content" style="padding-left: 0px;">
                          <span class="el-tree-node__expand-icon el-icon-caret-right expanded fa fa-caret-down" style="margin: 10px;"></span>
                          <span style="color: gainsboro;">我的题库分类</span>
                        </div>
                        <li v-for="(pro,index) in get_sort" :key="index" @click="select(pro)">
                          <a href="#">{{pro.list_name}}</a>
                        </li>
                      </ul>
                    </div>
                    <!--<div  class="el-dropdown">-->
                      <!--<div  class="el-input el-input&#45;&#45;medium el-input&#45;&#45;suffix el-dropdown-selfdefine" aria-haspopup="list" aria-controls="dropdown-menu-4042" role="button" tabindex="0">&lt;!&ndash;&ndash;&gt;-->
                        <!--<input type="text" readonly="readonly" autocomplete="off" placeholder="选择分类" class="el-input__inner">&lt;!&ndash;&ndash;&gt;-->
                        <!--<span class="el-input__suffix">-->
                          <!--<span class="el-input__suffix-inner fa fa-sort-desc">-->
                          <!--</span>&lt;!&ndash;&ndash;&gt;-->
                        <!--</span>&lt;!&ndash;&ndash;&gt;-->
                      <!--</div>-->
                    <!--</div>&lt;!&ndash;&ndash;&gt;-->
                  </div>
                </div>
                <div class="el-form-item is-required el-form-item--medium">
                  <label for="name" class="el-form-item__label" style="width: 120px;">题库名称</label>
                  <div class="el-form-item__content" style="margin-left: 120px;">
                    <div  class="el-input el-input--medium">
                      <!--名称-->
                      <input type="text" autocomplete="off" class="el-input__inner" id="item_name"><!----><!----><!---->
                    </div><!---->
                  </div>
                </div>
                <div class="el-form-item el-form-item--medium">
                  <label for="intro" class="el-form-item__label" style="width: 120px;">题库描述</label>
                  <div class="el-form-item__content" style="margin-left: 120px;">
                    <div  class="el-textarea el-input--medium">
                      <!--描述-->
                      <textarea autocomplete="off" id="item_des" class="el-textarea__inner" style="min-height: 33px;"></textarea>
                    </div><!---->
                  </div>
                </div>
              </form>
            </div>
            <div class="el-dialog__footer">
              <div  class="dialog-footer">
                <button  data-dismiss="modal" type="button" class="el-button el-button--default el-button--medium"><!----><!---->
                  <span>取 消</span>
                </button>
                <button type="button" class="el-button el-button--primary el-button--medium el-button-sub" @click="itemSub"><!----><!---->
                  <span >提交</span>
                </button>
              </div>
            </div>
          </div>

        </div><!-- /.modal -->
        <!-- 分类模态框（Modal） -->
        <div class="modal fade" id="mySort">
          <div role="dialog" aria-modal="true" aria-label="创建分类" class="el-dialog" style="margin-top: 15vh; width: 800px;">
            <div class="el-dialog__header">
              <button type="button" class="close" data-dismiss="modal"
                      aria-hidden="true">×
              </button>
              <span class="el-dialog__title">维护分类</span>
            </div>
            <div class="el-dialog__body">
              <div class="expand">
                <!--<button type="button" class="el-button el-button&#45;&#45;primary el-button&#45;&#45;medium">&lt;!&ndash;&ndash;&gt;-->
                  <!--<i class=" fa fa-plus"></i>-->
                  <!--<span>创建分类</span>-->
                <!--</button>-->

                <div id="dialogue_box" class="tree-data"><!---->
                  <div role="tree" class="el-tree expand-tree el-tree--highlight-current">
                    <div role="treeitem" tabindex="0" aria-disabled="" draggable="false" class="el-tree-node is-expanded  is-current" aria-expanded="true">
                      <div class="el-tree-node__content" style="padding-left: 0px;">
                        <span class="el-tree-node__expand-icon el-icon-caret-right expanded"></span><!----><!---->
                        <span class="tree-expand">
                          <span class="tree-label" style="display: none;">
                            <div class="edit el-input el-input--mini"><!---->
                              <input type="text" autocomplete="off" autofocus="autofocus" class="el-input__inner"><!----><!----><!---->
                            </div>
                          </span>
                          <span class="tree-label">
                            <!--<span class="el-tree-node__expand-icon el-icon-caret-right expanded fa fa-caret-down"></span>-->
                            <span class="gainsboroCol">我的试卷分类</span>
                          </span> <!---->
                        </span>
                      </div>
                      <div role="group" class="el-tree-node__children" style="margin-top: 5px;" aria-expanded="true">
                        <div role="treeitem" tabindex="-1" id="el-tree-node-main" class="el-tree-node is-expanded is-focusable" v-if="get_sort.length > 0">
                          <div class="el-tree-node__content" style="padding-left: 18px;" v-for="(casual,index) in get_sort" :key="index">
                            <span class="el-tree-node__expand-icon el-icon-caret-right is-leaf"></span><!----><!---->
                            <span class="tree-expand">
                              <span class="tree-label" style="display: none;">
                                <div class="edit el-input el-input--mini"><!---->
                                  <input type="text" autocomplete="off" autofocus="autofocus" class="el-input__inner"><!----><!----><!---->
                                </div>
                              </span>
                              <span class="tree-label">
                                <span class="tree_ins" style="margin-left: 18px;">{{casual.list_name}}</span>
                              </span>
                            </span>
                          </div>
                          <div role="group" aria-expanded="true" class="el-tree-node__children"></div>
                        </div>
                      </div>
                    </div><!---->
                    <div class="el-tree__drop-indicator" style="display: none;"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="el-dialog__footer">
              <div  class="dialog-footer">
                <button  data-dismiss="modal" type="button" class="el-button el-button--default el-button--medium"><!----><!---->
                  <span>取 消</span>
                </button>
                <button type="button" class="el-button el-button--primary el-button--medium el-button-sub" ><!----><!---->
                  <span >提交</span>
                </button>
              </div>
            </div>
          </div>

        </div><!-- /.modal -->
      </div>
    </div>
  </div>
</template>

<script>
  import {itemBank} from "../../../api/index";
  import {mapState} from 'vuex'
  import {delItem} from "../../../api/index";

  export default {
    //然后在需要当前页面刷新的页面中注入App.vue组件提供（provide）的 reload 依赖，然后直接用this.reload来调用
    inject:['reload'],
    name: "MyTitle",
    data(){
      return{
        tea_name:'' ,
        tea_num: '',
        user_name:'',
        user_pwd:'',
        real_name:'',
        item_name:'',
        item_des:'',
        item_type:'',
        else:{},
        userInfo:{},//用户信息
        item_date:'',
        choice_else:'',
        searchpro:'',
      }
    },


    mounted(){
      this.getParams();
      this.$store.dispatch('reqItem');
      this.$store.dispatch('reqSort');
    },
    computed: {
      ...mapState(['get_item']),
      ...mapState(['get_sort']),
    },
    methods:{
      switchTo(casual,path){
        // this.$router.replace(path);
        this.$router.push({ path, query:{id:casual,tea_name:this.$route.query.tea_name} });
      },
      getParams() {
        // 取到路由带过来的参数
        this.tea_name = this.$route.query.tea_name;
        this.tea_num = this.$route.query.tea_num;
        this.user_name = this.$route.query. user_name;
        this.user_pwd = this.$route.query. user_pwd;
        console.log(this.tea_name);
      },
      async itemSub(){
        this.item_name = $('#item_name').val();
        this.item_des = $('#item_des').val();
        this.item_type = $('#item_type').val();
        this.choice_else = this.item_name;
        let build = this.$route.query.tea_name;
        //创建时间
        let date = new Date();
        let seperator1 = "-";
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        let strHours = date.getHours();
        let strMinutes = date.getMinutes();
        let strSeconds = date.getSeconds();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }else if(strHours >= 0 && strHours <= 9){
          strHours = "0" + strHours;
        }else if(strMinutes >= 0 && strMinutes <= 9){
          strMinutes = "0" + strMinutes;
        }else if(strSeconds >= 0 && strSeconds <= 9){
          strSeconds = "0" + strSeconds;
        }
        this.item_date = year + seperator1 + month + seperator1 + strDate + ' ' + strHours + ':' + strMinutes  + ':' + strSeconds;

        const result = await itemBank(this.item_name,this.item_des,this.item_type,this.item_date,this.choice_else,build);
        console.log(result);
        this.reload();

        if(!this.item_name){
          swal("题目名称不能为空!");
          return;
        }
        if(result.success_code === 200){
          this.userInfo = result.message;
          swal("添加成功");
          $('#myModal').modal("hide");

        }else if(error_code === 404){
          swal('题库名已存在');
        }


      },

      itemDel(item_name){

        swal({
          title: "FBI WARNING",
          text: "确定要删除该题库?",
          icon: "warning",
          dangerMode: true
        }).then(willDelete => {
          if (willDelete){
            this.item_name = item_name;
            const result =  delItem(this.item_name);
            console.log(result);
            this.reload();
          }
        });

       },
      //选择分类
      select(pro){
        this.searchpro = pro.list_name;
      },
      //动态生成组件
      insert() {
        const component = Vue.component("button-counter");
        const instance = new component();
        instance.$mount("#appId");
      }


    }
  }
</script>

<style scoped>
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
  .exam_main_top{
    padding: 10px;
    padding-left: 15px;
    border-bottom: 1px solid #ebeef5;
    height: 115px;
  }
  .exam_main_top_left{
    float: left;
    margin: 5px;
  }
  .el-button--medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  .el-button--success {
    color: #fff!important;
    background-color: #67c23a !important;
    border-color: #67c23a!important;
  }
  .el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
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
  .el-button+.el-button {
    margin-left: 10px;
  }
  .el-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
  /*选择分类*/
  .exam_main_top_right{
    float: right;
    margin: 5px;
    /*width: 700px;*/
  }
  form {
    display: block;
    margin-top: 0em;
  }
  .el-input--medium {
    font-size: 14px;
  }
  .el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
  }
  .el-dropdown {
    display: inline-block;
    position: relative;
    color: #606266;
    font-size: 14px;
  }
  .query-tools .el-dropdown .el-input__inner {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .el-input--medium .el-input__inner {
    height: 36px;
    line-height: 36px;
  }
  .el-input__inner {
    padding: 0 0 0 5px;
  }
  .el-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }

  .exam_main_top_right .query_name .el-input__inner {
    width: 240px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .el-input-group--append .el-input__inner, .el-input-group__prepend {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .el-input-group>.el-input__inner {
    vertical-align: middle;
    display: table-cell;
  }
  .el-input__inner:hover {
    border-color: #c0c4cc;
  }

  .el-input-group__append {
    border-left: 0;
    display: inline-block;
  }
  .el-input-group__append, .el-input-group__prepend {
    background-color: #f5f7fa;
    color: #909399;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 0 20px;
    width: 1px;
    white-space: nowrap;
  }
  .btn-right-border{
    border-right: 1px solid #dcdcdc!important;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .el-button--medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  /*试卷名称*/
  .el-table__header-wrapper {
    overflow: hidden;
  }
  .el-table__header-wrapper {
    width: 100%;
  }


  .el-table__body, .el-table__footer, .el-table__header {
    table-layout: fixed;
    border-collapse: separate;
  }
  .el-table thead {
    color: #909399;
    font-weight: 500;
  }
  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  .el-table th, .el-table tr {
    background-color: #fff;
  }
  .el-table td, .el-table th.is-leaf {
    border-bottom: 1px solid #ebeef5;
  }
  .el-table th.is-center {
    text-align: center;
  }
  .el-table td, .el-table th {
    padding: 12px 0;
    min-width: 0;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    text-align: left;
  }
  .el-table .cell {
    box-sizing: border-box;
    white-space: normal;
    word-break: break-all;
    line-height: 23px;
    padding-right: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .el-table td div {
    box-sizing: border-box;
  }

  .el-button-group {
    display: inline-block;
    vertical-align: middle;
    width: 240px;
  }
  .el-button+.el-button[data-v-1375f498] {
    margin-left: 10px;
  }
  .el-button--primary[data-v-1375f498] {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }

  .el-button--mini {
    padding: 7px 15px;
    font-size: 12px;
    width: 80px;
  }
  .el-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  .el-button-group>.el-button:not(:last-child) {
    margin-right: -1px;
  }
  .el-button-group>.el-button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-right: 1px;
  }

  .el-button-group>.el-button {
    float: left;
    position: relative;
  }
  .el-button-group>.el-button+.el-button {
    margin-left: 0;
  }
  .el-checkbox__input.is-disabled .el-checkbox__inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
  }
  .el-button-group .el-button--danger:last-child {
    border-left-color: hsla(0,0%,100%,.5);
  }

  .el-button-group>.el-button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .el-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }

  .el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
  }
  .has-gutter-tr{
    height: 42px;
  }

  .el-table__empty-block {
    min-height: 60px;
    text-align: center;
    width: 100%;
    height: 100%;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: #909399;
    font-weight: 500;
  }
  /*模态框*/
  .el-dialog{
    position: relative;
    margin: 0 auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 50%;
    min-width: 800px;
    max-width: 1200px;
  }
  .el-dialog__header {
    border-bottom: 1px solid #dcdcdc;
    padding: 20px 20px 10px;
  }
  .el-dialog__title {
    line-height: 24px;
    font-size: 18px;
    color: #303133;
  }
  .el-dialog__body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
  }
  form {
    display: block;
    margin-top: 0em;
  }
  .el-form-item {
    margin-bottom: 22px;
  }
  .el-form-item--medium .el-form-item__label {
    line-height: 36px;
  }
  .el-form-item__label {
    text-align: right;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .el-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
  }
  .el-textarea {
    display: inline-block;
    width: 100%;
    vertical-align: bottom;
    font-size: 14px;
  }
  .el-textarea__inner {
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    color: #606266;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  }
  .el-dialog__footer {
    border-top: 1px solid #dcdcdc;
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
  }
  .el-input__suffix {
    right: 5px;
    transition: all .3s;
    position: absolute;
    top: -3px;
    -webkit-transition: all .3s;
    height: 100%;
    color: #c0c4cc;
    text-align: center;
  }
  /*新增题库*/
  .el-table--medium td, .el-table--medium th {
    padding: 10px 0;
  }
  .el-table .cell{
    box-sizing: border-box;
    white-space: normal;
    word-break: break-all;
    line-height: 23px;
    padding-left: 13px;
    padding-right: 10px;
  }
  .el-checkbox__input {
    cursor: pointer;
    outline: 0;
    line-height: 1;
    vertical-align: middle;
    display: inline-block;
    position: relative;
    white-space: nowrap;
  }

</style>
