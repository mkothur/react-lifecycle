import React from 'react';
import axios from 'axios'

class FetchWithDidMountMethod extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: false
        }
    }
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => this.setState({users: data}))
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            this.setState({users: response.data, loading: true})
        })

    }
    render() {
        const {users, loading} = this.state
        return (
            <div>
                <h3>6. Make Fetch API call in componentDidMount lifecycle method</h3>
                <p>This will print all the name available in API users data</p>
                {loading ? users.map(user=> <h6 key={user.id}>{user.name}</h6>) : '....'}
                
            </div>
        )
    }
}

export default FetchWithDidMountMethod;
