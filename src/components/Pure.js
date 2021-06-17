import React from 'react';

class Pure extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        // setInterval(() => {
        //     this.setState({
        //       counter: 0
        //     });
        // }, 1000);
    }
     // componentDidMount() {
    //     setInterval(() => {
    //         this.setState({
    //           counter: 0
    //         });
    //     }, 1000);
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     return (this.state.counter === nextState.counter ? false: true)
    // }
    render() {
        console.log("purecomponent");
        return <b>Counter Value: {this.state.counter}</b>
    }
}   
   
export default Pure;


