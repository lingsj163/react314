import React, { useState } from "react";
// 组件通信： 兄弟传值：通过一个共同的父组件-- 先子传父再父传子--

// 第一个子组件ASon()
// 1.5 A组件接收父组件传递的方法
function ASon({ onGetMsg }) {
  const sonMsg = "我是A的内容，传递给B";
  return (
    <div>
      <h2>兄弟通信，子组件A</h2>
      {/* 1.1准备按钮,但是先实现子传父 */}
      {/* 1.6 使用父组件传递的方法 */}
      <button onClick={() => onGetMsg(sonMsg)}>点击传递给B组件</button>
    </div>
  );
}

// 第二个子组件BSon()
// 2.2 子组件接收strs
function BSon({ strs }) {
  return (
    <div>
      <h2>兄弟通信，子组件B</h2>
      <p>这是兄弟组件A传过来的内容---{strs}</p>
    </div>
  );
}

export default function Brother() {
  // 1.3 准备一个数据接收一下传递的msg形参
  const [str, setStr] = useState("");
  // 1.2 父组件准备一个方法，接受A组件的内容
  const getMsg = (msg) => {
    console.log("形参", msg);
    // 1.3 使用方法 将msg赋值给str， 这样的话父组件才能拿到msg内容给B
    setStr(msg);
  };
  return (
    <div>
      <h1>我是兄弟通信的父组件</h1>
      {/* 渲染两个子组件 */}
      {/* 1.4 将方法传递给A组件 */}
      <ASon onGetMsg={getMsg} />
      <p>------------</p>
      {/* 2.1 实现父传子， 将str传递给组件B */}
      <BSon strs={str} />
    </div>
  );
}
