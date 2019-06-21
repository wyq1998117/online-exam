<template>
  <div class="exam_main">
    <div class="exam_main">
      <div class="exam">
        <div class="exam_main_top">
          <div  class="exam_main_top_left">
            <button  type="button" class="el-button el-button--primary el-button--medium"  @click="switchTo('/teacher/MyTitle')"><!---->
              <i class=" fa fa-angle-double-left"></i>
              <span>返回题库</span>
            </button>
            <button  type="button" class="el-button el-button--success el-button--medium" id="el-add" @mouseover="showlist" @mouseleave="hidelist">
              <i class="fa fa-plus"></i>
              <span>增加题目</span>
              <!--<i class="fa fa-angle-down el-icon&#45;&#45;right" style="margin-left: 5px;"></i>-->
            </button>
          </div>

          <div class="exam_main_top_right query-tools">
            <form  class="el-form">
              <div  class="el-input el-input--medium" style="display: none;"><!---->
                <input type="text" autocomplete="off" class="el-input__inner"><!----><!----><!---->
              </div>
              <div class="el-dropdown">
                <div class="el-input el-input--medium el-input--suffix el-dropdown-selfdefine" aria-haspopup="list" aria-controls="dropdown-menu-3552" role="button" tabindex="0" style="border-top-right-radius: 0px; border-bottom-right-radius: 0px;"><!---->
                  <input type="text" readonly="readonly" autocomplete="off" placeholder="选择分类" class="el-input__inner"><!---->
                  <span class="el-input__suffix">
                      <span class="el-input__suffix-inner">
                        <!--<i class="fa fa-sort-desc"></i>-->
                      </span><!---->
                    </span><!---->
                </div>
                <ul class="el-dropdown-menu el-popper tree-dropdown-menu el-dropdown-menu--medium" id="dropdown-menu-3552" style="display: none;">
                  <div class="tree-data"><!---->
                    <!--<div role="tree" class="el-tree el-tree--highlight-current">-->
                    <!--<div class="el-tree__empty-block">-->
                    <!--<span class="el-tree__empty-text">暂无数据</span>-->
                    <!--</div>-->
                    <!--<div class="el-tree__drop-indicator" style="display: none;"></div>-->
                    <!--</div>-->
                  </div>
                </ul>
              </div>
              <div class="query_name el-input el-input--medium el-input-group el-input-group--append" style="width: 240px; border-top-left-radius: 0px; border-bottom-left-radius: 0px; margin-left: -5px;"><!---->
                <!--<input type="text" autocomplete="off" placeholder="搜索试卷" class="el-input__inner">&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
                <!--<div class="el-input-group__append">-->
                  <!--<button type="button" class="el-button btn-right-border el-button&#45;&#45;default el-button&#45;&#45;medium">&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
                    <!--<span>搜索</span>-->
                  <!--</button>-->
                  <!--<button type="button" class="el-button el-button&#45;&#45;default el-button&#45;&#45;medium">&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
                    <!--<span>重置</span>-->
                  <!--</button>-->
                <!--</div>-->
              </div>
            </form>
          </div>
          <div  class="clear_both"></div>
        </div>
        <div class="subject_main">
          <div class="subtitle">
            <h2>{{ this.$route.query.id}}</h2>
          </div>
        </div>
          <div class="sublist"  >
            <div class="tChoice" v-if="choice_data.length > 0">
              <!--get_choice-->
              <div class="el-card is-hover-shadow" style="width: 927px; margin: 0 auto; margin-bottom: 8px;" v-for="(casual,index) in choice_data" :key="index" >
                <!--@click="choiceDel(casual.choice_content)"-->
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
                            <label role="radio" aria-disabled="true" tabindex="-1" class="el-radio options auto-line is-disabled">
                          <span class="el-radio__input is-disabled">
                            <span class="el-radio__inner"></span>
                            <input type="radio" aria-hidden="true" disabled="disabled" tabindex="-1" class="el-radio__original" value="1">
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
                      </div>
                    </div>
                    <div class="questionContent text-muted">
                      解析：<span class="rich-text"><p>{{casual.choice_analysis}}</p></span>       答案：<span class="rich-text"><p>{{casual.answer}}</p></span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class="tFill" v-if="fill_data.length > 0">
              <div class="title-exam">
                <h2 style="margin:15px 0 15px 60px;" class="text-center">填空题</h2>
              </div>
              <div class="el-card is-hover-shadow" style="width: 927px; margin: 0 auto; margin-bottom: 8px;" v-for="(casual,index) in fill_data" :key="index" @click="fillDel(casual.fill_content)">
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

                        <button type="button" class="el-button el-button--default el-button--medium" @click="fillDel"><!---->
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





        <ul @mouseover="onList" @mouseleave="outList" class="el-dropdown-menu el-popper el-dropdown-menu--medium" id="dropdown-menu" style="transform-origin: center top 0px; z-index: 2015; display: none">
          <div  class="popper__arrow" style="left: 8px;"></div>
          <li tabindex="-1" class="el-dropdown-menu__item" data-toggle="modal" data-target="#modal_choice">单选题</li>
          <li tabindex="-1" class="el-dropdown-menu__item" data-toggle="modal" data-target="#modal_fill">填空题</li>
          <li tabindex="-1" class="el-dropdown-menu__item" data-toggle="modal" data-target="#modal_ask">简答题</li>
          <li tabindex="-1" class="el-dropdown-menu__item" data-toggle="modal" data-target="#modal_mix">组合题</li>

        </ul>
        <!-- 选择题模态框（Modal） -->
        <div class="modal modal_choice fade" id="modal_choice">
          <div role="dialog" aria-modal="true" aria-label="新增题目" class="el-dialog" style="margin-top: 15vh; width: 950px;">
            <div class="el-dialog__header">
              <span class="el-dialog__title">新增题目</span>
              <button type="button" class="close" data-dismiss="modal"
                      aria-hidden="true">×
              </button>
            </div>
            <div class="el-dialog__body">
              <form class="el-form">
                <div  class="padding">
                  <div  class="subject_title_left">
                    <font  size="4">1、[单选题]</font>
                  </div>
                </div> <!---->
                <div  class="padding" style="">
                  <div  class="el-form-item is-required el-form-item--medium"><!---->
                    <div class="el-form-item__content">
                      <div  class="input-group">
                        <div  class="input-group-addon">题干</div>
                        <div class="do-ckeditorBox mce-content-body" contenteditable="true" style="width: 831px;" spellcheck="false">
                          <p id="choice_content">单选题标题</p>
                        </div>
                        <input type="hidden">
                      </div><!---->
                    </div>
                  </div>
                </div>
                <div  class="padding">
                  <div  class="el-form-item el-form-item--medium"><!---->
                    <div class="el-form-item__content">
                      <div  class="input-group">
                        <div  class="input-group-addon">解析</div>
                        <div class="do-ckeditorBox mce-content-body" contenteditable="true" spellcheck="false">
                          <p id="choice_analysis">单选题解析</p>
                        </div>
                        <input type="hidden" name="tiny-vue_620315908351556349973312">
                      </div><!---->
                    </div>
                  </div>
                </div>
                <div  class="padding">
                  <div  class="el-row">
                    <div  class="text-center el-col all el-col-12">
                      <div >选项文字</div>
                    </div>
                    <div  class="text-center el-col all el-col-4" style="margin-left: -5px;">
                      <div >答案</div>
                    </div>
                  </div>
                </div>
                <div >
                  <div  class="padding">
                    <div  class="el-row">
                      <div  class="el-col el-col-12">
                        <div >
                          <div  class="el-form-item el-form-item--medium"><!---->
                            <div class="el-form-item__content">
                              <div  class="input-group">
                                <div  class="input-group-addon">A</div>
                                <div class="do-ckeditorBox mce-content-body" contenteditable="true" spellcheck="false">
                                  <p id="choice_A">选项1</p>
                                </div>
                                <input type="hidden" >
                                <input type="hidden" >
                              </div><!---->
                            </div>
                            </div>
                        </div>
                      </div>
                      <div  class="text-center el-col four four1 el-col-4">
                        <div class="input-width-edit el-input el-input--medium">
                          <input type="text" autocomplete="off" placeholder="请填写答案" class="el-input__inner"  ref="choice_ans" id="choice_ans">
                        </div>
                      </div>

                    </div>
                  </div>
                  <div  class="padding">
                    <div  class="el-row">
                      <div  class="el-col el-col-12">
                        <div >
                          <div  class="el-form-item el-form-item--medium"><!---->
                            <div class="el-form-item__content">
                              <div  class="input-group">
                                <div  class="input-group-addon">B</div>
                                <div  id="tiny-vue" class="do-ckeditorBox mce-content-body" contenteditable="true" spellcheck="false">
                                  <p id="choice_B">选项2</p>
                                </div>
                                <input type="hidden" name="tiny-vue">
                                <input type="hidden" name="tiny-vue">
                              </div><!---->
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div  class="padding">
                    <div  class="el-row">
                      <div  class="el-col el-col-12">
                        <div >
                          <div  class="el-form-item el-form-item--medium"><!---->
                            <div class="el-form-item__content">
                              <div  class="input-group">
                                <div  class="input-group-addon">C</div>
                                <div  id="tiny-vue1" class="do-ckeditorBox mce-content-body" contenteditable="true" spellcheck="false">
                                  <p id="choice_C">选项3</p>
                                </div>
                                <input type="hidden" name="tiny-vueif">
                                <input type="hidden" name="tiny-vue">
                              </div><!---->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div  class="padding">
                    <div  class="el-row">
                      <div  class="el-col el-col-12">
                        <div >
                          <div  class="el-form-item el-form-item--medium"><!---->
                            <div class="el-form-item__content">
                              <div  class="input-group">
                                <div  class="input-group-addon">D</div>
                                <div  id="tiny-vue_532029649361556349973316" class="do-ckeditorBox mce-content-body" contenteditable="true" spellcheck="false">
                                  <p id="choice_D">选项4</p>
                                </div>
                                <input type="hidden" name="tiny-vue">
                              </div><!---->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> <!----> <!----> <!----> <!---->

              </form>
            </div>
            <div class="el-dialog__footer">
              <span  class="dialog-footer">
                <button  type="button" class="el-button el-button--primary el-button--medium" @click="titleSave"><!----><!---->
                  <span>保存</span>
                </button>
                <button  type="button" class="el-button el-button--default el-button--medium" data-dismiss="modal"><!----><!---->
                  <span>取消</span>
                </button>
              </span>
            </div>
          </div>

        </div><!-- /.modal -->
        <!--填空题模板-->
        <div class="modal modal_fill fade" id="modal_fill">
          <div role="dialog" aria-modal="true" aria-label="新增题目" class="el-dialog" style="margin-top: 15vh; width: 950px;">
            <div class="el-dialog__header">
              <span class="el-dialog__title">新增题目</span>
              <button type="button" class="close" data-dismiss="modal"
                      aria-hidden="true">×
              </button>
            </div>
            <div class="el-dialog__body">
              <form class="el-form">
                <div  class="padding">
                  <div  class="subject_title_left">
                    <font  size="4">1、[填空题]</font>
                  </div>
                </div> <!---->
                <div class="" style="color: rgb(245, 75, 41); margin: 10px 0 10px 0;">提示：填空用连续三个下划线"_"表示，若一个空有多个参考答案，请添加同义词，考生答案匹配任意一个都算正确。
                </div>
                <div  class="padding" style="">
                  <div  class="el-form-item is-required el-form-item--medium"><!---->
                    <div class="el-form-item__content">
                      <div  class="input-group">
                        <div  class="input-group-addon">题干</div>
                        <div class="do-ckeditorBox mce-content-body" contenteditable="true" style="width: 831px;" spellcheck="false">
                          <p id="fill_content">江雪 作者：________千山鸟飞绝，____________。孤舟蓑笠翁，____________。</p>
                        </div>
                        <input type="hidden">
                      </div><!---->
                    </div>
                  </div>
                </div>
                <div  class="padding">
                  <div  class="el-form-item el-form-item--medium"><!---->
                    <div class="el-form-item__content">
                      <div  class="input-group">
                        <div  class="input-group-addon">解析</div>
                        <div class="do-ckeditorBox mce-content-body" contenteditable="true" spellcheck="false">
                          <p id="fill_analysis">填空题解析</p>
                        </div>
                        <input type="hidden">
                      </div><!---->
                    </div>
                  </div>
                </div>
                <div >
                  <div  class="padding">
                    <div  class="el-row">
                      <div  class="el-col el-col-12">
                        <div >
                          <div  class="el-form-item el-form-item--medium"><!---->
                            <div class="el-form-item__content">
                              <div  class="input-group">
                                <div  class="input-group-addon">第一空答案</div>
                                <div class="do-ckeditorBox mce-content-body" contenteditable="true" spellcheck="false">
                                  <p id="fill_one">柳宗元</p>
                                </div>
                                <input type="hidden" >
                                <input type="hidden" >
                              </div><!---->
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div  class="padding">
                    <div  class="el-row">
                      <div  class="el-col el-col-12">
                        <div >
                          <div  class="el-form-item el-form-item--medium"><!---->
                            <div class="el-form-item__content">
                              <div  class="input-group">
                                <div  class="input-group-addon">第二空答案</div>
                                <div class="do-ckeditorBox mce-content-body" contenteditable="true" spellcheck="false">
                                  <p id="fill_two">万径人踪灭</p>
                                </div>
                                <input type="hidden" name="tiny-vue">
                                <input type="hidden" name="tiny-vue">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div  class="padding">
                    <div  class="el-row">
                      <div  class="el-col el-col-12">
                        <div >
                          <div  class="el-form-item el-form-item--medium"><!---->
                            <div class="el-form-item__content">
                              <div  class="input-group">
                                <div  class="input-group-addon">第三空答案</div>
                                <div class="do-ckeditorBox mce-content-body" contenteditable="true" spellcheck="false">
                                  <p id="fill_three">独钓寒江雪</p>
                                </div>
                                <input type="hidden" name="tiny-vueif">
                                <input type="hidden" name="tiny-vue">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </form>
            </div>
            <div class="el-dialog__footer">
              <span  class="dialog-footer">
                <button  type="button" class="el-button el-button--primary el-button--medium" @click="fillSave"><!----><!---->
                  <span>保存</span>
                </button>
                <button  type="button" class="el-button el-button--default el-button--medium" data-dismiss="modal"><!----><!---->
                  <span>取消</span>
                </button>
              </span>
            </div>
          </div>

        </div><!-- /.modal -->
        <!--问答题模板-->
        <div class="modal modal_ask fade" id="modal_ask">
          <div role="dialog" aria-modal="true" aria-label="新增题目" class="el-dialog" style="margin-top: 15vh; width: 950px;">
            <div class="el-dialog__header">
              <span class="el-dialog__title">新增题目</span>
              <button type="button" class="close" data-dismiss="modal"
                      aria-hidden="true">×
              </button>
            </div>
            <div class="el-dialog__body">
              <form class="el-form">
                <div  class="padding">
                  <div  class="subject_title_left">
                    <font  size="4">1、[问答题]</font>
                  </div>
                </div> <!---->
                <div class="" style="color: rgb(245, 75, 41); margin: 10px 0 10px 0;">提示：问答题答案不唯一，考生答案大致意思匹配都算正确。
                </div>
                <div  class="padding" style="">
                  <div  class="el-form-item is-required el-form-item--medium"><!---->
                    <div class="el-form-item__content">
                      <div  class="input-group">
                        <div  class="input-group-addon">题干</div>
                        <div class="do-ckeditorBox mce-content-body" contenteditable="true" style="width: 831px;" spellcheck="false">
                          <p id="ask_content">我国普通学校应当遵循哪些主要教学原则？</p>
                        </div>
                        <input type="hidden">
                      </div><!---->
                    </div>
                  </div>
                </div>
                <div  class="padding">
                  <div  class="el-form-item el-form-item--medium"><!---->
                    <div class="el-form-item__content">
                      <div  class="input-group">
                        <div  class="input-group-addon">解析</div>
                        <div class="do-ckeditorBox mce-content-body" contenteditable="true" spellcheck="false">
                          <p id="ask_analysis">科学性与教育性相结合原则；理论联系实际原则；直观性原则；启发性原则；循序渐进原则；巩固性原则；因材施教原则。</p>
                        </div>
                        <input type="hidden">
                      </div>
                    </div>
                  </div>
                </div>
                <div >
                </div>

              </form>
            </div>
            <div class="el-dialog__footer">
              <span  class="dialog-footer">
                <button  type="button" class="el-button el-button--primary el-button--medium" @click="askSave">
                  <span>保存</span>
                </button>
                <button  type="button" class="el-button el-button--default el-button--medium" data-dismiss="modal">
                  <span>取消</span>
                </button>
              </span>
            </div>
          </div>

        </div><!-- /.modal -->
        <!--组合题模板-->
        <div class="modal modal_mix fade" id="modal_mix">
          <div role="dialog" aria-modal="true" aria-label="新增题目" class="el-dialog" style="margin-top: 15vh; width: 950px;">
            <div class="el-dialog__header">
              <span class="el-dialog__title">新增题目</span>
              <button type="button" class="close" data-dismiss="modal"
                      aria-hidden="true">×
              </button>
            </div>
            <div class="el-dialog__body">
              <form class="el-form">
                <div  class="padding">
                  <div  class="subject_title_left">
                    <font  size="4">1、[问答题]</font>
                  </div>
                </div> <!---->
                <div class="" style="color: rgb(245, 75, 41); margin: 10px 0 10px 0;">提示：组合题答案不唯一，考生答案大致意思匹配都算正确。
                </div>
                <div  class="padding" style="">
                  <div  class="el-form-item is-required el-form-item--medium"><!---->
                    <div class="el-form-item__content">
                      <div  class="input-group">
                        <div  class="input-group-addon">题干</div>
                        <div class="do-ckeditorBox mce-content-body" contenteditable="true" style="width: 831px;" spellcheck="false">
                          <p id="mix_content">组合题测试</p>
                        </div>
                        <input type="hidden">
                      </div>
                    </div>
                  </div>
                </div>
                <div  class="padding">
                  <div  class="el-form-item el-form-item--medium">
                    <div class="el-form-item__content">
                      <div  class="input-group">
                        <div  class="input-group-addon">解析</div>
                        <div class="do-ckeditorBox mce-content-body" contenteditable="true" spellcheck="false">
                          <p id="mix_analysis">组合题解析</p>
                        </div>
                        <input type="hidden">
                      </div>
                    </div>
                  </div>
                </div>
                <div >
                </div>

              </form>
            </div>
            <div class="el-dialog__footer">
              <span  class="dialog-footer">
                <button  type="button" class="el-button el-button--primary el-button--medium" @click="mixSave">
                  <span>保存</span>
                </button>
                <button  type="button" class="el-button el-button--default el-button--medium" data-dismiss="modal">
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
  import qs from  'qs'
  import {askSave, delAsk, delFill, delMix, mixSave} from "../../../api";


  export default {
    //然后在需要当前页面刷新的页面中注入App.vue组件提供（provide）的 reload 依赖，然后直接用this.reload来调用
    inject:['reload'],
    name: "MyExam",
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
        //存放后台数据
        choice_data:[],
        fill_data:[],
        ask_data:[],
        mix_data:[],
      }
    },
    mounted(){
      this.getAxios();
      this.getParams();
      this.$store.dispatch('reqChoices');
      this.$store.dispatch('reqFills');
      this.$store.dispatch('reqAsks');
      this.$store.dispatch('reqMixs');
      this.$store.dispatch('reqSort');
    },
    computed: {
      ...mapState(['get_choice']),
      ...mapState(['get_fill']),
      ...mapState(['get_ask']),
      ...mapState(['get_mix']),
      ...mapState(['get_sort']),
    },
    created() {


    },
    watch: {
      '$route': 'getParams'
    },
    methods:{
      getGoodsList() {
        this.choice_else = this.$route.query.id;
        let data = this.choice_else;
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
        let answer = this.$refs["choice_ans"].value;
        const result = await titleSub(this.choice_content,this.choice_analysis,this.choice_A,this.choice_B,this.choice_C,this.choice_D,this.choice_else,answer);
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

      select(pro){
        this.searchpro = pro.list_name;
      },


      //列表的显示和隐藏
      showlist(){
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
          $("#dropdown-menu").slideDown();
        }, 300);

      },
      hidelist(){
        this.timer = setTimeout(function () {
          $("#dropdown-menu").slideDown();
        }, 200);
      },
      onList(){
        clearTimeout(this.timer);
      },
      outList(){
        $("#dropdown-menu").slideUp("fast");
      },
      getAxios(){
        let _this = this;
        axios.all([
          axios.get('http://localhost:3000/api/get_choice', {
            params: {
              choice_else: this.$route.query.id
            }
          }),
          axios.get('http://localhost:3000/api/get_fill', {
            params: {
              choice_else: this.$route.query.id
            }
          }),
          axios.get('http://localhost:3000/api/get_ask', {
            params: {
              choice_else: this.$route.query.id
            }
          }),
          axios.get('http://localhost:3000/api/get_mix', {
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
    padding-left: 20px;
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

</style>
