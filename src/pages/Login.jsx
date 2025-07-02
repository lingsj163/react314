import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../store/modules/authSlice'
// 登录页面， redux里有个isLogin为true的时候表示登陆状态，false表示没登录


export default function Login() {
  // 定义路由跳转
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const {isLogin} = useSelector((state) => state.auth)
  // 登录完毕 自动跳转到首页 / 
  const handleLogin = () => {
    dispatch(login())
    navigate('/')
  }
  // console.log(isLogin);
  


  return (
    <div>
      <h1>这是Login页面</h1>
      <button onClick={handleLogin}>点击登录</button>
      <button onClick={() => dispatch(logout())}>点击退出登录</button>
    </div>
  )
}
