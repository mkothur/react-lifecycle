import React from "react";

class StateUse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: "state value"
    };
  }
  updateState = () => {
    this.setState({
      counter: this.state.counter + 1
    });
    this.setState({
      message: `counter value updated to - ${this.state.counter}`
    });
  };
  /* 
    React may batch multiple setState() calls into a single update for performance.
    Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
    // Wrong
    this.setState({
      counter: this.state.counter + this.props.increment,
    });
    To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:
    setState second argument is callback function which is excuted only when once setState is Successfully updated the counter 
  */
  updateStateFn = () => {
    this.setState((state, props) => ({
      counter: state.counter + 1
    }));
    this.setState((state, props) => {
      return {
        message: `counter value updated to - ${state.counter}`
      };
    }, () => {
      console.log("counter is -", this.state.counter);
    });
  };
  render() {
    return (
      <div>
        <h2> counter is = {this.state.counter}</h2>
        <h3> {this.state.message}</h3>
        <button onClick={this.updateState}>Click to update wrong way</button>
        <button onClick={this.updateStateFn}>
          Click to update correct way
        </button>
      </div>
    );
  }
}

export default StateUse;
