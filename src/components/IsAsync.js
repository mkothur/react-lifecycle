import React, { Component } from 'react'



export default class IsAsync extends Component {
    state = {
        count: 5
    }
    componentDidMount() {
        console.log("before", this.state.count)
        this.setState((prevState) => ({
            count: prevState.count + 1
        }), () => {
            console.log(this.state.count)
        })
        console.log("After", this.state.count)
    }

    
    
    render() {
        return (
            <>
                
            </>
        )
    }
}
