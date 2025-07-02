import React,{useState,useCallback,useMemo} from 'react'
// useCallback和useMemo的使用---都是为了优化代码

// 1.1 创建一个子组件
// 1.5 接受方法
function Child({change}) {
  console.log('我是子组件');
  
  return (
    <div>
      <h4>我是child</h4>
      <button onClick = {change}>Click me</button>
    </div>
  )
}
export default function CallbackMemo() {

  // 声明数据
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  // 1.3 ---useCallback 先给父组件定义一个方法，传递给子组件
  // 第一种：不使用useCallback ， 当父组件只要改变了，就会将该方法重新传递给子组件-子组件那边接收到的每次都是一个新的方法
  // const change = () => {
  //   console.log('Click!!--我是父组件的change方法')
  // }

  // 第二种：优化---使用useCallback，优化：当父组件其他内容改变了，只要不是传递方法改变，就不重新传递，还是第一次传递的
  // 将方法写在useCallback()里面。 依赖项为空数组就不会受其他内容变化的影响了
  // 好处： 当父组件传递给子组件方法时，子组件接收到的每次都是一个新的方法，这样子组件就会重新渲染，而如果使用useCallback，子组件接收到的每次都是同一个方法，子组件就不会重新渲染
  const change = useCallback(() => {
    console.log('Click!!--我是父组件的change方法')
  },[])

  //  2. useMemo --- 优化计算
  //  比如：输入框输入字符的时候，text改变，count不变，
  // 2.3 定义一个方法, 当count变化，value就会重新计算，并且里面的话也会打印--存在的问题，页面只要变化了，就会重新计算，即使count没有变化，也会重新执行。即同时执行打印和count*2的计算
  // const value = (() => {
  //   console.log('我是value方法');
  //   return count * 2
  // })()

  // 2.4 使用useMemo优化-- 只有当count变化了，value里面打印的内容才会执行，count*2才会计算
  const value = useMemo(() => {
    console.log('我是value方法');
    return count * 2
  },[count])

  return (
    <div>
      <h1>useMemo --- useCallback</h1>
      {/* 1.2 渲染子组件 */}
      {/* 1.4 传递给子组件方法 */}
      <Child change={change} />

      {/* 2.2 */}
      <h3>count--{count}</h3>
      {/* 渲染value */}
      <h4>value--{value}</h4>
      <button onClick={() => setCount(count+1)}>Add</button>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}
