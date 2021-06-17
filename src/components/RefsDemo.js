import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.state ={
            inputData : ''
        }
       this.inputRef = React.createRef()
       this.cbRef = null;
       this.setCbref = element => {
           this.cbRef = element;
       }
    }
    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
        if(this.cbRef) {
            this.cbRef.focus();
        }
    }

    clickhandler = () => {
        alert(this.inputRef.current.value)
    }
    update = (e) => {
        this.setState({inputData: e.target.value})
    }
    clearInput() {
        this.setState({inputData: ''});
        this.inputRef.current.focus();
    }
    
    render() {
        return (
            <div>
               <input type="text" ref={this.inputRef}  value={this.state.inputData} onChange={this.update}/>
               <button onClick={this.clickhandler}>Click to See Input value</button>
               <h3>{this.state.inputData}</h3>
               <button onClick={this.clearInput.bind(this)}>Clear Input</button>
               <input type="text" ref={this.setCbref} />
            </div>
        )
    }
}
