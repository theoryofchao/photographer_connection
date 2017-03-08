import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

var mainBody = {
  height: "780px",

}

var loginStyle = {
  border: "solid 4px #F06543",
  width: "40%",
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
  backgroundColor: "#0e2d49",
  color: "#F06543",
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
      <div style={mainBody}>
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
              <h5 style={{borderTop: "solid 2px black"}}>If you havent' signed up with Focus, please <FlatButton
                style={{backgroundColor: "#e8ecf2"}}
                href="/#/register"
                >
                click here!
              </FlatButton></h5>
          </form>
        </Paper>
      </div>
    );
  }
}

export default Login;