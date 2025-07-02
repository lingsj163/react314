import React from 'react'
// useLocation: 用来获取当前路径后面拼接的参数
import { useLocation } from 'react-router-dom'

// 例如：当前路径是http://localhost:3000/?id=2  => ?id=2就是拼接的 查询参数

export default function Home() {
  // 1. 使用useLocation获取当前路径信息
  const location = useLocation()
  console.log(location); // {pathname: '/', search: '?id=2', hash: '', state: null, key: 'default'}
  // 2. 获取当前路径和查询参数参数
  const path = location.pathname
  const search = location.search

  // 3. 获取参数的具体值 也就是?id=2后面的2， 需要使用 newURLSearchParams()来解析
  const query = new URLSearchParams(search)
  console.log(query); // URLSearchParams {size: 1}  只能知道拼接了几个参数，不能知道具体的值
  // 3.2 解析一下query, 使用get获取到某个拼接参数的值
  const keyWords = query.get('id')
  console.log(keyWords); // 2  注意： 获取到的参数的值是字符串类型410.
  
  
  return (
    <div>
      <h1>这是Home页面</h1>
      <h2>当前的路径信息</h2>
      <p>当前的路径:{path} </p>
      <p>当前的查询参数:{search} </p>
      <p>参数的具体值:{keyWords} </p>
    </div>
  )
}
