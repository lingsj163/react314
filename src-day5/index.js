import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// store---1.1 入口文件引入大仓库
import store from './store/store';
import { Provider } from 'react-redux';

// 入口文件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // store---1.2 使用redux中的Provider组件 将整个内容包裹
  <Provider store={store}>
    
  {/* // 1.1 需要再入口文件将App组件使用BrowserRouter包裹起来 */}
  <BrowserRouter>
    <App />
  </BrowserRouter>

  </Provider>
);

