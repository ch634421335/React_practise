import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider,connect} from 'react-redux'

class Counter extends React.Component{
    render() {
        console.log(this.props)
        //计数，通过store的state传给props，直接通过props就可以获取state的值
        const value = this.props.value
        //将修改数据的方法传入props
        const onAddClick = this.props.onAddClick;
        //等同于vuex的mapStation mapState
        return(
            <div>
                <h1>计数的数量:{value}</h1>
                <button onClick={onAddClick}>数字+1</button>
                <button onClick={this.props.onAddClick5}>+5</button>
            </div>
        )
    }
}



let ActionFnObj={
    add:function (state,action){
        state.num++
        return state
    },
    addNum:function (state,action){
        state.num=state.num+action.num
        return state
    }
}
function reducer(state={num:0},action){
    console.log(state,action)
    if(action.type.indexOf('redux')==-1){
        state = ActionFnObj[action.type](state,action)
        return {...state}
    }else{
        return {...state}
    }

}
const store = createStore(reducer)

//将state映射到props函数
function mapStateToProps(state){
    return{
        value:state.num
    }
}
const addAction = {
    type:'add',
}
//将修改state数据的方法映射到props,默认会传入store里的dispatch方法
function mapDispatchToProps(dispatch){
    return{
        onAddClick:()=>{dispatch(addAction)},
        onAddClick5:()=>{dispatch({type:'addNum',num:5})}
    }
}
//将上面的这两个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件
const App = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter)
ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
)