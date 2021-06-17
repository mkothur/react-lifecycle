import React, { Component } from 'react'


let menu = [
    {id: 7, text: "Configuration", parent: 5},
    {id: 1, text: "Introduction", parent: 0},
    {id: 10, text: "Services", parent: 8},
    {id: 3, text: "Chapter 2", parent: 1},
    {id: 11, text: "Endpoints", parent: 8},
    {id: 5, text: "Getting Started", parent: 0},
    {id: 6, text: "Installation", parent: 5},
    {id: 2, text: "Chapter 1", parent: 1},
    {id: 9, text: "Core", parent: 8},
    {id: 8, text: "API", parent: 5},
    {id: 12, text: "About", parent: 0},
    {id: 4, text: "Chapter 3", parent: 1},
]

export default class GenerateList extends Component {   
    state = {
        value: 0,
        name: "Jhon"
    }

    increase = () => {
        this.setState({value: this.state.value + 2})
    }
    handleClick(){
        this.setState({name: "Jack"})
    }

    render() {
        let sortedMenu = menu.sort((a, b) => (a.parent > b.parent) ? 1 : -1)
        console.log(sortedMenu)
        return (
            <>
                <ul>
                    {sortedMenu.map((data) => (
                        <li key={data.id}>
                            <h2>{data.text}</h2>
                            <h3>{data.parent}</h3>
                        </li>
                    ))}
                </ul>
                <button onClick={this.increase}>+</button>
                <h2>{this.state.value}</h2>
                <p>My name is {this.state.name}</p>
                <button onClick={() => this.handleClick()}>
                Change name
                </button>
            </>
        )
    }
}
