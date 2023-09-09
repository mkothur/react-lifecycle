import React from 'react';

class SubmitForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: null,
            password: null,
            usersList: [],
            selectValue: ''
        }
    }
    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            selectValue: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        let newUsersList = [
            ...this.state.usersList,
            {
              email: this.state.email, 
              password: this.state.password,
              gender: this.state.selectValue,
            },
          ];
         this.setState({
             usersList: newUsersList
         })

    }

    render() {
        return (
            <>
              Users List: {JSON.stringify(this.state.usersList)}
              <h3>Register</h3>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <lable for="email">Email</lable>
                <input type="text" name="email" required onChange={(event) => this.handleOnChange(event)} />
                <lable for="password">Passwrod</lable>
                <input type="password" name="password" required onChange={(event) => this.handleOnChange(event)} />
                <select onChange={(event) => this.handleOnChange(event)}>
                    <option value="select gender">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input type="submit" value="Submit" />
              </form>
            </>
        )
    }
}

export default SubmitForm;