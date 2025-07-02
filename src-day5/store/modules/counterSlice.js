// 这是存放计数器相关的小仓库
import { createSlice } from "@reduxjs/toolkit";

// 1. 创建一个store
const counterSlice = createSlice({
  // 定义一个名字
  name: "counter",
  // 初始化数据
  initialState: {
    count: 10,
  },
  // 定义修改数据的方法
  reducers: {
    // 方法一： 让count +1 , increment是方法名， 可以自定义
    increment(state) {
      state.count ++;
    },
    // 方法二： 让count -1 , decrement是方法名， 可以自定义
    decrement: (state) => {
      state.count --;
    },

    // 方法三： 在组件中调用该方法， 并且组件那边需要传递一个值告知仓库，要将仓库中的数据count修改为多少
    addCount(state,action) {
      // 仓库这边是通过action.payload进行接收
      state.count = action.payload;
    }
  }
})

// 2. 解构counterSlice中的reducers里面的方法  为了能让其他页面直接使用
const { increment, decrement, addCount} = counterSlice.actions;

// 3. 获取reducer
const counterReducer = counterSlice.reducer;

// 4. 将2、3步骤按需抛出
export { increment, decrement, addCount };
export default counterReducer;