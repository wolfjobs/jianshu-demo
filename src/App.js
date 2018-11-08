import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import store from './store'
import GlobalStyle from './style';
import IconfontStyle from './statics/iconfont/iconfont';
import Header from './common/header'
import Home from "./pages/home";
import Detail from "./pages/detail";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <IconfontStyle/>
          <GlobalStyle/>
          <Header/>
          <BrowserRouter>
            <div>
              {/*<Route exact path='/detail' render={() => <div>detail</div>}/>*/}
              <Route exact path='/' component={Home}/>
              <Route exact path='/detail' component={Detail}/>

            </div>
          </BrowserRouter>
        </Fragment>
      </Provider>

    );
  }
}

export default App;
