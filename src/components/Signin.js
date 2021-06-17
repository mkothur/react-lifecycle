import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';

// const Signin = () => {
//   const [rememberMe, setRemember] = useState(false);
//   const handleChange = (event) => {
//     const input = event.target;
//     const value = input.type === 'checkbox' ? input.checked : input.value;

//     setRemember({ [input.name]: value });
//   };
//   useEffect(() => {
//     const remember = localStorage.getItem('rememberMe') === 'true';
//     setRemember(remember);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('my-check-value', rememberMe);
//   });
//   return (
//     <>
//       <label>
//         <input
//           name='rememberMe'
//           checked={rememberMe}
//           onChange={handleChange}
//           type='checkbox'
//         />
//         Remember me
//       </label>
//     </>
//   );
// };

class SignIn extends React.Component {
  state = {
    user: '',
    rememberMe: false,
  };

  componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const user = rememberMe ? localStorage.getItem('user') : '';
    this.setState({ user, rememberMe });
  }

  handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { user, rememberMe } = this.state;
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('user', rememberMe ? user : '');
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          User:
          <input
            name='user'
            value={this.state.user}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            name='rememberMe'
            checked={this.state.rememberMe}
            onChange={this.handleChange}
            type='checkbox'
          />
          Remember me
        </label>
        <button type='submit'>Sign In</button>
      </form>
    );
  }
}
export default SignIn;
