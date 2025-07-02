// 和路由相关的内容， 创建路由表

// 引入路由页面  给每个页面配置路由
import About from "../pages/About";
import Artical from "../pages/Artical";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Layout from "../pages/Layout";
import NotFound from "../pages/NotFound";

import GoodsInfo from "../pages/GoodsInfo";
import GoodsList from "../pages/GoodsList";
import Count from "../pages/Count";
import Channels from "../pages/Channels";

// 引入购物车Cart页面
import Cart from "../pages/Cart";
// 引入路由保护组件
import { Routes,Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

import APIPage from "../pages/APIPage";
import Antdpage from "../pages/Antdpage";

// 1. 配置路由表

// ！！！！！！！！！！！！！
// 要实现路由保护，也就是登录后才能去访问的路由页面 需要去添加属性requresAuth:true 表示需要被保护
const router = [
  // 一级路由
  {
    path: "/",
    element:<Layout/>,
    // 二级路由--写完之后需要去它的父路由页面， 准备一个二级路由的出口
    children:[
      {
        // 实现将home页面作为layout页面默认展示的子路由---需要添加index属性 为true
        path: "/home",
        element:<Home />,
        // 将home页面改为默认展示的二级路由页面， 需要删除path， 并添加index属性
        // index:true,
      },
      {
        path: "/about",
        element:<About />,
      }
    ],
    // --------------------------
  },
  // artical页面, 想要访问， 必须携带的有动态参数, 例如下面的id是可以变化的 不是固定的
  {
    path: "/artical/:id",
    element:<Artical />,
  },
  {
    path: "/login",
    element:<Login />,
  },
  //  404页面： 如果用户输入了路由表路由之外的路径， 就让他们跳转到NotFound页面， *表示当前存在路径之外的所有路径
  {
    path: "*",
    element:<NotFound />,
  },
  {
    path: "goodslist",
    element:<GoodsList />,
  },
  {
    path: "goodsinfo/:id",
    element:<GoodsInfo />,
  },
  {
    path:'/count',
    element:<Count />
  },
  {
    path:'/channels',
    element:<Channels />
  },
  {
    path:'/cart',
    element:<Cart />,
    requresAuth:true
  },
  {
    path:'/apipage',
    element:<APIPage />
  },
  {
    path:'/antdpage',
    element:<Antdpage />
  }
]

// 实现路由保护组件的使用， 需要对路由表进行判断
const RouteList = () => {
  return (  
  <Routes>
    {router.map((route, index) => {
      // 实现路由保护组件的使用， 需要对路由表进行判断
      // 第一种情况 一级路由有子里有的情况
      if (route.children) {
        return (
          // 一级路由
          <Route key={index} path={route.path} element={<ProtectedRoute element={route.element} requresAuth={route.requresAuth} />}>
            {/* 子路由--二级路由--遍历二级路由 */}
            {route.children.map((childRoute, index) => (
              <Route key={index} path={childRoute.path} element={<ProtectedRoute element={childRoute.element} requresAuth={childRoute.requresAuth} />}></Route>
            ))}
          </Route>
        )
      } else {
        // 第二种 只有一级路由 没有子路由
        return(
          <Route key={index} path={route.path} element={<ProtectedRoute element={route.element} requresAuth={route.requresAuth} />}></Route>
        )
      }
    })}
  </Routes>
  )
}

// 2. 抛出路由表  去App.js中引入
// export default router
export default RouteList; // 需要去App.js里稍作修改