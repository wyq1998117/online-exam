import {
  getChoice,
  getFill,
  getAsk,
  getMaterial,
  getTest,
  getItem,
  gotChoice,
  gotFill,
  gotAsk,
  gotMix,
  getSort,
  getChoiceSelect,
  getFillSelect,
  getAskSelect,
  getMixSelect,
  timeGet
} from '../api/index'

import {
  USER_INFO,
  EXAM_CHOICE,
  EXAM_FILL,
  EXAM_ASK,
  EXAM_MATERIAL,
  GET_TEST,
  GET_ITEM,
  GET_CHOICE,
  GET_FILL,
  GET_ASK,
  GET_MIX,
  GET_SORT,
  SELECT_ALL,
  SELECT_SINGLE,
  GET_CHOICE_SELECT,
  GET_FILL_SELECT,
  GET_ASK_SELECT,
  GET_MIX_SELECT,
  GET_TIME
} from './mutation-types'
export default {
  //1.获取选择题目,异步请求,但mutation是同步，需要用await
  async reqChoice({commit}){
    const result =await getChoice();//promise对象
    commit(EXAM_CHOICE,{exam_choice:result.message})
  },

  //2.获取填空题目,异步请求,但mutation是同步，需要用await
  async reqFill({commit}){
    const result =await getFill();//promise对象
    commit(EXAM_FILL,{exam_fill:result.message})//????
  },

  //3.获取问答题目,异步请求,但mutation是同步，需要用await
  async reqAsk({commit}){
    const result =await getAsk();//promise对象
    commit(EXAM_ASK,{exam_ask:result.message})//????
  },

  //4.获取材料题目,异步请求,但mutation是同步，需要用await
  async reqMaterial({commit}){
    const result =await getMaterial();//promise对象
    commit(EXAM_MATERIAL,{exam_material:result.message})//????
  },
  //5.获取题库内容
  async reqTest({commit}){
    const result =await getTest();//promise对象
    commit(GET_TEST,{get_test:result.message})//????
  },
  //5.获取题库内容
  async reqItem({commit}){
    const result =await getItem();//promise对象
    commit(GET_ITEM,{get_item:result.message})//????
  },
  //6.获取选择题内容
  async reqChoices({commit}){
    const result =await gotChoice();//promise对象
    commit(GET_CHOICE,{get_choice:result.message})//????
  },
  //7.获取填空题内容
  async reqFills({commit}){
    const result =await gotFill();//promise对象
    commit(GET_FILL,{get_fill:result.message})//????
  },
  //8.获取填空题内容
  async reqAsks({commit}){
    const result =await gotAsk();//promise对象
    commit(GET_ASK,{get_ask:result.message})//????
  },
  //9.获取填空题内容
  async reqMixs({commit}){
    const result =await gotMix();//promise对象
    commit(GET_MIX,{get_mix:result.message})//????
  },
  //11.获取分类内容
  async reqSort({commit}){
    const result =await getSort();//promise对象
    commit(GET_SORT,{get_sort:result.message})//????
  },
  //12.是否全选
  selectAll({commit},{isSelected}){
    commit(SELECT_ALL,{isSelected});
  },
  //12.单个选中
  singleSelect({commit},{casual}){
    commit(SELECT_SINGLE,{casual});
  },
  //13.获取选中的填空题内容
  async reqChoiceSelect({commit}){
    const result =await getChoiceSelect();//promise对象
    commit(GET_CHOICE_SELECT,{get_choice_select:result.message})//????
  },
  //14.获取选中的填空题内容
  async reqFillSelect({commit}){
    const result =await getFillSelect();//promise对象
    commit(GET_FILL_SELECT,{get_fill_select:result.message})//????
  },
  //15.获取选中的问答题内容
  async reqAskSelect({commit}){
    const result =await getAskSelect();//promise对象
    commit(GET_ASK_SELECT,{get_ask_select:result.message})//????time_get
  },
  //16.获取选中的组合题内容
  async reqMixSelect({commit}){
    const result =await getMixSelect();//promise对象
    commit(GET_MIX_SELECT,{get_mix_select:result.message})//????
  },
  //17.获取考试时间
  async reqExamTime({commit}){
    const result =await timeGet();//promise对象
    commit(GET_TIME,{time_get:result.message})//????
  },

  //同步用户信息
  syncUserInfo({commit}, userInfo) {
    commit(USER_INFO, {userInfo});
  }

}
