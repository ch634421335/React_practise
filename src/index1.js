import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class ComLife extends Component{
    constructor(props) {
        super(props);
        this.state={
            msg:'helloworld'
        }
        console.log('constructor')
    }
    componentWillMount() {
        console.log('componentWillMount')
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    shouldComponentUpdate() {
        console.log('判断是否更新')
        return false
    }

    render() {
        console.log('render')
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.changeMsg}>组件更新</button>
            </div>
        )
    }
    changeMsg=()=>{
        this.setState({
            msg:'hello2'
        })
    }
}
class ParentCom extends Component{
    constructor(props) {
        super(props);
        this.state={
            isShow:true,
        }
    }
    removeCom=()=>{
        this.setState({
            isShow:false
        })
    }
    render() {
        if(this.state.isShow){
            return(
                <div>
                    <ComLife/>
                    <button onClick={this.removeCom}>移除com</button>
                </div>
            )
        }else{
            return(
                <h1>移除ComLife</h1>
            )
        }
    }
}
ReactDOM.render(
    <ParentCom/>,
    document.querySelector('#root')
)