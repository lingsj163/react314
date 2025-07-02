// 将所有的store小仓库 进行合并

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counterSlice";
import channelReducer from "./modules/channelSlice";

// 1. 将所有的模块合并
const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel: channelReducer,
  }
})

// 2. 导出大仓库  写完需要去index.js中引入大仓库
export default store;