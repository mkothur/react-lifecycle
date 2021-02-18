import React from "react";
import "../styles.css";

class Cunstructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "cunstructor() method example"
    };
  }
  render() {
    return (
      <div>
        <h4> 1. This is a {this.state.name}</h4>
      </div>
    );
  }
}

class Counter extends React.Component {
  state = {
    counter: 0
  };
  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    return (
      <div>
        <Cunstructor />
        <h4>{this.props.type}</h4>
        counter value : {this.state.counter} <br /> <br />
        <button
          className="inc-button"
          onClick={this.incrementCounter.bind(this)}
        >
          increment
        </button>
      </div>
    );
  }
}

export default Counter;
