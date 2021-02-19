import React from 'react';

class DidUpdateMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'this is previous state'
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: 'this is current state'
            })
        }, 10000)
    }
    componentDidUpdate(prevState) {
        if(prevState.name !== this.state.name) {
            document.getElementById('statechange').innerHTML = " Yes the state is changed"
            // this.setState({
            //     name: 'Yes the state is changed'
            // })
        }
    }
    render() {
        return (
            <div>
                <h3 id="statechange">7. {this.state.name}</h3>
            </div>
        )
    }
}

export default DidUpdateMethod;
