import React, { Component } from 'react';

export default class TodoItem extends Component {

    delItemHander() {
         //子组件向父组件传值     通过调用父组件的方法
         //父组件的属性和方法都可以通过this.props的形式获取，其他的使用跟对象的使用一个样
        this.props.delItem(this.props.id)
    }
    render() {
        return (
            <p>
                <span>{this.props.num} </span>
                <span>{this.props.name} </span>
                <span className='item-del'
                    onClick={this.delItemHander.bind(this)}>del</span>
            </p>
        )
    }
}

