import React,{useState} from 'react'
// 演示在同一个页面中的组件

function Fn() {
  return (
    <div>
      这是子组件
    </div>
  )
}

export default function Function() {
  const [num, setNum] = useState(0)
  return (
    <div>
      这是父组件
      {/* 渲染fn 作为子组件 */}
      <Fn></Fn>

      {/* 使用useState */}
      <p>num值是:{num}</p>
      <button onClick={() => setNum(10)}>点击修改num</button>
      <button onClick={() => setNum(num+1)}>点击修改num++</button>
    </div>
  )
}
