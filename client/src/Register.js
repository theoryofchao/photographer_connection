import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

class Register extends Component {

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onRegistrationSubmit(this.props.registration);
    this.props.router.push("/");
  }

  render() {
    return (
      <Paper zDepth={4}>
        <form onSubmit={this.onFormSubmit.bind(this)} >
          <TextField
            name="email"
            type="email"
            fullWidth={true}
            value={this.props.registration.email}
            hintText="Enter Your E-mail...."
            floatingLabelText="Your E-mail"
            onChange={this.props.handleRegistrationChange}
          />
          <TextField
            name="password"
            type="password"
            fullWidth={true}
            value={this.props.registration.password}
            hintText="Enter Your New Password"
            floatingLabelText="Enter A Password"
            onChange={this.props.handleRegistrationChange}
          />
          <TextField
            name="password-confirm"
            type="password"
            fullWidth={true}
            value={this.props.registration.passwordConfirmation}
            hintText="Confirm Your Password"
            floatingLabelText="Please Confirm Your Password"
            onChange={this.props.handleRegistrationChange}
            />
          <input type="submit" value="Submit" />
        </form>
      </Paper>
    );
  }
}

export default Register;