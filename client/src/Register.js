import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

var mainBody = {
  height: "780px",
  background: 'linear-gradient( 180deg, #1a2733, #668fb2 )'
}

var register = {
  border: "solid 4px #7EBF2D",
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
  backgroundColor: "#0e2d49",
  color: "#7EBF2D",
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

      <div style={mainBody}>
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
                floatingLabelStyle={{color: "#000"}}
                onChange={this.props.handleRegistrationChange}
              />
              <TextField
                name="password"
                type="password"
                fullWidth={true}
                value={this.props.registration.password}
                hintText="Enter Your New Password"
                floatingLabelText="Enter A Password"
                floatingLabelStyle={{color: "#000"}}
                onChange={this.props.handleRegistrationChange}
              />
              <TextField
                name="password-confirm"
                type="password"
                fullWidth={true}
                value={this.props.registration.passwordConfirmation}
                hintText="Confirm Your Password"
                floatingLabelText="Please Confirm Your Password"
                floatingLabelStyle={{color: "#000"}}
                onChange={this.props.handleRegistrationChange}
                />
                <br />
                <br />
              <input style={button} type="submit" value="Submit" />
              <h5 style={{borderTop: "solid 2px black"}}>If you already have an account registered with Focus, please <FlatButton
                style={{backgroundColor: "#e8ecf2"}}
                href="/#/login">
                click here!
              </FlatButton></h5>

          </form>
        </Paper>
      </div>
    );
  }
}

export default Register;