import React from "react";

class DidMountMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "This name will change after 5 secs"
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "5.This is a componentDidMount Method" });
    }, 5000);
  }
  render() {
    return (
      <div>
        <p>
          This example will print This is a componentDidMount Method after 5
          sec. This proves that the method is called after the component is
          rendered.
        </p>
        <h3>{this.state.name}</h3>
      </div>
    );
  }
}

export default DidMountMethod;
