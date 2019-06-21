<template>
  <div class="exam_main">
    <div class="exam_main">
      <div class="exam">
        <div class="exam_main_top">
          <div  class="exam_main_top_left">
            <button  type="button" class="el-button el-button--primary el-button--medium"  @click="switchTo('/teacher/MyExam')"><!---->
              <i class=" fa fa-angle-double-left"></i>
              <span>返回试卷</span>
            </button>
            <button  type="button" class="el-button el-button--success el-button--medium" id="el-add" data-toggle="modal" data-target="#modal_set">
              <i class="fa fa-plus"></i>
              <span>手动选题</span>
            </button>
            <!--<button  type="button" class="el-button el-button&#45;&#45;success el-button&#45;&#45;medium" id="el-set" data-toggle="modal" data-target="#modal_time">-->
              <!--<i class="fa fa-pencil"></i>-->
              <!--<span>考试设置</span>-->
            <!--</button>-->
          </div>

          <div class="exam_main_top_right query-tools">
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
              <!--&lt;!&ndash;<div class="query_name el-input el-input&#45;&#45;medium el-input-group el-input-group&#45;&#45;append" style="width: 240px; border-top-left-radius: 0px; border-bottom-left-radius: 0px; margin-left: -5px;">&lt;!&ndash;&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;<input type="text" autocomplete="off" placeholder="搜索试卷" class="el-input__inner">&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="el-input-group__append">&ndash;&gt;-->
                  <!--&lt;!&ndash;<button type="button" class="el-button btn-right-border el-button&#45;&#45;default el-button&#45;&#45;medium">&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&ndash;&gt;-->
                    <!--&lt;!&ndash;<span>搜索</span>&ndash;&gt;-->
                  <!--&lt;!&ndash;</button>&ndash;&gt;-->
                  <!--&lt;!&ndash;<button type="button" class="el-button el-button&#45;&#45;default el-button&#45;&#45;medium">&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&ndash;&gt;-->
                    <!--&lt;!&ndash;<span>重置</span>&ndash;&gt;-->
                  <!--&lt;!&ndash;</button>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--</form>-->
          </div>
          <div  class="clear_both"></div>
        </div>
        <div class="subject_main">
          <div class="subtitle">
            <h2>{{ this.$route.query.id}}</h2>
          </div>
        </div>

        <!--显示已选中的题目-->
        <div class="sublist"  >

          <div class="tChoice" v-if="choice_data.length > 0">
            <div class="el-card is-hover-shadow" style="width: 927px; margin: 0 auto; margin-bottom: 8px;" v-for="(casual,index) in choice_data" :key="index">
              <!-- @click="choiceDel(casual.choice_content)"-->
              <div class="el-card__body" style="padding: 10px;">
                <div>
                  <div class="subject_title_left">
                    <label role="checkbox" class="el-checkbox">
                    <span aria-checked="mixed" class="el-checkbox__input">
                      <!--<span class="el-checkbox__inner"></span>-->
                      <input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="">
                    </span>
                      <span class="el-checkbox__label">
                      <font size="4">{{ (index + 1)}}、[单选题]</font>
                    </span>
                    </label>
                  </div>
                  <div class="subject_title_right">
                    <div class="el-button-group">

                      <button type="button" class="el-button el-button--default el-button--medium" @click.stop="choiceDel(casual.choice_content)"><!---->
                        <i class="fa fa-trash"></i>
                        <span >删除</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="questionContent rich-text">
                  <p>{{casual.choice_content}}</p>
                </div> <!----> <!---->
                <div>
                  <div class="questionOptions">
                    <div>
                      <div role="radiogroup" class="el-radio-group">
                        <div>
                          <label role="radio" aria-checked="true" aria-disabled="true" tabindex="-1" class="el-radio options auto-line is-disabled is-checked">
                          <span class="el-radio__input is-disabled ">
                            <span class="el-radio__inner"></span>
                            <input type="radio" aria-hidden="true" disabled="disabled" tabindex="-1" class="el-radio__original" value="0">
                          </span>
                            <span class="el-radio__label">
                            A、<span class="rich-text">
                            <p>{{casual.choice_A}}</p>
                              </span><!---->
                          </span>
                          </label>
                        </div>
                        <div>
                          <label role="radio" aria-disabled="true" tabindex="-1" class="el-radio options auto-line is-disabled">
                          <span class="el-radio__input is-disabled">
                            <span class="el-radio__inner"></span>
                            <input type="radio" aria-hidden="true" disabled="disabled" tabindex="-1" class="el-radio__original" value="1">
                          </span>
                            <span class="el-radio__label">
                            B、<span class="rich-text">
                            <p>{{casual.choice_B}}</p>
                                </span><!---->
                          </span>
                          </label>
                        </div>
                        <div>
                          <label role="radio" aria-disabled="true" tabindex="-1" class="el-radio options auto-line is-disabled">
                          <span class="el-radio__input is-disabled">
                            <span class="el-radio__inner"></span>
                            <input type="radio" aria-hidden="true" disabled="disabled" tabindex="-1" class="el-radio__original" value="2">
                          </span>
                            <span class="el-radio__label">
                            C、<span class="rich-text"><p>{{casual.choice_C}}</p></span><!---->
                          </span>
                          </label>
                        </div>
                        <div>
                          <label role="radio" aria-disabled="true" tabindex="-1" class="el-radio options auto-line is-disabled">
                          <span class="el-radio__input is-disabled">
                            <span class="el-radio__inner"></span>
                            <input type="radio" aria-hidden="true" disabled="disabled" tabindex="-1" class="el-radio__original" value="3">
                          </span>
                            <span class="el-radio__label">
                            D、<span class="rich-text"><p>{{casual.choice_D}}</p></span><!---->
                          </span>
                          </label>
                        </div>
                      </div>
                    </div> <!----> <!----> <!---->
                  </div> <!---->
                  <div class="questionContent text-muted">
                    解析：<span class="rich-text"><p>{{casual.choice_analysis}}</p></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tFill" v-if="fill_data.length > 0">
            <div class="title-exam">
              <h2 style="margin:15px 0 15px 60px;" class="text-center">填空题</h2>
            </div>
            <div class="el-card is-hover-shadow" style="width: 927px; margin: 0 auto; margin-bottom: 8px;" v-for="(casual,index) in fill_data" :key="index" >
              <div class="el-card__body" style="padding: 10px;">
                <div>
                  <div class="subject_title_left">
                    <label role="checkbox" class="el-checkbox">
                    <span aria-checked="mixed" class="el-checkbox__input">
                      <!--<span class="el-checkbox__inner"></span>-->
                      <input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="">
                    </span>
                      <span class="el-checkbox__label">
                      <font size="4">{{ (index + 1)}}、[填空题]</font>
                    </span>
                    </label>
                  </div>
                  <div class="subject_title_right">
                    <div class="el-button-group">

                      <button type="button" class="el-button el-button--default el-button--medium" @click.stop="fillDel(casual.fill_content)"><!---->
                        <i class="fa fa-trash"></i>
                        <span >删除</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <div class="questionContent rich-text"><p>{{casual.fill_content}}</p></div>
                  <div class="questionContent text-muted">
                    答案：<span >
                              <span >{{casual.fill_one}}、</span>
                            </span>
                    <span >
                        <span >{{casual.fill_two}}、</span>
                      </span>
                    <span >
                        <span >{{casual.fill_three}}</span>
                      </span>
                  </div>
                  <div class="questionContent text-muted">
                    解析：<span class="rich-text"><p>{{casual.fill_analysis}}</p></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tAsk" v-if="ask_data.length > 0">
            <div class="title-exam">
              <h2 style="margin:15px 0 15px 60px;" class="text-center">问答题</h2>
            </div>
            <div class="el-card is-hover-shadow" style="width: 927px; margin: 0 auto; margin-bottom: 8px;" v-for="(casual,index) in ask_data" :key="index" @click="askDel(casual.ask_content)">
              <div class="el-card__body" style="padding: 10px;">
                <div>
                  <div class="subject_title_left">
                    <label role="checkbox" class="el-checkbox">
                    <span aria-checked="mixed" class="el-checkbox__input">
                      <!--<span class="el-checkbox__inner"></span>-->
                      <input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="">
                    </span>
                      <span class="el-checkbox__label">
                      <font size="4">{{ (index + 1)}}、[问答题]</font>
                    </span>
                    </label>
                  </div>
                  <div class="subject_title_right">
                    <div class="el-button-group">

                      <button type="button" class="el-button el-button--default el-button--medium" @click="askDel"><!---->
                        <i class="fa fa-trash"></i>
                        <span >删除</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <div class="questionContent rich-text"><p>{{casual.ask_content}}</p></div>

                  <div class="questionContent text-muted">
                    解析：<span class="rich-text"><p>{{casual.ask_analysis}}</p></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tMix" v-if="mix_data.length > 0">
            <div class="title-exam">
              <h2 style="margin:15px 0 15px 60px;" class="text-center">组合题</h2>
            </div>
            <div class="el-card is-hover-shadow" style="width: 927px; margin: 0 auto; margin-bottom: 8px;" v-for="(casual,index) in mix_data" :key="index" @click="mixDel(casual.mix_content)">
              <div class="el-card__body" style="padding: 10px;">
                <div>
                  <div class="subject_title_left">
                    <label role="checkbox" class="el-checkbox">
                    <span aria-checked="mixed" class="el-checkbox__input">
                      <!--<span class="el-checkbox__inner"></span>-->
                      <input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="">
                    </span>
                      <span class="el-checkbox__label">
                      <font size="4">{{ (index + 1)}}、[组合题]</font>
                    </span>
                    </label>
                  </div>
                  <div class="subject_title_right">
                    <div class="el-button-group">

                      <button type="button" class="el-button el-button--default el-button--medium" @click="mixDel"><!---->
                        <i class="fa fa-trash"></i>
                        <span >删除</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <div class="questionContent rich-text"><p>{{casual.mix_content}}</p></div>

                  <div class="questionContent text-muted">
                    解析：<span class="rich-text"><p>{{casual.mix_analysis}}</p></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!--手动增题模板-->
        <div class="modal modal_mix fade" id="modal_set">
          <div role="dialog" aria-modal="true" aria-label="新增题目" class="el-dialog1" style="margin-top: 15vh; width: 1200px;">
            <div class="el-dialog__header">
              <span class="el-dialog__title">选择题目</span>
              <button type="button" class="close" data-dismiss="modal"
                      aria-hidden="true">×
              </button>
            </div>
            <div class="el-dialog__body" style="position: relative;">
              <div style="width: 300px;">
                <div style="padding: 0px 5px; height: 485px; width: 300px; overflow: hidden auto;">
                  <div>
                    <div class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition el-table--medium">
                      <div class="hidden-columns">
                        <div></div>
                        <div></div>
                      </div>
                      <div class="el-table__header-wrapper">
                        <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 290px;">
                          <colgroup>
                            <col name="el-table_20_column_137" width="38">
                            <col name="el-table_20_column_138" width="252">
                            <col name="gutter" width="0">
                          </colgroup>
                          <thead class="has-gutter">
                          <tr class="">
                            <th colspan="1" rowspan="1" class="el-table_20_column_137  is-center   is-leaf">
                              <div class="cell">#</div>
                            </th>
                            <th colspan="1" rowspan="1" class="el-table_20_column_138     is-leaf">
                              <div class="cell">题库名称</div>
                            </th>
                            <th class="gutter" style="width: 0px; display: none;"></th>
                          </tr>
                          </thead>
                        </table>
                      </div>
                      <div class="el-table__body-wrapper is-scrolling-none">
                        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 290px;">
                          <colgroup>
                            <col name="el-table_20_column_137" width="38">
                            <col name="el-table_20_column_138" width="252">
                          </colgroup>
                          <tbody v-if="get_item.length > 0">
                          <tr class="el-table__row"  v-for="(casual,index) in get_item" :key="index" @click="showTitle($event)">
                            <td rowspan="1" colspan="1" class="el-table_20_column_137 is-center ">
                              <div class="cell">
                                <div>{{ (index + 1)}}</div>
                              </div>
                            </td>
                            <td rowspan="1" colspan="1" class="el-table_20_column_138" >
                              <div class="cell">{{casual.item_name}}</div>
                            </td>
                          </tr><!---->
                          </tbody>
                        </table><!----><!---->
                      </div><!----><!----><!----><!---->
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
                </div>
              </div>


              <div style="width: 700px;  padding: 0px 5px;position: absolute; left: 330px;top: 28px;" >
                <div style="padding: 0px 5px; height: 485px;  width: 740px;overflow: hidden auto;">
                  <div class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--medium">
                    <div class="hidden-columns">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div class="el-table__header-wrapper">
                      <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 729px;">
                        <colgroup>
                          <col name="el-table_26_column_177" width="50">
                          <col name="el-table_26_column_178" width="40">
                          <col name="el-table_26_column_179" width="540">
                          <col name="el-table_26_column_180" width="100">
                          <col name="el-table_26_column_181" width="50">
                          <col name="gutter" width="0">
                        </colgroup>
                        <thead class="has-gutter">
                        <tr class="">
                          <th colspan="1" rowspan="1" class="el-table_26_column_177  is-center   is-leaf">
                            <div class="cell">#</div>
                          </th>
                          <th colspan="1" rowspan="1" class="el-table_26_column_178   el-table-column--selection  is-leaf">
                            <div class="cell" >
                              <label role="checkbox" aria-disabled="true" class="el-checkbox is-disabled">
                              <span aria-checked="mixed" class="el-checkbox__input is-disabled">
                                <!--<span class="el-checkbox__inner"></span>-->
                                <!--全选-->
                                <input
                                  type="checkbox"
                                  :checked="isSelected"
                                  @click="selectAll(isSelected)"
                                  class="el-checkbox__original"
                                  value=""
                                  style="margin-top: 8px;"
                                  id="title_body"
                                >
                              </span><!---->
                              </label>
                            </div>
                          </th>
                          <th colspan="1" rowspan="1" class="el-table_26_column_179     is-leaf">
                            <!--<div class="cell"></div>-->
                            <label for="title_body" class="cell">题干</label>
                          </th>
                          <th colspan="1" rowspan="1" class="el-table_26_column_181  is-center   is-leaf">
                            <div class="cell">难度</div>
                          </th>
                          <th class="gutter" style="width: 0px; display: none;"></th>
                        </tr>
                        </thead>

                      </table>
                    </div>
                    <div class="el-table__body-wrapper is-scrolling-none">
                      <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 729px;">
                        <!--<colgroup>-->
                          <!--<col name="el-table_26_column_177" width="70">-->
                          <!--<col name="el-table_26_column_178" width="60">-->
                          <!--<col name="el-table_26_column_179" width="540">-->
                          <!--<col name="el-table_26_column_180" width="100">-->
                          <!--<col name="el-table_26_column_181" width="50">-->
                        <!--</colgroup>-->
                        <tbody ><!---->
                          <div class="allTitle">
                              <div class="choiceT" v-if="choice_data.length > 0">
                                <div  style="border-bottom: 1px solid #ebeef5;height: 48px;">
                                  <h5 class="text-center" style="padding-top: 10px;">一、[选择题]</h5>
                                </div>

                                <tr class="el-table__row" v-for="(casual,index) in choice_data" :key="index">
                                  <td rowspan="1" colspan="1" class="el-table_34_column_233 is-center " style="width: 50px;">
                                    <div class="cell">
                                      <div class="text-center">{{ (index + 1)}}</div>
                                    </div>
                                  </td>
                                  <td rowspan="1" colspan="1" class="el-table_34_column_234  el-table-column--selection" style="width: 40px;">
                                    <div class="cell">
                                      <label role="checkbox" class="el-checkbox">
                                    <span aria-checked="mixed" class="el-checkbox__input">
                                      <!--<span class="el-checkbox__inner"></span>-->
                                      <!--单个题目的选中-->
                                      <!--class="el-checkbox__original"-->
                                      <input type="checkbox"  value="" :checked="casual.checked"  @click.stop="singleSelect(casual)">
                                    </span><!---->
                                      </label>
                                    </div>
                                  </td>
                                  <td rowspan="1" colspan="1" class="el-table_34_column_235  " style="width: 540px;">
                                    <div class="cell">
                                      <span >{{casual.choice_content}}</span>
                                    </div>
                                  </td>
                                  <td rowspan="1" colspan="1" class="el-table_34_column_237 is-center " style="width:76px;">
                                    <div class="cell text-center">高</div>
                                  </td>
                                </tr><!---->
                              </div>

                              <div class="fillT" v-if="fill_data.length > 0">
                                <div  style="border-bottom: 1px solid #ebeef5;height: 48px;">
                                  <h5 class="text-center" style="padding-top: 10px;">二、[填空题]</h5>
                                </div>

                                <tr class="el-table__row" v-for="(casual,index) in fill_data" :key="index">
                                  <td rowspan="1" colspan="1" class="el-table_34_column_233 is-center " style="width: 50px;">
                                    <div class="cell">
                                      <div class="text-center">{{ (index + 1)}}</div>
                                    </div>
                                  </td>
                                  <td rowspan="1" colspan="1" class="el-table_34_column_234  el-table-column--selection" style="width: 40px;">
                                    <div class="cell">
                                      <label role="checkbox" class="el-checkbox">
                                    <span aria-checked="mixed" class="el-checkbox__input">
                                      <!--<span class="el-checkbox__inner"></span>-->
                                      <input type="checkbox" aria-hidden="true" value="" :checked="casual.checked" @click.stop="singleSelect(casual)">
                                    </span><!---->
                                      </label>
                                    </div>
                                  </td>
                                  <td rowspan="1" colspan="1" class="el-table_34_column_235  " style="width: 540px;">
                                    <div class="cell">
                                      <span >{{casual.fill_content}}</span>
                                    </div>
                                  </td>
                                  <td rowspan="1" colspan="1" class="el-table_34_column_237 is-center " style="width:76px;">
                                    <div class="cell text-center">高</div>
                                  </td>
                                </tr><!---->
                              </div>

                              <div class="askT" v-if="ask_data.length > 0">
                                <div  style="border-bottom: 1px solid #ebeef5;height: 48px;">
                                  <h5 class="text-center" style="padding-top: 10px;">三、[问答题]</h5>
                                </div>

                                <tr class="el-table__row" v-for="(casual,index) in ask_data" :key="index">
                                  <td rowspan="1" colspan="1" class="el-table_34_column_233 is-center " style="width: 50px;">
                                    <div class="cell">
                                      <div class="text-center">{{ (index + 1)}}</div>
                                    </div>
                                  </td>
                                  <td rowspan="1" colspan="1" class="el-table_34_column_234  el-table-column--selection" style="width: 40px;">
                                    <div class="cell">
                                      <label role="checkbox" class="el-checkbox">
                                    <span aria-checked="mixed" class="el-checkbox__input">
                                      <!--<span class="el-checkbox__inner"></span>-->
                                      <input type="checkbox" aria-hidden="true"  value="" :checked="casual.checked" @click.stop="singleSelect(casual)">
                                    </span><!---->
                                      </label>
                                    </div>
                                  </td>
                                  <td rowspan="1" colspan="1" class="el-table_34_column_235  " style="width: 540px;">
                                    <div class="cell">
                                      <span >{{casual.ask_content}}</span>
                                    </div>
                                  </td>
                                  <td rowspan="1" colspan="1" class="el-table_34_column_237 is-center " style="width:76px;">
                                    <div class="cell text-center">高</div>
                                  </td>
                                </tr><!---->
                              </div>

                              <div class="mixT" v-if="mix_data.length > 0">
                                <div  style="border-bottom: 1px solid #ebeef5;height: 48px;">
                                  <h5 class="text-center" style="padding-top: 10px;">四、[组合题]</h5>
                                </div>

                                <tr class="el-table__row" v-for="(casual,index) in mix_data" :key="index">
                                  <td rowspan="1" colspan="1" class="el-table_34_column_233 is-center " style="width: 50px;">
                                    <div class="cell">
                                      <div class="text-center">{{ (index + 1)}}</div>
                                    </div>
                                  </td>
                                  <td rowspan="1" colspan="1" class="el-table_34_column_234  el-table-column--selection" style="width: 40px;">
                                    <div class="cell">
                                      <label role="checkbox" class="el-checkbox">
                                    <span aria-checked="mixed" class="el-checkbox__input">
                                      <!--<span class="el-checkbox__inner"></span>-->
                                      <input type="checkbox" aria-hidden="true"  :checked="casual.checked" @click.stop="singleSelect(casual)">
                                    </span><!---->
                                      </label>
                                    </div>
                                  </td>
                                  <td rowspan="1" colspan="1" class="el-table_34_column_235  " style="width: 540px;">
                                    <div class="cell">
                                      <span >{{casual.mix_content}}</span>
                                    </div>
                                  </td>
                                  <td rowspan="1" colspan="1" class="el-table_34_column_237 is-center " style="width:76px;">
                                    <div class="cell text-center">高</div>
                                  </td>
                                </tr><!---->
                              </div>
                          </div>

                        </tbody>
                      </table>
                    </div><!----><!----><!----><!---->
                    <div class="el-table__column-resize-proxy" style="display: none;"></div>
                  </div>
                </div>
              </div>

            </div>
            <div class="el-dialog__footer">
              <span  class="dialog-footer">
                <button  type="button" class="el-button el-button--primary el-button--medium" @click=" getAllTitle"><!----><!---->
                  <span>保存</span>
                </button>
                <button  type="button" class="el-button el-button--default el-button--medium" data-dismiss="modal"><!----><!---->
                  <span>取消</span>
                </button>
              </span>
            </div>
          </div>

        </div><!-- /.modal -->

        <!--考试时间模板-->
        <div class="modal modal_time fade" id="modal_time">
          <div role="dialog" aria-modal="true" aria-label="新增题目" class="el-dialog" style="margin-top: 15vh; width: 950px;">
            <div class="el-dialog__header">
              <span class="el-dialog__title">考试时间设置</span>
              <button type="button" class="close" data-dismiss="modal"
                      aria-hidden="true">×
              </button>
            </div>
            <div class="el-dialog__body">
              <td class="text-right" style="vertical-align: top; line-height: 36px;"><b >考试时间：</b></td>
              <td>
                <div style="float: left;">
                <div class="el-form-item is-error is-required el-form-item--medium"><!---->
                  <div class="el-form-item__content">
                    <div class="el-date-editor el-input el-input--small el-input--prefix el-input--suffix el-date-editor--datetime" style="width: 182px;">
                      <input type="text" autocomplete="off" name="" placeholder="考试开始时间" class="el-input__inner" id="set_time_start" v-model="date_start">
                      <span class="el-input__prefix">
                        <i class="el-input__icon el-icon-time"></i><!---->
                      </span>
                      <span class="el-input__suffix">
                        <span class="el-input__suffix-inner">
                          <i class="el-input__icon"></i><!----><!----><!---->
                        </span>
                        <i class="el-input__icon el-input__validateIcon el-icon-circle-close"></i>
                      </span><!---->
                    </div>
                    <!--<div class="el-form-item__error">考试开始时间不能为空</div>-->
                  </div>
                </div>
              </div>
                <div class="range-separator">至</div>
                <div style="float: left;"><div class="el-form-item is-error is-required el-form-item--medium"><!---->
                  <div class="el-form-item__content">
                    <div class="el-date-editor el-input el-input--small el-input--prefix el-input--suffix el-date-editor--datetime" style="width: 182px;"><!---->
                      <input type="text" autocomplete="off" name="" placeholder="考试结束时间" class="el-input__inner" id="set_time_end" v-model="date_end">
                      <span class="el-input__prefix">
                        <i class="el-input__icon el-icon-time"></i><!---->
                      </span>
                      <span class="el-input__suffix">
                        <span class="el-input__suffix-inner">
                          <i class="el-input__icon"></i><!----><!----><!---->
                        </span>
                        <i class="el-input__icon el-input__validateIcon el-icon-circle-close"></i>
                      </span><!---->
                    </div>
                    <!--<div class="el-form-item__error">考试结束时间</div>-->
                  </div>
                </div>
                </div>
              </td>
            </div>
            <div class="el-dialog__footer">
              <span  class="dialog-footer">
                <button  type="button" class="el-button el-button--primary el-button--medium" data-dismiss="modal" @click="setTime"><!----><!---->
                  <span>保存</span>
                </button>
                <button  type="button" class="el-button el-button--default el-button--medium" data-dismiss="modal"><!----><!---->
                  <span>取消</span>
                </button>
              </span>
            </div>
          </div>

        </div><!-- /.modal -->

      </div>

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {titleSub} from "../../../api/index";
  import {fillSave} from "../../../api/index";
  import {delChoice,gotChoice1} from "../../../api/index";
  import axios from 'axios'
  import {
    askSave,
    askSelect,
    choiceSelect,
    delAsk,
    delFill,
    delMix,
    fillSelect,
    mixSave,
    mixSelect, timeSet
  } from "../../../api";


  export default {
    //然后在需要当前页面刷新的页面中注入App.vue组件提供（provide）的 reload 依赖，然后直接用this.reload来调用
    inject:['reload'],
    name: "AddExam",
    data(){
      return{
        real_name:'',
        item_name:'',
        item_des:'',
        item_type:'',
        show:false,
        else:{},
        userInfo:{},//用户信息
        item_date:'',
        timer:null,
        //选择题信息
        choice_content:'',
        choice_analysis:'',
        choice_A:'',
        choice_B:'',
        choice_C:'',
        choice_D:'',
        choice_else:'',
        // 填空题
        fill_content:'',
        fill_analysis:'',
        fill_one:'',
        fill_two:'',
        fill_three:'',
        // 问答题
        ask_content:'',
        ask_analysis:'',
        // 组合题
        mix_content:'',
        mix_analysis:'',
        searchpro:'',

        isSelected:false,
        checkedCode: [],// 用于保存被选中的数据
        choice:[],
        fill:[],
        ask:[],
        mix:[],

        date_start: '',
        date_end: '',
        //存放后台数据
        choice_data:[],
        fill_data:[],
        ask_data:[],
        mix_data:[],
      }
    },
    mounted(){
      this.getAxios();
      // laydate.render({
      //   elem: '#set_time_start',
      //   type:'datetime',
      //   done: (value) => {
      //     this.date_start = value
      //   }
      // });
      // laydate.render({
      //   elem: '#set_time_end',
      //   type:'datetime',
      //   done: (value) => {
      //     this.date_end= value
      //   }
      // });
      this.$store.dispatch('reqChoices');
      this.$store.dispatch('reqFills');
      this.$store.dispatch('reqAsks');
      this.$store.dispatch('reqMixs');
      this.$store.dispatch('reqSort');
      this.$store.dispatch('reqItem');
      this.$store.dispatch('reqChoiceSelect');
      this.$store.dispatch('reqFillSelect');
      this.$store.dispatch('reqAskSelect');
      this.$store.dispatch('reqMixSelect');
      // this.xx();
      // this.getGoodsList();
    },
    computed: {
      ...mapState(['get_choice']),
      ...mapState(['get_fill']),
      ...mapState(['get_ask']),
      ...mapState(['get_mix']),
      ...mapState(['get_sort']),
      ...mapState(['get_item']),
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
    methods:{
      getGoodsList() {
        this.choice_else = this.$route.query.id;
        let data = this.choice_else
        axios.get("http://localhost:3000/api/get_choice").then(response => {
          let res = response.data;
          if (res.status == 0) {
            this.goodsList = res.result.list;
          } else {
            console.log("从服务器请求数据失败！");
          }
        })
      },
      getParams () {
        // 取到路由带过来的参数
        this.choice_else = this.$route.query.id;
        this.tea_name = this.$route.query.tea_name;
        console.log(this.tea_name);
      },

      switchTo(path){
        this.$router.replace({path,query:{tea_name:this.$route.query.tea_name}});
      },
      //插入选择题
      async titleSave(){
        this.choice_content = $('#choice_content').text();
        this.choice_analysis = $('#choice_analysis').text();
        this.choice_A = $('#choice_A').text();
        this.choice_B = $('#choice_B').text();
        this.choice_C = $('#choice_C').text();
        this.choice_D = $('#choice_D').text();
        this.choice_else =  this.$route.query.id;

        const result = await titleSub(this.choice_content,this.choice_analysis,this.choice_A,this.choice_B,this.choice_C,this.choice_D,this.choice_else);
        console.log(result);
        this.reload();


        if(result.success_code === 200){
          this.userInfo = result.message;
          swal("添加成功");
          $('#myModal').modal("hide");

        }else if(error_code === 404){
          swal('题目已存在');
        }

      },
      //插入填空题
      async fillSave(){
        this.fill_content = $('#fill_content').text();
        this.fill_analysis = $('#fill_analysis').text();
        this.fill_one = $('#fill_one').text();
        this.fill_two = $('#fill_two').text();
        this.fill_three = $('#fill_three').text();
        this.choice_else =  this.$route.query.id;

        const result = await fillSave(this.fill_content,this.fill_analysis,this.fill_one,this.fill_two,this.fill_three,this.choice_else);
        console.log(result);
        this.reload();

        if(result.success_code === 203){
          this.userInfo = result.message;
          swal("添加成功");
          $('#modal_fill').modal("hide");

        }else if(error_code === 403){
          swal('题目已存在');
        }

      },
      //插入问答题
      async askSave(){
        this.ask_content = $('#ask_content').text();
        this.ask_analysis = $('#ask_analysis').text();
        this.choice_else =  this.$route.query.id;

        const result = await askSave(this.ask_content,this.ask_analysis,this.choice_else);
        console.log(result);
        this.reload();

        if(result.success_code === 203){
          this.userInfo = result.message;
          swal("添加成功");
          $('#modal_fill').modal("hide");

        }else if(error_code === 403){
          swal('题目已存在');
        }

      },
      //插入组合题
      async mixSave(){
        this.mix_content = $('#mix_content').text();
        this.mix_analysis = $('#mix_analysis').text();
        this.choice_else =  this.$route.query.id;

        const result = await mixSave(this.mix_content,this.mix_analysis,this.choice_else);
        console.log(result);
        this.reload();

        if(result.success_code === 203){
          this.userInfo = result.message;
          swal("添加成功");
          $('#modal_fill').modal("hide");

        }else if(error_code === 403){
          swal('题目已存在');
        }

      },

      //删除选择题
      async choiceDel(choice_content){
        swal({
          title: "FBI WARNING",
          text: "确定要删除该题库?",
          icon: "warning",
          dangerMode: true
        }).then(willDelete => {
          if (willDelete){
            this.choice_content = choice_content;
            const result =delChoice(this.choice_content);
            console.log(result);
            this.reload();
          }
        });

      },
      //删除填空题
      async fillDel(fill_content){
        swal({
          title: "FBI WARNING",
          text: "确定要删除该题库?",
          icon: "warning",
          dangerMode: true
        }).then(willDelete => {
          if (willDelete){
            this.fill_content =fill_content;
            const result =delFill(this.fill_content);
            console.log(result);
            this.reload();
          }
        });

      },
      //删除问答题
      async askDel(ask_content){
        swal({
          title: "FBI WARNING",
          text: "确定要删除该题库?",
          icon: "warning",
          dangerMode: true
        }).then(willDelete => {
          if (willDelete){
            this.ask_content =ask_content;
            const result =delAsk(this.ask_content);
            console.log(result);
            this.reload();
          }
        });

      },
      //删除组合题
      async mixDel(mix_content){
        swal({
          title: "FBI WARNING",
          text: "确定要删除该题库?",
          icon: "warning",
          dangerMode: true
        }).then(willDelete => {
          if (willDelete){
            this.mix_content =mix_content;
            const result =delMix(this.mix_content);
            console.log(result);
            this.reload();
          }
        });

      },
      //全选
      selectAll(isSelected){
        this.isSelected = !isSelected;
        this.$store.dispatch('selectAll',{isSelected});
      },
      //单个商品的选中
      singleSelect(casual){
        this.$store.dispatch('singleSelect',{casual});

        this.hasSelectedAll();
      },
      //判断是否全选
      hasSelectedAll(){
        let flag = true;
        this.choice_data.forEach((casual,index)=>{
          if(!casual.checked){
            flag = false;
          }
          this.isSelected = flag;
        });
        this.fill_data.forEach((casual,index)=>{
          if(!casual.checked){
            flag = false;
          }
          this.isSelected = flag;
        });
        this.ask_data.forEach((casual,index)=>{
          if(!casual.checked){
            flag = false;
          }
          this.isSelected = flag;
        });
        this.mix_data.forEach((casual,index)=>{
          if(!casual.checked){
            flag = false;
          }
          this.isSelected = flag;
        });
      },

      getAllTitle(){
        this.choice_data.forEach((casual,index)=> {
          if (casual.checked) {
            this.checkedCode.push(casual);
            this.choice.push(casual);
            // console.log(this.choice);
          }
        });
        this.fill_data.forEach((casual,index)=> {
          if (casual.checked) {
            this.checkedCode.push(casual);
            this.fill.push(casual);
          }
        });
        this.ask_data.forEach((casual,index)=> {
          if (casual.checked) {
            this.checkedCode.push(casual);
            this.ask.push(casual);
          }
        });
        this.mix_data.forEach((casual,index)=> {
          if (casual.checked) {
            this.checkedCode.push(casual);
            this.mix.push(casual);
          }
        });
        for(let i = 0; i < this.choice.length; i++){
          const result = choiceSelect(this.choice[i].choice_content,this.choice[i].choice_analysis,this.choice[i].choice_A,this.choice[i].choice_B,this.choice[i].choice_C,this.choice[i].choice_D,this.choice_else);
          console.log(result);
          this.reload();
        };

        for(let i = 0; i < this.fill.length; i++){
          const result = fillSelect(this.fill[i].fill_content,this.fill[i].fill_analysis,this.fill[i].fill_one,this.fill[i].fill_two,this.fill[i].fill_three,this.choice_else);
          console.log(result);
          this.reload();
        };
        for(let i = 0; i < this.ask.length; i++){
          const result = askSelect(this.ask[i].ask_content,this.ask[i].ask_analysis,this.choice_else);
          console.log(result);
          this.reload();
        };
        for(let i = 0; i < this.mix.length; i++){
          const result = mixSelect(this.mix[i].mix_content,this.mix[i].mix_analysis,this.choice_else);
          console.log(result);
          this.reload();
        };

      },

    //  考试时间
      async setTime(){
        const result = await timeSet(this.date_start, this.date_end);
        console.log(result);
        this.reload();
      },
      //显示可选题目
      showTitle(event){
        let el = event.currentTarget;
        let el_name = el.children[1].children[0].innerHTML;
        let _this = this;
        axios.all([
          axios.get('http://localhost:3000/api/get_choice', {
            params: {
              choice_else: el_name
            }
          }),
          axios.get('http://localhost:3000/api/get_fill', {
            params: {
              choice_else: el_name
            }
          }),
          axios.get('http://localhost:3000/api/get_ask', {
            params: {
              choice_else: el_name
            }
          }),
          axios.get('http://localhost:3000/api/get_mix', {
            params: {
              choice_else: el_name
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
      //获取选择的题目
      getAxios(){
        let _this = this;
        axios.all([
          axios.get('http://localhost:3000/api/get_choice_select', {
            params: {
              choice_else: this.$route.query.id
            }
          }),
          axios.get('http://localhost:3000/api/get_fill_select', {
            params: {
              choice_else: this.$route.query.id
            }
          }),
          axios.get('http://localhost:3000/api/get_ask_select', {
            params: {
              choice_else: this.$route.query.id
            }
          }),
          axios.get('http://localhost:3000/api/get_mix_select', {
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
  .el-button--primary {
    color: #fff!important;
    background-color: #409eff!important;
    border-color: #409eff!important;
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
  .el-button+.el-button{
    margin-left: 10px;
  }
  .el-button--primary{
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
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
  .el-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
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

  /*试题列表*/
  .el-dropdown-menu--medium {
    padding: 6px 0;

  }

  .el-dropdown-menu {
    position: absolute;
    top: 58px;
    left: 197px;
    padding: 10px 0;
    margin: 5px 0;
    background-color: #fff;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
  .el-dropdown-menu, .el-menu--collapse .el-submenu{
    z-index: 10;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
  .el-dropdown-menu--medium .el-dropdown-menu__item {
    line-height: 30px;
    padding: 0 17px;
    font-size: 14px;
  }

  .el-dropdown-menu__item {
    list-style: none;
    line-height: 36px;
    padding: 0 20px;
    margin: 0;
    font-size: 14px;
    color: #606266;
    cursor: pointer;
    outline: 0;
  }
  .el-dropdown-menu__item:hover{
    color: lightskyblue;
    background-color:rgba(64,158,255,.1);
  }

  .el-popper .popper__arrow, .el-popper .popper__arrow:after {
    position: absolute;
    top: -6px;
    display: block;
    width: 0;
    height: 0;
    border-width:0 6px 6px;
    border-style:solid;
    border-color: transparent transparent gray;
    opacity: 0.3;
  }
  /*底部*/
  .subject_main{
    min-width: 850px;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .subtitle{
    text-align: center;
  }
  h2 {
    display: block;
    font-size: 1.5em;
    font-weight: bold;
  }

  /*试题模态框*/
  .el-dialog {
    position: relative;
    margin: 0 auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 50%;
  }
  .el-dialog__body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
  }
  .padding{
    padding: 5px;
  }
  .el-form-item {
    margin-bottom: 22px;
  }
  .el-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
  }
  .input-group{
    position: relative;
    display: table;
    border-collapse: separate;
  }
  .input-group-addon:first-child {
    border-right: 0;
  }
  .input-group-addon{
    padding: 6px 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: #555;
    text-align: center;
    background-color: #f5f7fa;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: table-cell;
    width: 2%;
    white-space: nowrap;
    vertical-align: middle;
    border-right: 0;
    min-width: 40px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .do-ckeditorBox{
    max-width: 100%;
    overflow: hidden;
    word-break: break-all;
    white-space: normal;
    position: relative;
    z-index: 2;
    float: left;
    width: 100%;
    margin-bottom: 0;
    display: block;
    min-height: 40px;
    padding: 11px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .mce-content-body {
    line-height: 1.3;
  }

  .el-row {
    box-sizing: border-box;
    position: relative;
  }
  .text-center{
    text-align: center;
    line-height: 30px;
  }

  .el-col-12 {
    width: 50%;
  }
  [class*=all] {
    float: left;
    box-sizing: border-box;
  }
  .four1{
    margin-top: 18px;
  }
  [class*=four] {
    float: right;
    box-sizing: border-box;
    position: absolute;
    right: 300px;
    top: -1px;
  }
  .el-col-4 {
    width: 16.66667%;
  }
  .el-col-8 {
    width: 33.33333%;
  }
  .el-form-item--medium .el-form-item__content, .el-form-item--medium .el-form-item__label {
    line-height: 36px;
  }
  .el-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
  }
  .el-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    cursor: pointer;
    white-space: nowrap;
    outline: 0;
    font-size: 14px;
  }
  .el-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: 0;
    line-height: 1;
    vertical-align: middle;
  }
  .el-radio, .el-radio__inner, .el-radio__input {
    position: relative;
    display: inline-block;
  }

  /*选择题显示*/

  .el-card {
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    transition: .3s;
    padding: 10px;
    height: 352px;
  }
  .el-card:hover{
    border: 1px dashed rgb(236, 102, 26);
  }
  .el-card, .el-message {
    border-radius: 4px;
    overflow: hidden;
  }

  .el-card .subject_title_left{
    margin: 6px 0;
    display: inline-block;
  }
  .el-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .el-checkbox, .el-checkbox__input {
    display: inline-block;
    position: relative;
    white-space: nowrap;
  }
  .el-checkbox__original{
    width: 14px;
    height: 14px;
    background-color: #fff;
    margin-bottom: 8px;
  }

  .el-card .subject_title_right{
    float: right;
  }
  .el-button-group {
    display: inline-block;
    vertical-align: middle;
    position: relative;
  }
  .el-button-group>.el-button {
    float: left;
    position: absolute;
    right: 0;
    top: -8px;
  }
  .el-button-group>.el-button:hover{
    color: lightskyblue;
    background-color:rgba(64,158,255,.1);
  }

  .questionContent{
    white-space: pre-wrap;
    width: 100%;
    height: auto;
    word-wrap: break-word;
    overflow: hidden;
    padding: 15px 25px;
  }
  .rich-text>:first-child {
    display: inherit;
  }

  .do-ckeditorBox p, .questionContent p {
    margin: 0;
  }

  .el-radio-group {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
    font-size: 0;
  }
  .auto-line{
    white-space: normal;
    width: 100%;
    height: auto;
    word-wrap: break-word;
    overflow: hidden;
  }

  .options{
    padding: 10px 25px;
  }
  .el-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }

  .text-muted{
    color: #c0c4cc;
  }
  .questionContent{
    white-space: pre-wrap;
    width: 100%;
    height: auto;
    word-wrap: break-word;
    overflow: hidden;
    padding: 15px 25px;
  }

  /*手动选题模态框*/
  .el-table--border {
    border-right: none;
    border-bottom: none;
  }
  .el-table--border, .el-table--group {
    border: 1px solid #ebeef5;
  }
  .el-table .hidden-columns {
    position: absolute;
    z-index: -1;
  }
  .el-table__header-wrapper {
    overflow: hidden;
    width: 100%;
  }
  .el-table__header {
    table-layout: fixed;
    border-collapse: separate;
  }
  .el-table thead {
    color: #909399;
    font-weight: 500;
  }
  .el-table tr {
    background-color: #fff;
  }

  .el-table th.is-leaf {
    border-bottom: 1px solid #ebeef5;
  }
  .el-table--border th:first-child .cell, .el-table .cell, .el-table th div {
    padding-left: 10px;
  }
  .el-table th>.cell {
    position: relative;
    word-wrap: normal;
    text-overflow: ellipsis;
    vertical-align: middle;
    width: 100%;
  }
  .el-table th>.cell, .el-table th div {
    display: inline-block;
    box-sizing: border-box;
  }
  .el-table--border th,.el-table--border td{
    border-right: 1px solid #ebeef5;
  }
  .el-table__row:hover {
    background-color:#ebeef9;
  }
  .el-dialog1{
    position: relative;
    margin: 0 auto 50px;
    background: #fff;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 50%;
  }

  .el-table__empty-block {
    min-height: 60px;
    text-align: center;
    width: 100%;
    height: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .el-table__empty-text {
    line-height: 60px;
    width: 50%;
    color: #909399;
  }

  /*考试时间设置*/

  .set-table td{
    padding: 5px;
  }
  .text-right{
    text-align: right;
  }
  .range-separator{
    width: 30px;
    float: left;
    height: 36px;
    text-align: center;
    line-height: 36px;
  }


</style>
