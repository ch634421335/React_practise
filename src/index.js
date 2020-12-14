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
        return(
            <div>
                {
                    this.state.list.map((item,index)=>{
                        return(
                            <li key={index} onClick={()=>{this.clickFn(item.title,index)}}>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </li>
                        )
                    })
                }
            </div>
        )

    }
    clickFn=(title,index)=>{
        alert(title+'-'+index)
    }
}

ReactDOM.render(
    <Welcome/>,
    document.querySelector('#root')
)