import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
let time = new Date().toLocaleTimeString()
let str = '当前时间是';
let element=(
    <div>
        <h1>hello world</h1>
        <h2>{str+time}</h2>
    </div>
)
// let man = '发热'
// let element2 = (
//     <div>
//         <h1>今天是否隔离</h1>
//         <h2>{man=='发热'? <button>隔离</button>:'居家'}</h2>
//     </div>
// )
// let man = '发热'
let element4 = (
    <div>
        <span>横着躺</span>
        <span>竖着躺</span>
    </div>
)
let man = '正常'
let element3 = (
    <div>
        <h1>今天是否隔离</h1>
        <h2>{man=='发热'? <button>隔离</button>:element4}</h2>
    </div>
)
let logo='https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
let color = 'bgRed'
let element5 = (
    <div className={color}>
        红色背景颜色
        <img src={logo} alt=""/>
    </div>
)
ReactDOM.render(
    element5,
    document.getElementById('root')
)