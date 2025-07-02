import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// 引入组件库antd里面的样式  5版本以上的
import 'antd/dist/reset.css';

// store---1.1 入口文件引入大仓库  当持久化之后，store不是默认抛出的了，所以需要也加上花括号
import { store, persistedStore } from './store/store';
import { Provider } from 'react-redux';

// 持久化相关的引入
import { PersistGate } from 'redux-persist/integration/react';

// 入口文件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // store---1.2 使用redux中的Provider组件 将整个内容包裹
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistedStore}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </PersistGate>
  {/* // 1.1 需要再入口文件将App组件使用BrowserRouter包裹起来 */}
  </Provider>
);

