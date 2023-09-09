import React from 'react';
import axios from 'axios';

class LoadPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            users: [],
            loading: false
        }
        this.getUsers = this.getUsers.bind(this);
    }
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then((res) => res.json())
        // .then((data) => {
        //     this.setState({
        //         posts: data,
        //         loading: true
        //     })
        // })
        // axios('https://jsonplaceholder.typicode.com/posts').then((res) => this.setState({
        //     posts: res.data,
        //     loading: true
        // }))
    }
    getUsers(){
        //   axios('https://randomuser.me/api/').then((results) => {
        //       this.setState({
        //           users: results.data.results,
        //           loading: true
        //       })
        //   })
         axios('https://jsonplaceholder.typicode.com/posts').then((res) => this.setState({
            posts: res.data,
            loading: true
        }))
    }

    render() {
        const {loading, posts, users} = this.state;
        return (
            <>
             
              <button onClick={this.getUsers}>Load Users</button>
                <ul>
                    {loading ? posts.map(post => {
                        return <li>{post.id}{post.title}</li>
                    }) : 'Loading...'}
                </ul>
             
                {/* <ul>
                    {loading ? users.map(user => {
                        return (
                           <li>{user.email}</li>
                        )
                    }) : 'Loading...'}
                </ul> */}
              
                
            </>
        )
        
    }

}

export default LoadPosts;