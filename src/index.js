import React from 'react';
import ReactDOM from 'react-dom';
import './04style.css'
let exampleStyle = {
    background:'skyblue',
    borderBottom:'1px solid red'
}
let element = (
    <div>
        <h1 style={exampleStyle}>helloWorld</h1>
    </div>
)
let classStr = 'redBg'
let element2 = (
    <div>
        <h1 className={'abc '+classStr}>helloWorld</h1>
    </div>
)
let classStr2 =['abc2','redBg2']
let element3 = (
    <div>
        <h1 style={{color:'red'}} className={classStr2.join(' ')}>helloWorld</h1>
    </div>
)
ReactDOM.render(
    element3,
    document.querySelector('#root')
)