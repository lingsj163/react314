import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// 入口文件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // 1.1 需要再入口文件将App组件使用BrowserRouter包裹起来
  <BrowserRouter>
    <App />
  </BrowserRouter>

);

