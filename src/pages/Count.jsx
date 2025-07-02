import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {increment, decrement,addCount} from '../store/modules/counterSlice'
// 该页面演示 小仓库里面的计算器的使用
export default function Count() {
  const styles = {
    width:'50px',
    height:'50px'
  }
  // 开始使用仓库里面的数据count 以及方法increment decrement
  // 使用useSelector 获取仓库里面的数据
  const {count} = useSelector((state) => state.counter )
  // 使用useDispatch 获取仓库里面的方法  能够让页面使用仓库里面的方法，当然前提是需先将方法引入到页面中，在通过useDispatch进行调用
  const dispatch = useDispatch()
  console.log(dispatch);
  

  return (
    <div>
      <h1>这是计数器</h1>
      {/* 1.2 渲染调用数据和方法 */}
      {/* 在这里 修改页面中的count 其实不会影响仓库里的count值，仓库那边的count值一直都是10，不受页面影响 */}
      <button style={styles} onClick={() => dispatch(decrement())}>-</button>
      <button style={styles}><span>{count}</span></button>
      <button style={styles} onClick={() => dispatch(increment())}>+</button>

      {/* 使用小仓库里的方法， 这个方法让count直接变成20 并且页面这里需要将修改的数据传递给仓库，仓库那里才会对应修改count值 */}
      <button onClick = {() => dispatch(addCount(20))}>count变为20</button>
    </div>
  )
}
