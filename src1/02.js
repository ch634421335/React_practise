import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// function clock(){
//     let time = new Date().toLocaleTimeString()
//     let element = (
//         <div>
//             <h1>现在的时间是{time}</h1>
//             <h2>副标题</h2>
//         </div>
//     )
//     let root = document.querySelector('#root')
//     ReactDOM.render(element,root)
// }
// setInterval(clock,1000)
//函数式组件
function Clock(props){
    return (
        <div>
            <h1>现在的时间是{props.date.toLocaleTimeString()}</h1>
            <h2>函数式组件</h2>
        </div>
    )
}

function run(){
    ReactDOM.render(
        <Clock date={new Date()}/>,
        document.querySelector('#root')
    )
}

setInterval(run,1000)