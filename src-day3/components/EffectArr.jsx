import React,{useState,useEffect} from 'react'
// useEffect ---依赖项
export default function EffectArr() {
  // 准备数据
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(10)
  // 1. 没有依赖项的情况: useEffect里面的代码在组件加载的时候会执行一次，当页面每次发生变化的时候，useEffect里面的代码也会执行
  // useEffect(()=> {
  //   console.log("没有依赖项");
    
  // })

  // 2. 有依赖项，并且为空数组的时候：useEffect里面的代码在组件加载的时候会执行一次，当页面发生变化的时候，useEffect里面的代码不会执行
  //   useEffect(()=> {
  //   console.log("有依赖项，为空数组");
    
  // },[])

  // 3. 有依赖项，并且有指定依赖的时候：useEffect里面的代码在组件加载的时候会执行一次，依赖项发生变化的时候，useEffect里面的代码也会执行
  useEffect(()=> {
    console.log("有依赖项----指定为num");
    
  },[num])
  return (
    <div>
      <h1>useEffect---依赖项</h1>
      <h2>Count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>改变count</button>
      <h2>Num:{num}</h2>
      <button onClick={()=>setNum(num+10)}>改变num</button>
    </div>
  )
}
