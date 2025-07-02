import { createSlice } from "@reduxjs/toolkit";

// 1. 创建一个store
const authSlice = createSlice({
  // 定义一个名字
  name: "auth",
  // 初始化数据----登录状态
  initialState: {
    isLogin: false
  },
  // 定义修改isLogin的方法
  reducers: {
    // 定义登录方法
    login:(state) => {
      state.isLogin = true
    },

    // 定义登出方法
    logout:(state) => {
      state.isLogin = false
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
