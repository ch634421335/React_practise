import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider,connect} from 'react-redux'

class Counter extends React.Component{
    render() {
        //计数，通过store的state传给props，直接通过props就可以获取state的值
        const value = this.props.value
        //将修改数据的方法传入props
        const onAdd = this.props.onAddClick;
    }
}