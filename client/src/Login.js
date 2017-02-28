import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

var borderStyles = {
  padding: "30px"
}

class Login extends Component {

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onLoginSubmit(this.props.login);
    this.props.router.push("/");
  }

  render() {
    return (
      <Paper zDepth={2}>
        <form style={borderStyles} onSubmit={this.onFormSubmit}>
          <TextField
            type="email"
            name="email"
            floatingLabelText="E-mail"
            hintText="Enter Your E-mail Address"
            onChange={this.props.handleLoginChange}
           />
        <Divider />
        <TextField
          type="password"
          name="password"
          floatingLabelText="Password"
          hintText="Enter Your Password"
          onChange={this.props.handleLoginChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </Paper>
    );
  }
}

export default Login;