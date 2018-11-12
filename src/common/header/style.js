import styled from 'styled-components'
import logoPic from '../../statics/img/logo.png'

export const HeaderWrapper = styled.div `
  height:58px;
  border-bottom: 1px solid #f0f0f0;
`
export const HeaderContent = styled.div `
position:relative;  
max-width:1200px;
margin: 0 auto;
`
export const Logo = styled.a.attrs({
  href: "/"
})`
  height:58px;
  position:absolute;
  top:0;
  left:0;
  width:100px;
  background:url(${logoPic});
  background-size:contain
 `
export const Nav = styled.div `
  min-width:960px;
  width:auto;
  height:58px;
  margin:0 0 0 100px;
`
export const NavItem = styled.div `
margin-right: 10px;
color: #555;
line-height: 28px;
padding: 15px;
color: #333;
&.left{
  float:left
};
&.right{
  color:#969696;
  float:right
};
&.active{
  color: #ea6f5a;
  background: none;
}
`
export const NavSearchWrap = styled.div`
  float:left;
  margin-top: 10px;
  position:relative;  
  .zoom{
    position:absolute;
    top:4px;
    right:4px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    text-align:center;
    &.focused{
      background-color:#999;
      color:#fff;
    }
  }
`

export const SearchInfo = styled.div`
  position:absolute;
  left:0;
  top:50px;
  width: 240px;
  padding: 0 20px 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background-color:#f0f0f0;
  min-height:100px;
`
export const SearchTitle = styled.div`
  line-height: 20px;
  margin-top:20px;
  margin-bottom: 15px;
  font-size:14px;
  color:#969696;
`
export const SearchSwitch = styled.div`
  float:right;
  font-size:13px;
  color:#969696;
  cursor:pointer;
  .spin{
    display:block;
    float:left;
    font-size:10px;
    margin-right:2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`
export const SearchList = styled.div`
  overflow:hidden;
`
export const SearchItem = styled.a`
  display:block;
  float:left;
  font-size: 12px;
  line-height:20px;
  padding:0 5px; 
  border: 1px solid #969696;
  margin: 6px;
  cursor:pointer;
 color:#666;
  border-radius:3px;
`
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  border: 1px solid #eee;
  background-color: #eee;
  padding: 0 20px 0 20px;
  border-radius: 20px;
  outline:none;
  width: 160px;
  height: 38px;
  font-size: 14px;
  color:#666
  ::placeholder{
    color:#999
  }
  &.focused{
    width: 240px;
  }
  &.slide-enter{
    width:160px;
    transition:all .3s ease-out;
  }
  &.slide-enter-active{
    width:240px
  }
  &.slide-exit{
    width:240px;
    transition:all .3s ease-out;
  }
  &.slide-exit-active{
    width:160px
  }
`

export const NavBtn = styled.a `
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  float:right;

  &.sign{
    width: 80px;

    line-height: 24px;
    margin: 10px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent;
  };
  &.writen{
    width: 100px;
    line-height: 24px;
    margin: 10px 15px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
  }
`