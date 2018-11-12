/**
 *
 * @author fengjun
 * @build 2018/11/8
 *
 */

import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width:960px;
  overflow:hidden;
  margin:0 auto;
  
`

export const HomeLeft = styled.div`
  width:640px;
  float:left;
  margin-top:20px;
  margin-left:15px;
  .banner{
    width:625px;
    height:270px;
    margin-bottom:35px;
  }
  .split-line{
    border-top:1px solid #f0f0f0;
    margin: -5px 0 30px;
  }
`

export const HomeRight = styled.div`
  width:280px;
  float:right;
`

export const TopicWrapper = styled.div`
  width:625px;
  overflow:hidden;
  margin-bottom:35px;
  margin-left:-18px;
`
export const TopicItem = styled.div`
  float:left;
  height: 32px;
  border: 1px solid #e5e5e5;
  border-radius:5px;
  overflow:hidden;
  background-color: #f7f7f7;
  padding-right:10px;
  text-align:right;
  line-height:32px;
  color:#666;
  font-size:14px;
  margin-left:18px;
  margin-bottom:18px;
  cursor:pointer;
  .topic-img{
    width:32px;
    height:32px;
    margin-right:10px;
    display:block;
    float:left;
  }
  &.lastItem{
    border:0;
    background:none
  }
`

export const ListWrapper = styled.div`
  width: 640px;
`
export const ListItem = styled.div`
  width: 625px;
  padding-right:15px;
  position:relative;
  // height:140px;
  margin-bottom: 30px;
  padding-bottom:30px;
  border-bottom:1px solid #f0f0f0
`
export const ImageWrap = styled.a`
  position: absolute;
  top: 50%;
  margin-top: -60px;
  right: 0;
  width: 125px;
  height: 100px;
  img{
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
`
export const ListInfo = styled.div`
  width:100%;
  &.has-img{
    width: 500px;
  }
  .title{
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    color:#333;
  }
  .desc{
    font-size:14px;
    color:#999;
    line-height:18px;
    margin-bottom:12px;
  }
  .icon-list{
    line-height: 20px;
    .iconfont{
      margin-right: 10px;
      color: #b4b4b4;
    }
  }
`
export const RecommendWrap = styled.div`
  margin-top: -4px;
  padding-bottom: 4px;
  padding-top:30px;
  min-height: 228px;
  
`
export const RecommendItem = styled.a`
  text-decoration: none;
  padding-top:10px;
  margin-bottom:10px;
  img{
    width:100%;
  }
`

export const QrcodeWrap = styled.a`
  display:block;
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  position:relative;
  cursor:pointer;
  img{
    width: 60px;
    height: 60px;
    opacity: .85;
    vertical-align: middle;
  }
  .word{
    display:inline-block;
    vertical-align: middle;
    margin-left: 7px;
    h3{
      font-size:15px;
      margin-bottom:8px;
    }
    p{
      font-size: 13px;
      color: #999;
    }
  }
`
export const QrcodeItem = styled.div`
  position:absolute;
  width:160px;
  height:160px;
  top:-200px;
  left:50%;
  border-radius:5px;
  padding:16px;
  margin-left:-90px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background-color: #fff;
  img{
    width: 100%;
    height: 100%;
  }
  &.show{
    display:block;
  }
  &.hide{
    display:none
  }
`
export const WriterWrap = styled.div`
  position:relative;
  box-sizing:border-box;
`
export const WriterTitle = styled.div`
  font-size: 14px;
  color: #969696;
  margin-bottom: 15px;
  .left{
    display:inline-block;
    text-align:left;
    width:50%;
  }
  .right{
    display:inline-block;
    text-align:right;
    width:50%;
  }
`

export const WriterItem = styled.div`
  overflow:hidden;
  margin-top: 15px;
  line-height: 20px;
  margin: 0 0 20px;
  .avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    img{
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 50%;
    }
  }
  .follow{
   float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
  }
  .name{
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
  }
  p{
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`
export const WriterItemLink = styled.a`
    text-decoration: none;
`
export const WriterFooter = styled.a`
  box-sizing:border-box;
  position: absolute;
  padding: 7px 7px 7px 12px;
  left: 0;
  width: 100%;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  text-align:center;
  cursor:pointer;
`


