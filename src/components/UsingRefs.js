import React from "react";

const contactArray = [
  {
    name: "John",
    email: "john@email.com",
    phone: "111-111-111",
    age: "20",
    gender: "Male"
  },
  {
    name: "Devi",
    email: "devi@email.com",
    phone: "222-222-222",
    age: "21",
    gender: "Female"
  }
];

class UsingRefs extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: contactArray
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { contacts } = this.state,
      name = this.refs.name.value,
      email = this.refs.email.value,
      phone = this.refs.phone.value,
      age = this.refs.age.value,
      gender = this.refs.gender.value;
    this.setState(
      {
        contacts: [
          ...contacts,
          {
            name,
            email,
            phone,
            age,
            gender
          }
        ]
      },
      () => {
        this.refs.name.value = "";
        this.refs.email.value = "";
        this.refs.phone.value = "";
        this.refs.age.value = "";
        this.refs.gender.value = "";
      }
    );
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h4>{this.props.type}</h4>
        <h2>Add Someone</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="name" placeholder="name" />
          <input type="text" ref="email" placeholder="email" />
          <input type="text" ref="phone" placeholder="phone" />
          <input type="text" ref="age" placeholder="age" />
          <input type="radio" ref="gender" /> Male
          <input type="radio" ref="gender" /> female <br />
          <br />
          <button type="submit">Submit</button>
        </form>
        <h2>Exsiting contacts:</h2>
        <ul>
          {contacts.map((contact) => (
            <li>{`Name: ${contact.name} Email: ${contact.email} Phone: ${contact.phone} Age: ${contact.age} Gender: ${contact.gender}`}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UsingRefs;
