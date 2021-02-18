import React from "react";
import "../styles.css";

class FormData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: null,
      email: null,
      selectValue: "",
      usersList: [],
      gender: "gender"
    };
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      selectValue: e.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    //const gender = this.state.selectValue;
    //console.log(gender);
    let newData = [
      {
        ...this.state.usersList,
        [this.state.email]: this.state.password,
        [this.state.gender]: this.state.selectValue
      }
    ];
    this.setState({
      usersList: newData
    });
  }
  render() {
    return (
      <div className="form-data">
        <h4>{this.props.type}</h4>
        Users List: {JSON.stringify(this.state.usersList)}
        <h3>Register</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label for="uname">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            required
            onChange={this.onChange.bind(this)}
          />
          <label for="pass">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={this.onChange.bind(this)}
          />
          <select id="dropdown" onChange={this.onChange.bind(this)}>
            <option value="select">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default FormData;
