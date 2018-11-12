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
    }
  ],
  essay_list: [{
    id: 1,
    title: "年前想月入百万，就看它。小投资，无风险，高收益",
    desc: "文/磊少 微信未来几年最大的红利是什么? 一定是社交电商！ 社交电商不可逆，大势已趋，这场红利类似 14,15年的微商，未来1-2年必然会有大批...",
    imgurl: "//upload-images.jianshu.io/upload_images/4135353-02e1c01145e92f13.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
  },
    {
      id: 2,
      title: "140字微小说‖一盘饺子",
      desc: "美食家楚楚系某市首富。 有次节目直播。 楚楚妙语连珠。 “你这一辈子最难忘的美食是什么?” 他沉默不语。 “一盘饺子”。楚楚眼里有泪光。 “有什...",
      imgurl: "",
    },
    {
      id: 3,
      title: "昨晚下雨了",
      desc: "芳菇凉 最喜欢晚上下雨，把窗帘一拉，屋里只开一盏灯，洗完澡躺在床上，拽一条毯子，看电影，什么也不想，外面是冰冷的雨，屋内是静谧的温暖，看完电影，...",
      imgurl: "//upload-images.jianshu.io/upload_images/13764631-def3733c5d437a9c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    },
    {
      id: 4,
      title: "张靓颖裹“蚊帐”勒出“蝴蝶胸”格外吸睛，网友：水土不服就服她",
      desc: "【注：本文由〖Aidress〗原创发布，禁止转载。】 选秀舞台出道的张靓颖曾是娱乐圈最励志的女孩，凭借自己的实力在歌坛闯出了属于自己的一片舞台，...",
      imgurl: "//upload-images.jianshu.io/upload_images/3949843-58646a78c2b7dfe3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
    },

  ],
  recommend_list: [
    {
      id: 1,
      imgurl: "//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png",
      href: "https://www.jianshu.com/trending/weekly?utm_medium=index-banner-s&utm_source=desktop"
    },
    {
      id: 2,
      imgurl: "//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png",
      href: "https://www.jianshu.com/trending/monthly?utm_medium=index-banner-s&utm_source=desktop"
    },
    {
      id: 3,
      imgurl: "//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png",
      href: "https://www.jianshu.com/mobile/books?category_id=284"
    },
    {
      id: 4,
      href: "https://www.jianshu.com/publications",
      imgurl: "//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
    },
    {
      id: 5,
      imgurl: "//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png",
      href: "https://www.jianshu.com/c/e048f1a72e3d?utm_medium=index-banner-s&utm_source=desktop"
    },
  ],
  writer_list:[
    {
      avatar_source: "http://upload.jianshu.io/users/upload_avatars/2587459/0c7e061f-e78e-4b09-b511-340846c4ea0f.jpg",
      id: 2587459,
      is_following_user: false,
      nickname: "穿着prada挤地铁",
      slug: "82854a3500fc",
      total_likes_count: 3280,
      total_wordage: 361327,
    },
    {
      avatar_source: "http://upload.jianshu.io/users/upload_avatars/11557689/ed2ea7f3-9d7d-41fc-a05a-daebb8097b0c.jpg",
      id: 11557689,
      is_following_user: false,
      nickname: "须僧",
      slug: "08e6960f7ed9",
      total_likes_count: 6627,
      total_wordage: 296430,
    },{
      avatar_source: "http://upload.jianshu.io/users/upload_avatars/2998364/9f8351c3734b.jpg",
      id: 2998364,
      is_following_user: false,
      nickname: "道长是名思维贩子",
      slug: "92eb338437ee",
      total_likes_count: 48759,
      total_wordage: 190040,
    },{
      avatar_source: "http://upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg",
      id: 5796592,
      is_following_user: false,
      nickname: "乔汉童",
      slug: "86b81ed8e35c",
      total_likes_count: 1608,
      total_wordage: 510137,
    }, {
      avatar_source: "http://upload.jianshu.io/users/upload_avatars/2564926/88bfdbeeb083.jpg",
      id: 2564926,
      is_following_user: false,
      nickname: "王老师八卦美术史",
      slug: "631131ed01af",
      total_likes_count: 895,
      total_wordage: 137604,
    }

  ]
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