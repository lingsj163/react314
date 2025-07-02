import React,{useState, createRef} from 'react'

// 3. 使用uuid随机生成一个全球返回内几乎不会重复的id
import {v4 as uuid } from 'uuid'
const id1 = uuid()
const id2 = uuid()
const id3 = uuid()
console.log(id1);
console.log(id2);
console.log(id3);


// 受控组件 和 非受控组件

export default function Input() {

  // 1. react中 受控组件相关的
  // 1.2 准备一个存放输入框内容的变量
  const [message,setMessage] = useState('这是useState准备好的内容')
  // 1.3 实现输入可以改变输入框的内容，实现和message双向控制
  const changeValue = (e) => {
    console.log(e);
    setMessage(e.target.value)
  }

  // 2.2 为input绑定ref， 使用createRef生成一个存放dom的容器
  const msgRef = createRef()
  // 2.3 获取input里的某个方法
  const clickRef = () => {
    console.log(msgRef);
    console.log(msgRef.current.value);
    
  }

  return (
    <div>
      <h1>这是input</h1>
      {/* 1.1 受控表单组件 */}
      {/* 1.1 准备一个输入框, 将value的值跟react声明的变量绑定在一起，就实现了react控制输入框内容 */}
      <input type="text" value={message} onChange={changeValue} /> <br />

      {/* 2. 非受控组件： 输入框的内容 自己输入， 不收react里useState声明的变量控制 */}
      {/* 2.1 准备输入框和按钮 */}
      {/* 2.2 为input添加ref，和创建的容器进行绑定 */}
      <input type="text" ref={msgRef} />
      <button onClick= {clickRef}>点击获取输入框里的内容</button>
    </div>
  )
}
