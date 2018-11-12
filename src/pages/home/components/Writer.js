/**
 *
 * @author fengjun
 * @build 2018/11/8
 *
 */

import React, {Component} from 'react';
import {WriterFooter, WriterItem, WriterItemLink, WriterTitle, WriterWrap} from "../style";
import {connect} from 'react-redux'

class Writer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {writer_list} = this.props;
    return (
      <WriterWrap>
        <WriterTitle>
          <div className={'left'}>推荐作者</div>
          <div className={'right'}><i ref={(icon) => {
            this.spin = icon
          }} className="iconfont spin">&#xe851;</i>换一批
          </div>
        </WriterTitle>
        {
          writer_list.map(item => (
            <WriterItem key={item.get('id')}>
              <WriterItemLink className={'avatar'} href="">
                <img
                  src={item.get('avatar_source')}
                  alt=""/>
              </WriterItemLink>
              <WriterItemLink className={'follow'} href="">
                + 关注
              </WriterItemLink>
              <WriterItemLink className={'name'} href="">{item.get('nickname')}</WriterItemLink>
              <p>
                写了{item.get('total_wordage')/1000}k字 · {item.get('total_likes_count')/1000}k喜欢
              </p>
            </WriterItem>
          ))
        }
        <WriterFooter>
          查看全部 >
        </WriterFooter>
      </WriterWrap>
    );
  }
}

const mapState = (state) => {
  return {
    writer_list: state.getIn(['home', 'writer_list'])
  }
}

export default connect(mapState, null)(Writer)