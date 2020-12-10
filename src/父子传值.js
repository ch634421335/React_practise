import React from 'react';
import ReactDOM from 'react-dom';
import './tab.css'
class Parent extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            active:true,
        }
        // this.changeShow=this.changeShow.bind(this)
    }
    render() {
        return(
            <div>
                <button onClick={this.changeShow}>控制子元素显示</button>

                <Children active={this.state.active}/>
            </div>
        )
    }
    changeShow=()=>{
        this.setState({
            active:!this.state.active
        })
    }
}
class Children extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        let str = null
        if(this.props.active){
            str='active'
        }else{
            str=''
        }
        return(
            <div className={'content '+str}>
                <h1>子元素</h1>
            </div>
        )
    }
}
ReactDOM.render(
    <Parent/>,
    document.querySelector('#root')
)