import React from 'react';
import ReactDOM from 'react-dom';
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
        let listArr = []
        for(let i=0;i<this.state.list.length;i++){
            let item = (
                <li>
                    <h1>{this.state.list[i].title}</h1>
                    <span>{this.state.list[i].content}</span>
                </li>
            )
            listArr.push(item)
        }
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