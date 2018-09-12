import React, { Component } from 'react';

export default class TodoItem extends Component {

    delItemHander() {
        console.log(this.props)
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

