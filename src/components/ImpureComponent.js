import React from 'react';

class ImpureComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        setInterval(() => {
            this.setState({
              counter: 0
            });
        }, 1000);
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
              counter: 0
            });
        }, 1000);
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     return (this.state.counter === nextState.counter ? false: true)
    // }
    render() {
        console.log("impure component");
        return <b>Counter Value: {this.state.counter}</b>
    }
}   
   
export default ImpureComponent;


