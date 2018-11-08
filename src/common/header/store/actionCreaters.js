import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'

const change_search_item_list = (data) => ({
  type: constants.SEARCH_FOCUS_GET_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});
export const change_list = (data) => ({
  type: constants.CHANGE_LIST,
  page: fromJS(data)
});
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});
export const mouseInter = () => ({
  type: constants.MOUSE_INTER
});
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});

export const changeList = (p,t) => {
  return (dispatch) => {
    if (p > t) {
      p = 1
    }
    const page = p;
    dispatch(change_list(page))
  }
};


export const getList = () => {
  return (dispatch) => {
    axios.get('/api/search_item.json').then((res) => {
      if (res.data.code === '0000') {
        dispatch(change_search_item_list(res.data.data))
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}