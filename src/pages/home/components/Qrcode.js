/**
 *
 * @author fengjun
 * @build 2018/11/8
 *
 */

import React, {Component} from 'react';
import {QrcodeItem, QrcodeWrap} from "../style";

class Qrcode extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inter: false
    }
  }

  render() {
    return (
      <QrcodeWrap
        onMouseEnter={() => {
          this.setState({
            inter: true
          })
        }}
        onMouseLeave={() => {
          const _this = this;
          let timer = setTimeout(function () {
            _this.setState({
              inter: false
            }, () => {
              clearTimeout(timer)
            })
          }, 200)
        }}
      >
        <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
        <div className={'word'}>
          <h3>下载简书手机APP ></h3>
          <p>随时随地发现和创作内容</p>
        </div>
        <QrcodeItem className={this.state.inter ? 'show' : 'hide'}>
          <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
               alt=""/>
        </QrcodeItem>
      </QrcodeWrap>
    );
  }
}

export default Qrcode