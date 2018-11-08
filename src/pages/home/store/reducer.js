/**
 *
 * @author fengjun
 * @build 2018/11/8
 *
 */
import {fromJS} from 'immutable'

const defaultState = fromJS({
  topic_list: [{
      id: 1,
      title: "故事",
      imgUrl: "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 2,
      title: "摄影",
      imgUrl: "//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 3,
      title: "@IT·互联网",
      imgUrl: "//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 4,
      title: "自然科普",
      imgUrl: "//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 5,
      title: "读书",
      imgUrl: "//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 6,
      title: "旅行·在路上",
      imgUrl: "//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }]
});

const reducer = (state = defaultState, action) => {
  /*
  * immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
  * */
  switch (action.type) {


    default:
      return state;
  }

}

export default reducer