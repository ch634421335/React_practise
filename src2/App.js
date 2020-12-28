import React,{ Component } from 'react'
import {BrowserRouter as Router,Route,Link,Redirect} from  'react-router-dom'
function LoginInfo(props){
    //props.loginState = 'success'
    //props.loginState = 'fail'
    console.log(props)
    if(props.location.state.loginState == 'success'){
        return <Redirect to='/admin'></Redirect>
    }else{
        return <Redirect to='login'></Redirect>
    }
}
let FormCom = ()=>{
    let pathObj = {
        pathname:'/loginInfo',
        state:{
            loginState:'success'
        }
    }
    return(
        <div>
            <h1>表单验证</h1>
            <Link to={pathObj}>登录</Link>
        </div>
    )
}
class childCom extends React.Component{
    render() {
        return(
            <div>
                <button onClick={this.clickEvent}>跳转到首页</button>
            </div>
        )

    }
    clickEvent=()=>{
        console.log(this.props)
        this.props.history.push('/',{msg:'from childCom'})
    }
}
class App extends Component{
    render() {
        return(
            <div>
                <Router>
                    <Route path='/' exact component={(props)=>{console.log(props);return(<div><h1>首页</h1></div>)}}></Route>
                    <Route path='/form' component={FormCom}></Route>
                    <Route path='/login' exact component={()=>(<div><h1>登录</h1></div>)}></Route>
                    <Route path='/loginInfo' component={LoginInfo}></Route>
                    <Route path='/admin' component={()=>(<h1>admin</h1>)}></Route>
                    <Route path='/child' component={childCom}></Route>
                </Router>
            </div>
        )
    }
}
export default App