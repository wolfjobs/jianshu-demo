/**
 *
 * @author fengjun
 * @build 2018/11/7
 *
 *
 * header组件的无状态形式代码
 *
 */

import React from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {actionCreaters} from './store'
import {
  HeaderWrapper,
  HeaderContent,
  Logo,
  Nav,
  NavItem,
  NavSearchWrap,
  SearchInfo,
  NavSearch,
  NavBtn,
  SearchTitle,
  SearchSwitch, SearchItem, SearchList
} from './style'

const search_area=(show)=>{
  if(show){
    return(
      <SearchInfo>
        <SearchTitle>
          热门搜索
          <SearchSwitch>换一批</SearchSwitch>
        </SearchTitle>
        <SearchList>
          <SearchItem>电影</SearchItem>
          <SearchItem>测试</SearchItem>
          <SearchItem>前端</SearchItem>
          <SearchItem>p2p</SearchItem>
          <SearchItem>电影</SearchItem>
          <SearchItem>测试</SearchItem>
          <SearchItem>前端</SearchItem>
          <SearchItem>p2p</SearchItem>
        </SearchList>
      </SearchInfo>
    )
  }else{
    return null
  }
}

const Header = ({focused, handleFocus, handleBlur}) => {
  // const {focused,handleFocus,handleBlur} = props;
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavSearchWrap>
            <CSSTransition
              in={focused}
              timeout={300}
              classNames="slide"
            >
              <NavSearch
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={focused ? "focused" : ""}/>
            </CSSTransition>
            <i className={focused ? "focused iconfont" : "iconfont"}>&#xe601;</i>
            {search_area(focused)}
          </NavSearchWrap>
          <NavBtn className="writen"><i className="iconfont">&#xe600;</i>写文章</NavBtn>
          <NavBtn className="sign">注册</NavBtn>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right"><i className="iconfont">&#xeb4e;</i></NavItem>
        </Nav>
      </HeaderContent>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused'),
    focused: state.getIn(['header', 'focused'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus() {
      dispatch(actionCreaters.searchFocus())
    },
    handleBlur() {
      dispatch(actionCreaters.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)