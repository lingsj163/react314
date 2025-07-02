import React from 'react'

// 3.1 子组件使用父组件传递的strs--- 子组件通过props接收, 不想在页面中一直使用props.的写法，可以将props解构。将(props)改为({strs,age,list,obj}) , 下面再使用就可以不需要加props.了
export default function Child(props) {
  console.log(props,'我是Child'); // {strs: '我是父组件的内容'}strs: "我是父组件的内容"[[Prototype]]: Object '我是Child'
  
  return (
    <div>
      <h1>这是子组件</h1>
      {/* 3.2 子组件使用父组件的内容-- 通过props */}
      <p>这句话是从父组件哪里接收到的---{props.strs}</p>
      {/* 3.3 渲染其他的内容 */}
      <p>age:{props.age}---数组:{props.list}---obj:{props.obj.name}</p>
    </div>
  )
}
