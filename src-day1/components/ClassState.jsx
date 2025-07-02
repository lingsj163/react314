import React, { Component } from 'react'

export default class ClassState extends Component {
  // 1.1 state里存放多个变量
  state = {
    count: 0,
    list:[1,2,3],
    person:{
      name:'Mike',
      age:11
    },
    flag:true
  }

  // 2.1 定义修改数据的方法
  change = () => {
    this.setState({
      count: this.state.count +2,
      list: [...this.state.list,4],
      person:{
        ...this.state.person,
        name:'Bob'
      },
      flag: !this.state.flag
    })
  } 

  render() {
    return (
      <div>
        <h1>这是class的state内容</h1>
        {/* 1.2 渲染数据 */}
        <p>{this.state.count}</p>
        <p>{this.state.list}</p>
        <p>{this.state.person.name}</p>
        <p>{this.state.flag ? 'true' : 'false'}</p>
        {/* 2.2 使用方法 */}
        <button onClick={this.change}>anniu</button>
      </div>
    )
  }
}
