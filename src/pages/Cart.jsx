import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addItem, removeItem, updateQuantity } from '../store/modules/cartSlice'


// 1. 准备一个展示所有商品的页面组件
function ProductList() {
  // 1.1 准备商品列表
  const products = [
    { id: 1, name: "手机", price: 10 },
    { id: 2, name: "电脑", price: 20 },
    { id: 3, name: "电视", price: 30 },
    { id: 4, name: "冰箱", price: 40 },
  ]
  const dispatch = useDispatch()
  return (
    <div>
      <h1>商品列表</h1>
      {/* 1.2 渲染商品 */}
      {products.map((product) => (
        <div key={product.id}>
        <span>{product.name}-----价格:{product.price}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* 1.3 调用购物车页面的方法addItem */}
        <button onClick={() => dispatch(addItem(product))}>添加到购物车</button>
      </div>))}
    </div>
  )
}





export default function Cart() {
  // 3.1 获取到购物车仓库的数据
  const {items, total} = useSelector((state) => state.cart)
  // 3.2 调用仓库的方法
  const dispatch = useDispatch()
  return (
    <div>
      {/* 2. 渲染商品列表组件 */}
      <ProductList /> <hr />
      <h1>这是购物车的页面</h1>
      {/* 3. 渲染购物车---将cartSlice里面的items渲染出来 */}
      {items.map((item) => (
        <div key={item.id}>
        <span>{item.name}----价格:{item.price}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        {/* 4. 输入框可以更改数量 */}
        {/* e.target.value */}
        <input type="number" value={item.quantity} min={1} 
          onChange={(e) => dispatch(updateQuantity({id: item.id, quantity:e.target.value})) }  />
        <button onClick={() => dispatch(removeItem(item.id))}>删除当前商品</button>
      </div>
      ))}
      <h3>总价格:{total}</h3>
    </div>
  )
}
