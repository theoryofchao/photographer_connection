import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
// import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';


var register = {
  border: "solid 2px red",
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "25px",
  margin: "auto"
}

var heading = {
  borderBottom: "solid 3px black",
  width: "70%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto"
}

var button = {
  padding: "15px",
  backgroundColor: "black",
  color: "red",
  borderRadius: "25px",
  fontSize: "0.9em",
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
          <h1 style={heading}> Register With Focus </h1>
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
            <input style={button} type="submit" value="Submit" />
        </form>
      </Paper>
    );
  }
}

export default Register;