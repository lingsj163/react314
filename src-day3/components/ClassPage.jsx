import React, { Component } from 'react'
// 演示类式组件的生命周期

export default class ClassPage extends Component {
  // 声明数据
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    console.log('constructor:组件初始化');
    
  }

  // 在组件挂载前调用
  componentDidMount() {
    console.log('ComponentDidMount:组件已经挂载');
  }

  // 在组件更新前调用
  componentDidUpdate() {
    console.log('ComponentDidUpdate:组件已经更新');
  }


  // 在组件卸载前调用
  componentWillUnmount() {
    console.log('ComponentWillUnmount:组件即将卸载');
  }

  // 定义方法
  change = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h2>类式组件</h2>
        <p>Count:{this.state.count}</p>
        <button onClick={this.change}>点击改变count</button>
      </div>
    )
  }
}
