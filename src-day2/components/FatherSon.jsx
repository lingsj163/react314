import React from 'react'
import {useState} from 'react'
// 组件通信： --- 子传父
// 总结：先父传子一个方法，再把数据子传父
// 1. 父组件先声明一个接受数据的方法
// 2. 父组件将方法传递给子组件
// 3. 子组件接收父组件传递的方法---父传子
// 4. 子组件使用父组件传递的方法，并将数据作为参数传给父组件---子传父


// 1.1 准备子组件
// 2.3 子组件需要先接受父组件传递的方法
function Son({onGetMsg}) {
  // 1.3 子组件准备数据
  const sonMsg = '我是子组件的内容，这句话在父组件展示'
  return(
    <div>
      <h1>我是实现子传父的--子组件</h1>
      {/* 1.4 准备一个button, 当点击按钮的时候 子组件将内容传递过去 */}
      {/* 2.4 点击按钮， 调用父组件传递的方法，并且将传递的内容作为实参传递 */}
      <button onClick={() => onGetMsg(sonMsg)}>点击传递sonMsg</button>
    </div>
  )
}

export default function FatherSon() {
  // 3.1 如果拿到的内容也就是形参msg 想要在父组件页面中渲染
  const [str,setStr] = useState('我还没接收到')
  // 2.1 实现子传父， 父组件需要先准备一个函数/方法---为了让子组件知道我这边有接受内容的方法了
  const getMsg = (msg) => {
    console.log('这是getMsg方法--msg是形参',msg); // 这是getMsg方法--msg是形参 我是子组件的内容，这句话在父组件展示
    setStr(msg)
    
  }
  return (
    <div>
      <h1>我是实现子传父的--父组件</h1>
      <p>接受子组件的内容000{str}</p>

      {/* 1.2 渲染子组件 */}
      {/* 2.2 在引入的子组件标签身上，将父组件准备的方法 传递给子组件， --子组件使用该方法将内容传过来 */}
      <Son onGetMsg = {getMsg} />
    </div>
  )
}
