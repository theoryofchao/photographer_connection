import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';


var register = {
  border: "solid 2px red",
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "25px",
  margin: "auto"
}

var register2 = {
  borderBottom: "solid 3px black",
  width: "80%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto"
}

class Register extends Component {

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onRegistrationSubmit(this.props.registration);
    this.props.router.push("/");
  }

  render() {
    return (
      <Paper zDepth={2} style={register}>

        <form onSubmit={this.onFormSubmit.bind(this)} >
        <h1 style={register2}> Register With Focus </h1>
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
            <br />
            <br />
          <input type="submit" value="Submit" />
        </form>
      </Paper>
    );
  }
}

export default Register;