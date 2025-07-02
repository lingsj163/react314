import React,{useRef} from 'react'
// useRef ---- hooks函数
export default function Ref() {
  // 案例： 点击一个按钮，实现输入框聚焦
  // 1. 创建一个ref
  const inputRef = useRef(null)

  // 3. 给按钮添加点击事件
  const focusInput = () => {
    // 4. 指向绑定的元素input 使用ref(创建的).current
    console.log(inputRef.current);
    // focus(): 是输入框自身就有的方法，聚焦
    inputRef.current.focus()
    
  }
  return (
    <div>
      <h1>useRef</h1>
      {/* 2. 要被获取的元素 和 ref绑定 */}
      <input type="text" placehoder = '点击聚焦我' ref={inputRef} />
      <button onClick = {focusInput}>点击聚焦输入框</button>
    </div>
  )
}
