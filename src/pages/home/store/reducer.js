/**
 *
 * @author fengjun
 * @build 2018/11/8
 *
 */
import {fromJS} from 'immutable'
import * as constants from "./constants";

const defaultState = fromJS({
  topic_list: [],
  essay_list: [],
  recommend_list: [],
  writer_list: [],
});

const reducer = (state = defaultState, action) => {
  /*
  * immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
  * */
  switch (action.type) {
    case constants.HOME_CHANGE_DATA:
      return state.merge({
        topic_list: action.topic_list,
        essay_list: action.essay_list,
        recommend_list: action.recommend_list,
        writer_list: action.writer_list,
      });
    default:
      return state;
  }
};

export default reducer