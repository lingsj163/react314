import React,{useState} from "react";
// 案例：实现父组件提供商品数据，子组件渲染商品列表，并且子组件可以删除商品

// 1.3 子组件接收数据
function ListItem({ lists }) {
  console.log(lists, "商品数据");
  // 2.3 如果想修改父组件传递过来的内容，那就需要用一个变量接收一下，才能修改
  const [goods,setGoods] = useState(lists)
  // 2.4 定义一个方法 用来删除数据
  // filter: 过滤得到的是一个数组，保留符合条件的 哪项
  const delGood = (id) => {
    setGoods(goods.filter((item) => item.id !== id))
  }

  return (
    <div>
      <h3>这是渲染所有商品的子组件</h3>
      {/* 2.1 子组件准备结构并渲染 */}
      {goods.map((item) => (
        <div key={item.id} style={{border:'1px solid black', margin:"10px"}}>
          <p>name:{item.name}</p>
          <p>price:{item.price}</p>
          <p>info:{item.info}</p>
          {/* 2.2 准备删除按钮 */}
          <button onClick = {() => delGood(item.id)}>点击删除</button>
        </div>
      ))}
    </div>
  );
}

export default function Goods() {
  // 1.1 父组件提供数据列表
  const allList = [
    {
      id: 1,
      name: "超级好吃的棒棒糖",
      price: 18.8,
      info: "开业大酬宾，全场8折",
    },
    {
      id: 2,
      name: "超级好吃的大鸡腿",
      price: 34.2,
      info: "开业大酬宾，全场8折",
    },
    {
      id: 3,
      name: "超级无敌的冰激凌",
      price: 14.2,
      info: "开业大酬宾，全场8折",
    },
  ];

  return (
    <div>
      <h1>这是存放商品数据的父组件</h1>
      <p>--------------------------</p>
      {/* 渲染子组件 */}
      {/* 1.2 将allList传递给子组件 */}
      <ListItem lists={allList} />
    </div>
  );
}
