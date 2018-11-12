/**
 *
 * @author fengjun
 * @build 2018/11/8
 *
 */

import React, {Component} from 'react';
import {RecommendItem, RecommendWrap} from "../style";
import {connect} from 'react-redux'

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {recommend_list} = this.props;
    return (
      <RecommendWrap>
        {
          recommend_list.map(item=>(
            <RecommendItem key={item.get('id')} href={item.get('href')} target='_blank'>
              <img src={item.get('imgurl')} alt="" />
            </RecommendItem>
          ))
        }
      </RecommendWrap>
    );
  }
}
const mapState = (state)=>{
  return {
    recommend_list:state.getIn(['home','recommend_list'])
  }
}

export default connect(mapState,null)(Recommend)