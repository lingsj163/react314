import "./App.css";

// 1. 引入Home.jsx组件
import Home from "./components/Home";
// 2. 引入Class.jsx组件
import Class from "./components/Class";
import ClassState from "./components/ClassState";
// 3. 
import Input from "./components/Input";

// 函数式组件
function App() {
    return (
        <div className="App">
            {/* 1.1 使用Home组件 */}
            <Home></Home>
            <hr />

            {/* 2.1 渲染Class组件 */}
            <Class /> <hr />

            <ClassState></ClassState><hr></hr>

            {/* 3. 渲染Input组件 */}
            <Input></Input>
        </div>
    )
}

export default App;
