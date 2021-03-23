import React from 'react';
import ReactDOM from 'react-dom';
import './tab.css'

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childrenData: ''
        }
    }

    render() {
        return (
            <div>
                <h1>子传父的数据{this.state.childrenData}</h1>
                <Child setChildrenData={this.setChildrenData}/>
            </div>
        )
    }
    setChildrenData=(data)=>{
        this.setState({
            childrenData: data
        })
    }
}

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'hello world'
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.sendData}>传递数据</button>
                <button onClick={()=>{this.props.setChildrenData('hello2')}}>直接传</button>
            </div>
        )
    }
    sendData=()=>{
        this.props.setChildrenData(this.state.msg)
        console.log(this.props)
    }
}
ReactDOM.render(
    <Parent/>,
    document.querySelector('#root')
)