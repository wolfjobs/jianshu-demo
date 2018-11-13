/**
 *
 * @author fengjun
 * @build 2018/11/8
 *
 */

import React, {Component, Fragment} from 'react';
import {HomeLeft, HomeRight, HomeWrapper} from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Qrcode from "./components/Qrcode";
import Writer from "./components/Writer";
import {connect} from "react-redux";
import * as actionCreater from "./store/actionCreater";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <HomeWrapper>
          <HomeLeft>
            <img
              className={'banner'}
              src="//upload.jianshu.io/admin_banners/web_images/4555/a34dbe6f8ac889163dd7980c18885554ba7939e5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              alt="540"/>
            <Topic/>
            <div className={'split-line'}/>
            <List/>
          </HomeLeft>
          <HomeRight>
            <Recommend/>
            <Qrcode/>
            <Writer/>
          </HomeRight>
        </HomeWrapper>
      </Fragment>
    );
  }

  componentDidMount() {
    this.props.handle_change_data();
  }
}

const mapState = () => ({});

const mapDispatch = (dispatch) => ({
  handle_change_data() {
    dispatch(actionCreater.get_home_data())
  }
});

export default connect(mapState, mapDispatch)(Home)