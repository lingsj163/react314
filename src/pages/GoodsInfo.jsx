import React,{useState} from 'react'
// 引入所有的书的信息， 到时候根据路径中的动态id在信息中进行查找，找到后再页面中渲染
import goods from '../data/goods'
import { useParams } from 'react-router-dom'

export default function GoodsInfo() {
  // 书籍信息都在goods里，根据路径中的id在goods中查找对应的书籍信息
  // 1.1 获取路径中的id参数--- 获取到的值也是一个字符串
  const params = useParams()
  console.log(params); // {id: '1'}

  // 1.2 根据id在goods中查找对应的书籍信息
  const goodsInfo = goods.find((item) => item.id === Number(params.id))
  console.log(goodsInfo);
  

  
  return (
    <div>
      <h1>书籍的详情信息</h1>
      <div>
        <p>书名：{goodsInfo.name}</p>
        <p>价格：{goodsInfo.price}</p>
        <img src={goodsInfo.img} alt="" width='200px' />
      </div>
    </div>
  )
}
