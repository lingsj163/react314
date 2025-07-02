// 快捷生成函数组组件 rfc
import React,{useState} from 'react'

export default function Home() {
  // 1.1 写一个点击事件- 创建方法
  const homeAlert = (e) => {
    alert('欢迎来到Home页面')
    console.log(e,'事件对象');
    
  }

  // 2. 在函数式组件里 定义和修改变量 使用hooks函数-useState()
  // 2.1 使用useState() 定义变量和修改变量的方法 const[变量， 修改方法] = useState(可选择定义初始值)
  const [num,setNum] = useState(10)

  // 2.3 自定义方法去调用setNum
  const changeNum = () => {
    setNum(30)
  }

  return (
    <div>
      <h1>这是函数式组件</h1>
      {/* 1.2 绑定点击事件： onClick={方法名} */}
      <button onClick={homeAlert}>点击出现弹窗</button>

      {/* 2.2 使用变量 */}
      <h3>这是num值:{num}</h3>
      <button onClick={() => setNum(num+1)}>点击修改num值</button>
      <button onClick={changeNum}>点击修改num变成30</button>
    </div>
  )
}
