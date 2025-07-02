import React,{useState} from 'react'
// 使用useState() ---- hooks函数

export default function State() {

  // 1. 案例1： 计数器， 可以增加或者减少数字， 或者重置
  const [num, setNum] = useState (0)
  // 定义增加的方法
  const add = () => {
    setNum(num + 1)
  }

  // 2. 案例2： 表单输入，管理输入框的状态, 还可以一键清空
  const[text, setText] = useState('') // 刚开始定义输入框的状态为空

  // 3. 案例3： 切换开关， 状态管理
  const [isON,setIsOn] = useState(false)

  // 4. 案例4： 定义一个变量， count, 可以直接使用num的初始值
  const [count, setCount] = useState(() => {
    return num
  })

  return (
    <div>
      <h1>useState</h1>
      {/* 案例1 */}
      <h5>计数器:{num}</h5>
      <button onClick={() => setNum(num - 1)}>-减少</button>
      <button onClick={add}>+增加</button>
      <button onClick={() => setNum(0)}>重置</button>

      {/* 案例2 */}
      <h5>输入框的内容：{text}</h5>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={() => setText('')}></button>

      {/* 案例3 */}
      <h5>开关状态：{isON ? '开门' : '关门'}</h5>
      <button onClick={() => setIsOn(!isON)}>点击切换开关状态</button>

      {/* 案例4 */}
      <h5>count: {count}</h5>
      <button onClick= {() => setCount(count + 10)}>改变count</button>
    </div>
  )
}
