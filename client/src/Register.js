import React, { Component } from 'react';


var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class Register extends Component {

  handleChange = (e) => {
    let key;
    if (e.target.name === 'email') {
      key = 'email';
    } else if (e.target.name === 'password') {
      key = 'password';
    } else {
      key = 'passwordConfirmation'
    }

    const registration = this.props.registration;
    registration[key] = e.target.value;
    this.setState({registration: {registration}})
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onRegistrationSubmit(this.props.registration);
  }
//
  render() {
    return (
        <form style={borderStyles} onSubmit={this.onFormSubmit.bind(this)}>
          Register
            <label>E-mail:</label>
              <input type="email" name="email" placeholder="Enter your email..." onChange={this.handleChange}/>
            <label>Password:</label>
              <input type="password" name="password" placeholder="Enter your password..." onChange={this.handleChange}/>
            <label>Confirm Password:</label>
              <input type="password" name="password-confirm" placeholder="Re-enter your password..." onChange={this.handleChange} />
            <input type="submit" value="Submit" />
        </form>
    );
  }
}

export default Register;