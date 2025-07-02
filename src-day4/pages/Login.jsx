import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
// 实现编程式导航--- useNavigate
// 用法： cons navigate = useNavigate() 使用：navigate(路径)
// 如果想去上一页：navigate(-1) 去下一页就是navigate(1)

// 比如： 有一个按钮，点击登录，跳转到Layout页面

export default function Login() {
  // 2.2 点击方法， 会跳转到layout页面---需要先使用navigate
  const navigate = useNavigate()
  // 3.1 准备一个登录状态 isLogin 为true的时候 就能登录跳转， 为false就提示请先登录
  const isLogin = true
  const Login = () => {
    // 2.3 使用navigate方法，跳转到layout页面
    // navigate('/')

    // 3.2 判断isLogin的状态，如果为true就跳转，否则提示请先登录
    if(isLogin){
      // navigate('/') 
      // 可以去指定的页面， 也可以去页面的上一页或者下一页
      navigate(-1)
    } else{
      alert('请先登录')
    }
  }
  return (
    <div>
      <h1>这是Login页面</h1>

      {/* 1. 声明式导航跳转 */}
      <Link to='/'>
      <button>点击跳转到layout</button>
      </Link>
      
      {/* 2. 编程式导航跳转 */}
      {/* 2.1 通过特定的事件触发-- 例如添加一个点击事件 */}
      <button onClick={Login}>点击登录</button>
    </div>
  )
}
