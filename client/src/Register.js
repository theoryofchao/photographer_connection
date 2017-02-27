import React, { Component } from 'react';


var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class Register extends Component {

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onRegistrationSubmit(this.props.registration);
  }

  render() {
    return (
        <form style={borderStyles} onSubmit={this.onFormSubmit.bind(this)}>
          Register
            <label>E-mail:</label>
              <input type="email" name="email" value={this.props.registration.email} placeholder="Enter your email..." onChange={this.props.handleRegistrationChange}/>
            <label>Password:</label>
              <input type="password" name="password" value={this.props.registration.password} placeholder="Enter your password..." onChange={this.props.handleRegistrationChange}/>
            <label>Confirm Password:</label>
              <input type="password" name="password-confirm" value={this.props.registration.passwordConfirmation} placeholder="Re-enter your password..." onChange={this.props.handleRegistrationChange} />
            <input type="submit" value="Submit" />
        </form>
    );
  }
}

export default Register;