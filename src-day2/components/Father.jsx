import React from 'react'
// 组件通信： 实现 父传子-----1. 父组件要传递的数据在渲染的子组件标签上 通过一个变量传递 2. 子组件通过props接收

// 1.1 引入子组件
import Child from './Child'

// 4. 还有一个Son 组件 也实现父传子
// 4.2 子组件接收<span>我是传递给Son组件的</span>
function Son(props) {
  console.log('Son',props);
  
  return(
    <div>
      <h1>我是Son组件</h1>
      <p>使用父组件传递的span内容---{props.children}</p>
    </div>
  )
}

export default function Father() {
  // 2.1 父组件中准备数据 str需要传递给子组件Child
  const str = '我是父组件的内容'

  return (
    <div>
      <h1>这是父组件</h1>
      {/* 2.2 父组件自身使用渲染 */}
      <p>我是父组件有一句话：{str}</p>
      {/* 1.2 使用子组件 */}
      {/* 2.3 将数据通过渲染的子组件标签传递给Child--strs自己取的名 */}
      <Child strs = {str}  age={18} list={['abc','aaa']} obj={{name:'Mike',pet:'cat'}}/>

      {/* 4.2 渲染Son组件 */}
      <Son><span>我是传递给Son组件的</span></Son>
    </div>
  )
}
