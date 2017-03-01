import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

class Login extends Component {

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onLoginSubmit(this.props.login);
    this.props.router.push("/");
  }

  render() {
    return (
      <Paper zDepth={4}>
        <form onSubmit={this.onFormSubmit}>
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
        <input type="submit" value="Submit" />
      </form>
    </Paper>
    );
  }
}

export default Login;