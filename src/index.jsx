import React from 'react';
import {render} from 'react-dom';
import {HashRouter,Route} from 'react-router-dom';
// import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import {combineReducers} from 'redux'
import {Provider} from 'react-redux' // 利用Provider可以使我们的 store 能为下面的组件所用
import {syncHistoryWithStore, routerReducer} from 'react-router-redux' // 利用react-router-redux提供的syncHistoryWithStore我们可以结合store同步导航事件
import rootData from './modules/$redux/rootReducers' // 引入reducers集合
import finalCreateStore from './modules/$redux/rootStore' // 引入增强后的store

import Dashboard from './modules/dashboard';
import {featureA} from './modules/featureA';
import 'antd/dist/antd.css';

const reducer = combineReducers({rootData, routing: routerReducer});
const store = finalCreateStore(reducer);
render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/featureA' component={featureA} />
      </div>
    </HashRouter>
  </Provider>, document.getElementById('app'));
