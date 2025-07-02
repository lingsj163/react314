import React,{useEffect,useState} from 'react'
// useEffect --- hooks函数

// 1. 声明一个子组件
function Child() {
  // 2. 子组件里有一个定时器， 每隔1s打印一句话
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('子组件定时器执行中...');
      
    }, 1000)
    // 4. 当点击销毁子组件的时候， 子组件不在展示了但是定时器却还没有消除掉，这就是带来的副作用
    // 消除定时器的方法是 写在useEffect的return函数里
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <h1>子组件</h1>
    </div>
  )
}

export default function Effect() {
  // 3. 定义一个销毁子组件的变量 为false的时候让子组件隐藏，就等于父组件不使用子组件了
  const [isShow, setIsShow] = useState(true)
  return (
    <div>
      <h1>useEffect</h1>
      {/* 渲染子组件 */}

      {/* 3.2 当isShow为true的时候，子组件展示 */}
      {/* {isShow && <Child />} */}
      {/* 3.1 实现一个按钮控制显示和隐藏 */}
      <button onClick = {() => setIsShow(false)}>销毁子组件</button>
    </div>
  )
}
