import { createGlobalStyle } from 'styled-components'
const IconfontStyle = createGlobalStyle `
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1541588318436'); /* IE9*/
    src: url('./iconfont.eot?t=1541588318436#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1541588318436') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1541588318436#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default IconfontStyle;