import "./App.css";
import Function from "./components/Function";
// 1. 引入Father.jsx
import Father from "./components/Father";

// 2. 引入
import FatherSon from "./components/FatherSon";

// 3. 引入Brother.jsx
import Brother from "./components/Brother";

// 4. 引入GrandPa.jsx
import GrandPa from "./components/GrandPa";

// 5. 引入Goods.jsx
import Goods from "./components/Goods";

// 函数式组件
function App() {
  return (
    <div className="App">
      <Function></Function>
      <hr />

      {/* 1.2 使用Father.jsx */}
      <Father />
      <hr />

      {/* 2.2 使用FatherSon.jsx */}
      <FatherSon />
      <hr />

      {/* 2.3使用Brother.jsx */}
      <Brother />
      <hr />

      <GrandPa />
      <hr />

      {/* 使用Goods.jsx */}
      <Goods />
    </div>
  );
}

export default App;
