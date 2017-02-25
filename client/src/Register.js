import React, { Component } from 'react';


var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class Register extends Component {

  handleEmailChange = (e) => {
    this.setState({registration: {email: e.target.value}})
  }

  handlePasswordChange = (e) => {
    this.setState({registration: {password: e.target.value}})
  }

  handlePasswordConfirmationChange = (e) => {
    this.setState({registration: {passwordConfirmation: e.target.value}})
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.registration)
  }
//
  render() {
    return (
        <form style={borderStyles} onSubmit={this.onFormSubmit.bind(this)}>
          Register
            <label>E-mail:</label>
              <input type="email" name="email" placeholder="Enter your email..." onChange={this.handleEmailChange}/>
            <label>Password:</label>
              <input type="password" name="password" placeholder="Enter your password..." onChange={this.handlePasswordChange}/>
            <label>Confirm Password:</label>
              <input type="password" name="password-confirm" placeholder="Re-enter your password..." onChange={this.handlePasswordConfirmationChange} />
            <input type="submit" value="Submit" />
        </form>
    );
  }
}

Register.contextTypes = {
  onRegistrationSubmit: React.PropTypes.func
}

export default Register;


// <input type="submit" value="Submit" onClick={this.context.onRegistrationSubmit}/>

// handleEmailChange = (e) => {
//     const registration = this.state.registration;
//     registration.email = e.target.value;
//     this.setState({registration: {registration}})
//   }

//   handlePasswordChange = (e) => {
//     const registration = this.state.registration;
//     registration.password = e.target.value;
//     this.setState({registration: {registration}})
//   }

//   handlePasswordConfirmationChange = (e) => {
//     const registration = this.state.registration;
//     registration.passwordConfirmation = e.target.value;
//     this.setState({registration: {registration}})
//   }