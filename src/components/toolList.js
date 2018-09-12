import React, { Component } from 'react';
import './toolList.css';
import TodoItem from './todoItem'

export default class ToolList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { 'name': 'do job', 'id': 0 },
      ],
      inputValue: ''
    }
    // 重新指向this (比直接在dom使用的时候绑定this 代码性能更好)
    this.changeHander = this.changeHander.bind(this);
    this.enterHander = this.enterHander.bind(this);
    this.addHander = this.addHander.bind(this);
    this.deleteItem = this.deleteItem.bind(this)

  }
  changeHander(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  addHander() {
    if (!this.state.inputValue) {
      alert('新建的任务不能为空！');
      return
    }
    this.setState({
      list: [...this.state.list, { 'name': this.state.inputValue, 'id': this.state.list.length }],
      inputValue: ''
    })
  }
  enterHander(e) {
    if (e.keyCode == 13) {
      this.addHander();
    }
  }
  deleteItem(itemId) {
    console.log('list', itemId)
    let list = [...this.state.list];
    let curIndex = list.findIndex(item => {
      return item.id == itemId;
    });
    list.splice(curIndex, 1);
    this.setState({
      list: list
    })
  }
  getTodoItem() {
    return (
      //父组件通过属性的形式向子组件传递参数
      // 子组件 通过props的形式接受父组件的参数
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            delItem={this.deleteItem}
            key={item.id}
            {...item}
            num={index + 1} />
        );
      })
    )
  }
  render() {
    return (
      <div className="ToolList">
        <header className='tool-head'>
          <input type='text' ref='jobVal'
            value={this.state.inputValue}
            onChange={this.changeHander}
            onKeyUp={this.enterHander} />
          <button onClick={this.addHander}>添加任务</button>
        </header>
        <div className='tool-content'>
          <h3>Task list</h3>
          {this.getTodoItem() //使用函数精简代码
          }
        </div>
      </div>
    );
  }
}

