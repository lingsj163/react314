import "./App.css";
// 1. 引入Class.jsx
import ClassPage from "./components/ClassPage";
// 2. 引入 State.jsx
import State from "./components/State";
// 3. 引入 Effect.jsx
import Effect from "./components/Effect";
// 4.
import EffectArr from "./components/EffectArr";
// 5.
import Ref from "./components/Ref";
// 6.
import CallbackMemo from "./components/CallbackMemo";

// 函数式组件
function App() {
  return (
    <div className="App">

    {/* 1. ClassPage.jsx */}
    <ClassPage /> <hr />

    <State /> <hr />

    <Effect /> <hr />

    <EffectArr /> <hr />

    <Ref /> <hr />

    <CallbackMemo /> <hr />
    </div>
  );
}

export default App;
