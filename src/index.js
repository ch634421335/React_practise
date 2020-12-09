import React from 'react';
import ReactDOM from 'react-dom';
import './tab.css'
class Tab extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            active:'',
            str:''
        }
        this.clickEvent = this.clickEvent.bind(this)
    }
    clickEvent(e){
        if(e.target.innerHTML.includes('一')){
            this.setState({
                active:'active',
                str:''
            })
        }
        else if(e.target.innerHTML.includes('二')){
            this.setState({
                str:'active',
                active:''
            })
        }
    }
    render() {
        return(
            <div>
                <button onClick={this.clickEvent}>内容一</button>
                <button onClick={this.clickEvent}>内容二</button>
                <div className={"content "+this.state.active}>
                    <h1>内容一</h1>
                </div>
                <div className={"content "+this.state.str}>
                    <h1>内容二</h1>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <Tab/>,
    document.querySelector('#root')
)