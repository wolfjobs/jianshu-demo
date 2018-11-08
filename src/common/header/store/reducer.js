import * as constants from './constants'
import {fromJS} from 'immutable'

/*
* Facebook 开发的immutable库
* fromJS API对对象进行操作，生成immutable对象【不可改变的对象】，如下defaultState
* */

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page:1,
  totalPage:1
});

const reducer = (state = defaultState, action) => {
  /*
  * immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
  * */
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set("focused", true);
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.MOUSE_INTER:
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constants.CHANGE_LIST:
      return state.set('page', action.page);
    case constants.SEARCH_FOCUS_GET_LIST:
      // return state.set('list', action.data).set('totalPage',action.totalPage);
      return state.merge({
        list:action.data,
        totalPage:action.totalPage,
      })

    default:
      return state;

  }

}

export default reducer