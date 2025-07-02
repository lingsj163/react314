import React,{useContext,createContext} from "react";
// 组件通信： 跨组件通信
// 总结： 跨组件通信使用Context机制：
// 1. 使用createContext()方法创建一个连接上下文的对象
// 2. 在顶层组件使用Ctx.Provider标签包裹和底层组件相关的中间组件，在Ctx.Provider标签标签上通过value属性将数据传递出去
// 3. 底层组件使用createContext()方法接收数据


// 例如： GrandPa组件是顶层组件， An是GrandPa的子组件，Bn是An的子组件，实现GrandPa组件传值给Bn

// 跨组件通信主要是顶层和底层之间， 然后顶层向底层传递内容
// 1. 使用createContext方法 创建一个连接上下层的对象Ctx(自己命名) --- MsgContext
const MsgContext = createContext();

function An() {
  return (
    <div>
      <h3>我是An组件，是顶层组件的子组件</h3>
      <p>-------------------</p>
      {/* 渲染Bn子组件 */}
      <Bn />
    </div>
  );
}

function Bn() {
  // 3. 在底层组件里接收数据， 通过连接上下层的对象
  const getMsg = useContext(MsgContext)
  return (
    <div>
      <h3>我是Bn组件，是底层组件，是An的子组件</h3>
      <p>这是接收到的顶层组件内容--{getMsg}</p>
    </div>
  );
}

export default function GrandPa() {
  const msg = "我是顶层组件传递的内容";
  return (
    <div>
      <h1>跨组件通信--顶层组件</h1>
      {/* 2. 在顶层组件里面，使用Ctx.Provider组件提供数据，要把内部的组件包裹起来才行，这里是把An起来，使用value将数据传递出去 */}
      <MsgContext.Provider value ={msg}>
        {/* 渲染An子组件 */}
        <An />
      </MsgContext.Provider>
    </div>
  );
}
