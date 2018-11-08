import React, {Component} from 'react'
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
  SearchSwitch,
  SearchItem,
  SearchList
} from './style'


class Header extends Component {

  constructor(props) {
    super(props)
  }

  search_area = () => {
    const {focused, list, page, totalPage, mouseIn, search_wrap_mousse_inter, search_wrap_mousse_leave, change_list} = this.props;
    // console.log(focused, list, page);
    if (focused || mouseIn) {
      const newList = list.toJS();
      const pageList = [];
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchItem key={newList[i]}>{newList[i]}</SearchItem>
          )
        }
      }
      return (
        <SearchInfo
          onMouseEnter={search_wrap_mousse_inter}
          onMouseLeave={search_wrap_mousse_leave}
        >
          <SearchTitle>
            热门搜索
            <SearchSwitch
              onClick={() => change_list(page + 1, totalPage, this.spin)}
            ><i ref={(icon) => {
              this.spin = icon
            }} className="iconfont spin">&#xe851;</i>换一批</SearchSwitch>
          </SearchTitle>
          <SearchList>
            {pageList}
          </SearchList>
        </SearchInfo>
      )
    } else {
      return null
    }
  };

  render() {
    const {focused,list, handleFocus, handleBlur} = this.props;
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
                  onFocus={()=>handleFocus(list)}
                  onBlur={handleBlur}
                  className={focused ? "focused" : ""}/>
              </CSSTransition>
              <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>&#xe601;</i>
              {this.search_area()}
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
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus(list) {
      list.size === 0 && dispatch(actionCreaters.getList());
      dispatch(actionCreaters.searchFocus())
    },
    handleBlur() {
      dispatch(actionCreaters.searchBlur())
    },
    search_wrap_mousse_inter() {
      dispatch(actionCreaters.mouseInter())
    },
    search_wrap_mousse_leave() {
      dispatch(actionCreaters.mouseLeave())
    },
    change_list(p, t, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)"
      dispatch(actionCreaters.changeList(p, t))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)