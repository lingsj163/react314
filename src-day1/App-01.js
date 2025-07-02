// 4.1 引用的外部css文件
import './App.css';

// 函数式组件
function App() {
  // 1.1 声明变量
  const name = 'Mike'

  // 2.1 条件渲染 :三元表达式
  const flag = true 

  // 3.1 列表渲染
  const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]

// 4. style的不同引入和写法
// 4.3 声明样式的写法
const style1 = {
  color:'green',
  fontWeight:900,
  fontSize:'20px',
}

// 5.1 声明一个变量 控制类名的切换
const nameFlag = false

  return (
    // 这里写页面相关的内容，只能有最外层一个盒子, 注意：类名是className
    <div className="App">
      {/* 1.2 使用变量--使用变量的方式是: {变量名}*/}
      <h1>名字是：{name}</h1>

      {/* 2.2 使用条件渲染 */}
      {flag ? <h2>hello</h2> : <h2>你好</h2>}

      {/* 3.2 列表渲染---- 注意：必须要有key值 key值可以是每个元素的唯一标识，也可以是index索引值 */}
      {songs.map((item,index) => (
        <li key={item.id}>歌名: {item.name}</li>
      ))}

      {/* 4.2 样式的使用： 行内样式  语法： style={{属性1:'属性值1', 属性2:'属性值2'}} */}
      <p style={{color:'red', fontSize:'30px',height:'70px' ,backgroundColor:'blue'}}>我是行内样式展示的</p>
      {/* 4.3 使用声明的样式style1 */}
      <div style={style1}>使用样式</div>

      {/* 5. 实现一个盒子的类名是动态的，不同类名展示的样式不一样 例如: title box */}
      <div className={nameFlag ? 'title' : 'box'}>我是动态类名</div>

      {/* 6. 在react中， 使用单标签 需要自闭和 */}
      <span>123</span> <br />
      <span>456</span>
    </div>
  );
}

export default App;
