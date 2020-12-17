import React from 'react'
import ReactDom from 'react-dom'

class Parent extends React.Component{
    render() {
        console.log(this.props)
        return(
            <div>
                <h1>组件插槽</h1>
                {this.props.children}
                <Child>
                    <h1 data-position='head'>这是放置到头部的内容</h1>
                    <h1 data-position='body'>这是放置到主体的内容</h1>
                    <h1 data-position='foot'>这是放置到尾部的内容</h1>
                </Child>
            </div>
        )
    }
}
class Child extends React.Component{
    render(){
        let headCom,bodyCom,footCom
        this.props.children.forEach((item,index)=>{
            if(item.props['data-position']=='head'){
                headCom=item
            }else if(item.props['data-position']=='body'){
                bodyCom = item
            }else if(item.props['data-position']=='foot'){
                footCom = item
            }
        })
        return(
            <div>
                <div className='head'>
                    {headCom}
                </div>
                <div className='body'>
                    {bodyCom}
                </div>
                <div className='foot'>
                    {footCom}
                </div>
            </div>
        )
    }
}
class RootCom extends React.Component{
    constructor(props) {
        super(props);
        console.log(props)
        this.state={
            arr:[1,2,3]
        }
    }
    render() {
        return(
            <Parent>
                <h2 data-name="aaa" data-index={this.state.arr[0]}>子组件1</h2>
                <h2 data-name="bbb" data-index={this.state.arr[1]}>子组件2</h2>
                <h2 data-name="ccc" data-index={this.state.arr[2]}>子组件3</h2>
            </Parent>
        )
    }
}
ReactDom.render(
    <RootCom/>,
    document.querySelector('#root')
)