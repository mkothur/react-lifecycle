import React from 'react';
import axios from 'axios';

class FetchData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            users: [], 
            persons: [],
            loading: false

        }
        this.IncreaseCountValue = this.IncreaseCountValue.bind(this);
    }
    IncreaseCountValue() {
        this.setState({counter: this.state.counter + 1})
    }

    getUserData () {
        fetch('https://randomuser.me/api/').then(res => res.json()).then((data) => {
            this.setState({ users: data, loading: true })
          })
        axios.get('https://randomuser.me/api/').then(response => this.setState({users: response.data, loading: true}))
    }

    componentDidMount() {
        // this.getUserData();
        fetch('https://randomuser.me/api/').then(res => res.json()).then().then((data) => {
            // console.log(data.results)
            this.setState({ users: data.results, loading: true })
        })
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => this.setState({persons: data, loading: true}))
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => this.setState({persons: response.data, loading: true}))
    }
   

    render() {
        const {users, persons, loading} = this.state;
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.IncreaseCountValue}>+</button>
                 {loading ? <pre>{JSON.stringify(users)}</pre> : <p>Loading...</p>}
                <button onClick={this.getUserData.bind(this)}>Load</button>
                 {loading ? <h5>{users.gender}</h5> : '....'} 
               
                {loading ? (
                    persons.map(user => {
                    const { username, name, email } = user;
                    return (
                        <div key={username}>
                        <p>Name: {name}</p>
                        <p>Email Address: {email}</p>
                        <hr />
                        </div>
                    );
                    })
                // If there is a delay in data, let's let the user know it's loading
                ) : (
                    <h3>Loading...</h3>
                )}
            </div>
        )
    }
}


export default FetchData;
