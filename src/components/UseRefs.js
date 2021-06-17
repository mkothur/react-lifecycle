import React, {createRef} from 'react';
import ReactDOM from 'react-dom';

class UseRefs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
        // this.myInput = createRef();
    }
    updateInput(e) {
        this.setState({data: e.target.value})
    }
    clearInput() {
        this.setState({data: ''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
        // ReactDOM.findDOMNode(this.myInput.current).focus();
    }
    render() {
        return (
            <div>
                <input value={this.state.data} onChange={this.updateInput.bind(this)} ref="myInput"/>
                <button onClick={this.clearInput.bind(this)}>Clear</button>
                <h4>{this.state.data}</h4>
            </div>
        )
    }
}

export default UseRefs;