import React, { Component } from 'react';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.delItemHander=this.delItemHander.bind(this)
    }
    delItemHander() {
        //子组件向父组件传值     通过调用父组件的方法
        //父组件的属性和方法都可以通过this.props的形式获取，其他的使用跟对象的使用一个样
        const {delItem,itemId}=this.props; //es6结构赋值
        delItem(itemId);
        // this.props.delItem(this.props.id)
    }
    render() {
        const {num,name}=this.props;//es6 解构赋值
        return (
            <p>
                <span>{num}</span>
                <span>{name}</span>
                <span className='item-del'
                    onClick={this.delItemHander}>del</span>
            </p>
        )
    }
}

