import React from 'react'
import {BrowserRouter as Router,Link,Route} from "react-router-dom";

function Home(){
    return(
        <div>
            <h1>admin首页</h1>
        </div>
    )
}
function Me(props){
    console.log(props)
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
function News(props){
    console.log(props)
    return(
        <div>
            <h1>新闻页 新闻id:{props.match.params.id}</h1>
        </div>
    )
}
class App extends React.Component{
    render() {
        let meObj = {
            pathname:'/me',//跳转的路径
            search:'?username=admin',//get请求参数
            hash:'#abc',//设置的hash值
            state:{msg:'helloworld'}//传入组件的数据
        }
        return (
            <div id='app'>
                <Router basename='/admin'>
                    <div className='nav'>
                        <Link to='/'>Home</Link>
                        <Link to='/product'>Product</Link>
                        <Link to={ meObj }>个人中心</Link>
                        <Link to='/news/4564534'>新闻</Link>
                    </div>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/product' component={Product}></Route>
                    <Route path='/me' exact component={Me}></Route>
                    <Route path='/news/:id' component={News}></Route>
                </Router>
            </div>
        );
    }
}
export default App