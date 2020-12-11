import React from 'react';
import ReactDOM from 'react-dom';


function UserGreet(props){
    return (<h1>欢迎登录</h1>)
}
function UserLogin(props){
    return(<h1>请先登录</h1>)
}
class Parent extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isLogin:false
        }
    }
    render() {
        let element
        if(this.state.isLogin){
            element = (<UserGreet/>)
        }else{
            element = (<UserLogin/>)
        }
        return(
            <div>
                <h1>header</h1>
                {element}
                <h1>footer</h1>
            </div>
        )
    }
}
ReactDOM.render(
    <Parent/>,
    document.querySelector('#root')
)

