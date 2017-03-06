import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

var loginStyle = {
  border: "solid 2px red",
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "45px",
  margin: "auto"
}

var heading = {
  borderBottom: "solid 3px black",
  width: "40%",
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

class Login extends Component {

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onLoginSubmit(this.props.login);
    this.props.router.push("/");
  }

  render() {
    return (
      <Paper zDepth={4} style={loginStyle}>
        <form onSubmit={this.onFormSubmit}>
          <h1 style={heading}> Login </h1>
            <TextField
              fullWidth={true}
              type="email"
              name="email"
              floatingLabelText="E-mail"
              hintText="Enter Your E-mail Address"
              onChange={this.props.handleLoginChange}
             />
          <TextField
            fullWidth={true}
            type="password"
            name="password"
            floatingLabelText="Password"
            hintText="Enter Your Password"
            onChange={this.props.handleLoginChange}
          />
          <input style={button} type="submit" value="Submit" />
      </form>
    </Paper>
    );
  }
}

export default Login;