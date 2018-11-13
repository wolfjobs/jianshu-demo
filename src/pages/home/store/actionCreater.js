/**
 *
 * @author fengjun
 * @build 2018/11/13
 *
 */

import axios from "axios/index";
import * as constants from "./constants";
import {fromJS} from "immutable";

const change_home_data = (res) => ({
  type: constants.HOME_CHANGE_DATA,
  topic_list: res.get('topic_list'),
  essay_list: res.get('essay_list'),
  recommend_list: res.get('recommend_list'),
  writer_list: res.get('writer_list'),
});


export const get_home_data = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      res = res.data;
      if (res.code === '0000') {
        res = res.data;
        dispatch(change_home_data(fromJS(res)))
      }
    }).catch((err) => {
      console.log(err)
    })
  }
};