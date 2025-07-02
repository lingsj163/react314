import "./App.css";
import { useRoutes } from "react-router-dom";
// import { BrowserRouter, Link, Routes, Route, NavLink } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";

// 1.1 引入路由表
import router from "./router/router";

// 路由第一种使用方法
// function App() {
//   return (
//     <div className="App">
//       {/* 路由的第一种使用方法 */}
//       {/* 1. 使用路由去跳转到各个页面-- 最外层需要使用 */}
//       <BrowserRouter>
//       {/* 2. 点击某个内容跳转到某个页面, 使用Link标签包裹起来， to表示去哪里 */}
//       <Link to='/home'>
//       <button>点击跳转到Home页面</button>
//       </Link>

//       {/* 3. 将路径和对应的页面进行匹配, 最外层用一个Routes标签包裹所有Route，一个页面对应一个Route，Route身上有个path----对应的路由，element---对应的组件页面 */}
//       <Routes>
//         <Route path='/home' element={<Home />}></Route>
//         <Route path='/login' element={<Login />}></Route>
//       </Routes>


//       </BrowserRouter>
//     </div>
//   );
// }

// 路由第二种使用方法
function App() {
  // 1.2 使用路由表，需要先试用useRoutes解析一下路由表"router
  const routes = useRoutes(router);
  return (
    <div className='App'>
      {/* 1.3 解析完开始使用路由---记得去index.js里面 */}
      {routes}
    </div>
  )
}

export default App;

  