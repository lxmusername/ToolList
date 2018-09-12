import React, { Component } from 'react';
import './toolList.css';
import TodoItem from './components/todoItem.js'

export default class ToolList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { 'name': 'do job', 'id': 0 },
      ],
      inputValue: ''
    }
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
  render() {
    return (
      <div className="ToolList">
        <header className='tool-head'>
          <input type='text' ref='jobVal'
            value={this.state.inputValue}
            onChange={this.changeHander.bind(this)}
            onKeyUp={this.enterHander.bind(this)} />
          <button onClick={this.addHander.bind(this)}>添加任务</button>
        </header>
        <div className='tool-content'>
          {
            //父组件通过属性的形式向子组件传递参数
            // 子组件 通过props的形式接受父组件的参数
            this.state.list.map((item, index) => {
              return <TodoItem delItem={this.deleteItem.bind(this)} key={item.id} {...item} num={index + 1} />
            })
          }
        </div>
      </div>
    );
  }
}

