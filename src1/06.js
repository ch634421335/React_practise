import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
    constructor(props) {//构造函数不会再次调用
        super(props);
        //状态
        this.state = {
            time:new Date().toLocaleTimeString()
        }
    }
    render() {
        //渲染函数会多次调用

        return (
            <div>
                <h1>现在的时间:{this.state.time}</h1>
            </div>
        )
    }
    //生命周期函数
    componentDidMount() {
        setInterval(()=>{
            this.setState({
                time:new Date().toLocaleTimeString()
            })
        },1000)
    }
}
ReactDOM.render(
    <Clock/>,
    document.querySelector('#root')
)