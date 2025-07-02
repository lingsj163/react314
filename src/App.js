import "./App.css";
import { useRoutes } from "react-router-dom";
// import { BrowserRouter, Link, Routes, Route, NavLink } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";

// 1.1 引入路由表
// import router from "./router/router";
import RouteList from "./router/router";


// 路由第二种使用方法
function App() {
  // 1.2 使用路由表，需要先试用useRoutes解析一下路由表"router
  // const routes = useRoutes(router);
  return (
    <div className='App'>
      {/* 1.3 解析完开始使用路由---记得去index.js里面 */}
      {/* {routes} */}

      {/* !!!!!!!!!!!!! */}
      {/* 渲染表的组件RouteList */}
      <RouteList />
    </div>
  )
}

export default App;

  