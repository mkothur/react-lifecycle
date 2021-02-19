import React from 'react';


class ChildComponenet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Constructor Method 1"
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {name: props.nameFromParent}
    }

    render() {
        return (
            <div>
                <h4>{this.state.name}</h4>
            </div>
        )
    }
}

class GetDerivedStateFromPropsMethod extends React.Component {
    render() {
        return (
            <div>
                <ChildComponenet nameFromParent = "9.Name from getDerivedStateFromProps Method" />
            </div>
        )
    }
}

export default GetDerivedStateFromPropsMethod;