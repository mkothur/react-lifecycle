import React from 'react'

class Child extends React.Component{
    componentWillUnmount(){
        // alert('componentWillUnmount mothod is invoked')
        // alert('This will unmount')
    }
    render(){
        // alert('render call')
        return(
            <>
            <h3>8. I am a child component</h3>
            </>
        )
    }
}

 class WillUnmountMethod extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                show: true,
            } 
    }
    render() {
        return (
            <>
              <p>{this.state.show ? <Child/> : null}</p>
               <button onClick={() => {this.setState({show: !this.state.show})}}>Click me to toggle</button>
            </>
        )
    }
}

export default WillUnmountMethod;

