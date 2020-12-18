import React from 'react'
import {BrowserRouter as Router,Link,Route} from "react-router-dom";

function Home(){
    return(
        <div>
            <h1>admin首页</h1>
        </div>
    )
}
function Me(){
    return(
        <div>
            <h1>admin个人中心</h1>
        </div>
    )
}
function Product(){
    return(
        <div>
            <h1>admin产品</h1>
        </div>
    )
}
class App extends React.Component{
    render() {
        return (
            <div id='app'>
                <h1>所有页面都显示的普通内容</h1>
                <Router>
                    <Route path='/' exact component={()=>(<div>首页2</div>)}></Route>
                    <Route path='/product' component={()=>(<div>产品</div>)}></Route>
                    <Route path='/me' component={()=>(<div>个人中心</div>)}></Route>
                </Router>
                <Router basename='/admin'>
                    <div className='nav'>
                        <Link to='/'>Home</Link>
                        <Link to='/product'>Product</Link>
                        <Link to='/me'>个人中心</Link>
                    </div>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/product' component={Product}></Route>
                    <Route path='/me' exact component={Me}></Route>
                </Router>
            </div>
        );
    }
}
export default App