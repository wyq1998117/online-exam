import Vue from 'vue';
import {
  USER_INFO,
  EXAM_CHOICE,
  EXAM_FILL,
  EXAM_ASK,
  EXAM_MATERIAL,
  GET_ITEM,
  GET_CHOICE,
  GET_FILL,
  GET_ASK,
  GET_MIX,
  GET_TEST,
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
  [USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo;
  },
  [EXAM_CHOICE](state, {exam_choice}){
    state.exam_choice = exam_choice;
  },
  [EXAM_FILL](state, {exam_fill}){
    state.exam_fill = exam_fill;
  },
  [EXAM_ASK](state, {exam_ask}){
    state.exam_ask = exam_ask;
  },
  [EXAM_MATERIAL](state, {exam_material}){
    state.exam_material = exam_material;
  },
  [GET_TEST](state, {get_test}){
    state.get_test = get_test;
  },
  [GET_ITEM](state, {get_item}){
    state.get_item = get_item;
  },
  [GET_CHOICE](state, {get_choice}){
    state.get_choice = get_choice;
  },
  [GET_FILL](state, {get_fill}){
    state.get_fill = get_fill;
  },
  [GET_ASK](state, {get_ask}){
    state.get_ask = get_ask;
  },
  [GET_MIX](state, {get_mix}){
    state.get_mix = get_mix;
  },
  [GET_SORT](state, {get_sort}){
    state.get_sort = get_sort;
  },
  [GET_CHOICE_SELECT](state, {get_choice_select}){
    state.get_choice_select = get_choice_select;
  },
  [GET_FILL_SELECT](state, {get_fill_select}){
    state.get_fill_select = get_fill_select;
  },
  [GET_ASK_SELECT](state, {get_ask_select}){
    state.get_ask_select = get_ask_select;
  },
  [GET_MIX_SELECT](state, {get_mix_select}){
    state.get_mix_select = get_mix_select;
  },
  [GET_TIME](state, {time_get}){
    state.time_get = time_get;
  },

  [SELECT_ALL](state, {isSelected}){
    state.get_fill.forEach((goods,index)=>{
      if(goods.checked){//属性存在
        goods.checked = !isSelected;
      }else{
        Vue.set(goods,'checked',!isSelected);
      }
    });
    state.get_choice.forEach((goods,index)=>{
      if(goods.checked){//属性存在
        goods.checked = !isSelected;
      }else{
        Vue.set(goods,'checked',!isSelected);
      }
    });
    state.get_ask.forEach((goods,index)=>{
      if(goods.checked){//属性存在
        goods.checked = !isSelected;
      }else{
        Vue.set(goods,'checked',!isSelected);
      }
    });
    state.get_mix.forEach((goods,index)=>{
      if(goods.checked){//属性存在
        goods.checked = !isSelected;
      }else{
        Vue.set(goods,'checked',!isSelected);
      }
    });

  },
  [SELECT_SINGLE](state, {casual}){
   //判断是否有选中属性
    if(casual.checked){
      casual.checked = !casual.checked;
    }else{
      Vue.set(casual,'checked',true);
    }
  },
}
