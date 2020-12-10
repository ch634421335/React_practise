import React from 'react';
import ReactDOM from 'react-dom';
import './tab.css'

class Parent extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div>
                <form action="https://www.baidu.com">
                    <div className='child'>
                        <h1>hello world</h1>
                        <button onClick={this.parentEvent}>button</button>
                    </div>
                </form>

                <button onClick={(e)=>{this.event(123,e)}}>button2</button>
            </div>
        )
    }
    parentEvent=(e)=>{
        console.log(e)
        e.preventDefault()
    }
    event=(data,e)=>{
        console.log(data,e)
    }
}
class Child extends React.Component{
    constructor(props) {
        super(props);
    }
}
ReactDOM.render(
    <Parent/>,
    document.querySelector('#root')
)