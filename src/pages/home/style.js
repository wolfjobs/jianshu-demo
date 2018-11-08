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
    margin: -5px 0 15px;
  }
`

export const HomeRight = styled.div`
  width:240px;
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
  width: 625px;
`