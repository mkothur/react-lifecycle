import React from 'react';

class DidUpdateMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'from previous state'
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: 'to current state'
            })
        }, 3000)
    }
    componentDidUpdate(prevState) {
        if(prevState.name !== this.state.name) {
            document.getElementById('statechange').innerHTML = "7.Yes the state is changed"
            // this.setState({
            //     name: 'Yes the state is changed'
            // })
        }
    }
    render() {
        return (
            <div>
                State was changed  {this.state.name}
                <p id="statechange"></p>
            </div>
        )
    }
}

export default DidUpdateMethod;
