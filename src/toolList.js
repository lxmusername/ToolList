import React, { Component } from 'react';
import './toolList.css';



class List extends Component {

  delItemHander() {
    console.log(this.props)
  }
  render() {
    return (
      <p>
        <span>{this.props.num} </span>
        <span>{this.props.name} </span>
        <span className='item-del' onClick={this.delItemHander.bind(this)}>del</span>
      </p>
    )
  }
}


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
    console.log(e.target.value)
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
    console.log(e.keyCode)
    if(e.keyCode==13){
      this.addHander();
    }
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
              return <List key={item.id} {...item} num={index + 1} />
            })
          }
        </div>
      </div>
    );
  }
}

