// 快捷生成类式组件 rcc
import React, { Component } from 'react'

export default class Class extends Component {
  // 书写js代码
  // 1.1 定义方法
  clickAlert = () => {
    alert('我是class类式组件')
  }

  // 2.1 定义变量以及初始值, 都要写在state里面
  state = {
    num: 10,
    name:'Mike',
  }

  // 2.3 定义修改变量的方法
  changeNum = () => {
    this.setState({num: this.state.num +1})
  }

  render() {
    return (
      <div>
        <h1>这是class类式组件的内容</h1>
        {/* 1.2 使用该方法，需要添加this */}
        <button onClick = {this.clickAlert}>点击跳出弹窗</button>

        {/* 2.2 使用变量  this.state.变量名 */}
        <h3>num的值是:{this.state.num}</h3>
        <button onClick={this.changeNum}>点击修改num</button>
      </div>
    )
  }
}
