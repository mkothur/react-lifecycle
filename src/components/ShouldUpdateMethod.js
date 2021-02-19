import React from 'react';

class ShouldUpdateMethod extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        name: 'shouldComponentUpdate Method'
      }
    }
    shouldComponentUpdate() {
      return false; //Change to true for state to update
    }
  
    componentDidMount(){
      setTimeout(() => {
        this.setState({name: "componentDidMount Method"})
      }, 5000)
    }
    render() {
      return (
        <div>
         <h4>10. This is a {this.state.name}</h4>
        </div>
      )
    }
}

export default ShouldUpdateMethod;
