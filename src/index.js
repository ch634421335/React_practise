import React from 'react';
import ReactDOM from 'react-dom';
function ListItem(props){
    return(
        <li>
            <h3>{props.item.title}</h3>
            <p>{props.item.content}</p>
        </li>
    )
}
class ListItem2 extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        return(
            <li onClick={()=>{this.clickEvent(this.props.index,this.props.item.title)}}>
                <h3>{this.props.item.title}</h3>
                <p>{this.props.item.content}</p>
            </li>
        )
    }
    clickEvent=(index,title)=>{
        alert(index+'-'+title)
    }
}
class Welcome extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            list:[
                {
                    title:'react事件',
                    content:'事件的内容'
                },
                {
                    title:'第二节 数据的传递',
                    content: '数据传递的内容'
                },
                {
                    title:'第三节 条件渲染',
                    content: '数据传递的内容'
                }
            ]
        }
    }
    render() {
        let listArr = this.state.list.map((item,index)=>{
            return(
                <ListItem2  key={index} item={item} index={index}/>
            )
        })
        return(
            <div>
                <h1>今天课程内容</h1>
                <ul>
                    {listArr}
                </ul>
            </div>
        )
    }
}
ReactDOM.render(
    <Welcome/>,
    document.querySelector('#root')
)