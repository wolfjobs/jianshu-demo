/**
 *
 * @author fengjun
 * @build 2018/11/8
 *
 */

import React, {Component} from 'react';
import {TopicItem, TopicWrapper} from "../style";
import {connect} from "react-redux";

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {topic_list} = this.props;
    return (
      <TopicWrapper>
        {topic_list.map((item) => {
          return (
            <TopicItem key={item.get('id')}>
              <img className={'topic-img'}
                   src={item.get('imgUrl')}
                   alt={item.get('title')}/>
              {item.get('title')}
            </TopicItem>
          )
        })}
        <TopicItem className={'lastItem'}>
          更多热门专题 >
        </TopicItem>
      </TopicWrapper>
    );
  }
}

const mapState = (state) => {
  return {
    topic_list: state.getIn(['home', 'topic_list'])
  }
};

export default connect(mapState, null)(Topic)