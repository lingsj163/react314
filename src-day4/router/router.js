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

// 1. 配置路由表
const router = [
  // 一级路由
  {
    path: "/",
    element:<Layout/>,
    // 二级路由--写完之后需要去它的父路由页面， 准备一个二级路由的出口
    children:[
      {
        // 实现将home页面作为layout页面默认展示的子路由---需要添加index属性 为true
        // path: "/home",
        element:<Home />,
        // 将home页面改为默认展示的二级路由页面， 需要删除path， 并添加index属性
        index:true,
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
]


// 2. 抛出路由表  去App.js中引入
export default router