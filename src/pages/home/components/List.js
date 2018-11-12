/**
 *
 * @author fengjun
 * @build 2018/11/8
 *
 */

import React, {Component} from 'react';
import {ImageWrap, ListInfo, ListItem, ListWrapper} from "../style";
import {connect} from 'react-redux'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {essay_list} = this.props;
    return (
      <ListWrapper>
        {
          essay_list.map((item) =>
             (
              <ListItem key={"list" + item.get('id')}>
                {item.get('imgurl') ?
                  <ImageWrap href="">
                    <img src={item.get('imgurl')} alt=""/>
                  </ImageWrap>
                  : null}
                <ListInfo className={item.get('imgurl') ? 'has-img' : ''}>
                  <h2 className={'title'}>{item.get('title')}</h2>
                  <p className={'desc'}>{item.get('desc')}</p>
                  <p className={'icon-list'}>
                    <i className="iconfont">&#xe600;</i>
                    <i className="iconfont">&#xe600;</i>
                    <i className="iconfont">&#xe600;</i>
                  </p>
                </ListInfo>
              </ListItem>
            )
          )
        }
      </ListWrapper>
    );
  }
}

const mapState = (state) => {
  return {
    essay_list: state.getIn(['home', 'essay_list'])
  }
}

export default connect(mapState, null)(List)